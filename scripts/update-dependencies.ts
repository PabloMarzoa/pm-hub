#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

interface PackageInfo {
  name: string;
  version: string;
  path: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

interface DependencyGraph {
  [packageName: string]: {
    info: PackageInfo;
    dependents: string[]; // Libraries that depend on this
    dependencies: string[]; // Libraries it depends on
  };
}

class DependencyUpdater {
  private graph: DependencyGraph = {};
  private updatedPackages = new Set<string>();
  private organizationPrefix = '@pmarzoa/';

  constructor(private workspaceRoot: string) {}

  /**
   * Run the main script
   * @param changedComponents - Array of names of components that have changed
   */
  async run(changedComponents: string[]): Promise<void> {
    console.log('🔍 Analyzing dependencies in the monorepo...');

    // 1. Build the dependency graph
    await this.buildDependencyGraph();

    // 2. Process changed components
    const componentsToUpdate = this.normalizeComponentNames(changedComponents);

    console.log('\n📦 Modified components:', componentsToUpdate);

    // 3. Calcular todas las librerías que necesitan actualización
    const allPackagesToUpdate = this.calculatePackagesToUpdate(componentsToUpdate);

    console.log('\n🔄 Libraries that will be updated:', Array.from(allPackagesToUpdate));

    // 4. Update versions
    await this.updatePackageVersions(allPackagesToUpdate);

    console.log('\n✅ Process successfully completed!');
    console.log('\n📋 Summary of changes:');
    this.printUpdateSummary();
  }

  /**
   * Build the complete dependency graph of the monorepo
   */
  private async buildDependencyGraph(): Promise<void> {
    const packagePaths = this.findAllPackages();

    // First, load basic information about all packages.
    for (const packagePath of packagePaths) {
      const packageJson = JSON.parse(fs.readFileSync(path.join(packagePath, 'package.json'), 'utf-8'));

      if (packageJson.name?.startsWith(this.organizationPrefix)) {
        this.graph[packageJson.name] = {
          info: {
            name: packageJson.name,
            version: packageJson.version,
            path: packagePath,
            dependencies: packageJson.dependencies || {},
            peerDependencies: packageJson.peerDependencies || {}
          },
          dependents: [],
          dependencies: []
        };
      }
    }

    // Second, establish dependency relationships
    for (const [packageName, packageData] of Object.entries(this.graph)) {
      const allDeps = {
        ...packageData.info.dependencies,
        ...packageData.info.peerDependencies
      };

      for (const depName of Object.keys(allDeps)) {
        if (depName.startsWith(this.organizationPrefix) && this.graph[depName]) {
          // packageName depends on depName
          packageData.dependencies.push(depName);
          // depName is a dependency of packageName
          this.graph[depName].dependents.push(packageName);
        }
      }
    }
  }

  /**
   * Find all package.json files in the monorepo
   */
  private findAllPackages(): string[] {
    const packages: string[] = [];

    // Search in typical Nx folders
    const searchPaths = [
      'libs',
      'packages',
      'apps'
    ];

    for (const searchPath of searchPaths) {
      const fullPath = path.join(this.workspaceRoot, searchPath);
      if (fs.existsSync(fullPath)) {
        packages.push(...this.findPackagesRecursively(fullPath));
      }
    }

    return packages;
  }

  /**
   * Search for package.json recursively in a folder
   */
  private findPackagesRecursively(dir: string): string[] {
    const packages: string[] = [];

    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
          // If there is a package.json file in this folder, it is a package
          const packageJsonPath = path.join(fullPath, 'package.json');
          if (fs.existsSync(packageJsonPath)) {
            packages.push(fullPath);
          } else {
            // If not, keep searching recursively
            packages.push(...this.findPackagesRecursively(fullPath));
          }
        }
      }
    } catch (error) {
      // Ignore permission errors
    }

    return packages;
  }

  /**
   * Normalize component names to match package names
   */
  private normalizeComponentNames(components: string[]): string[] {
    return components.map(comp => {
      // 1. If it already has the prefix and exists in the graph, return it
      if (this.graph[comp]) {
        return comp;
      }

      // 2. Try adding the prefix directly
      const withPrefix = `${this.organizationPrefix}${comp}`;
      if (this.graph[withPrefix]) {
        return withPrefix;
      }

      // 3. Try adding pmds- prefix (e.g. pmds-cdk -> @pmhub/pmds-cdk)
      const withPmdsPrefix = `${this.organizationPrefix}pmds-${comp}`;
      if (this.graph[withPmdsPrefix]) {
        return withPmdsPrefix;
      }

       // 4. Try adding pmds-cdk/common/etc prefix if the user just passes "button" or similar (Legacy support but safer)
      const possibleNames = [
        `${this.organizationPrefix}pmds-cdk-${comp}`,
        `${this.organizationPrefix}pmds-common-${comp}`, // Added common
        `${this.organizationPrefix}pmds-core-${comp}`,
      ];

      for (const name of possibleNames) {
        if (this.graph[name]) {
          return name;
        }
      }

      console.warn(`⚠️  Component not found: ${comp}`);
      return comp;
    }).filter(comp => this.graph[comp]);
  }

  /**
   * Calculate all packages that need updating using BFS
   */
  private calculatePackagesToUpdate(initialComponents: string[]): Set<string> {
    const toUpdate = new Set<string>();
    const queue: string[] = [...initialComponents];

    // Add the initial components
    initialComponents.forEach(comp => toUpdate.add(comp));

    while (queue.length > 0) {
      const currentPackage = queue.shift()!;

      if (this.graph[currentPackage]) {
        // Add all dependencies (packages that use this one)
        for (const dependent of this.graph[currentPackage].dependents) {
          if (!toUpdate.has(dependent)) {
            toUpdate.add(dependent);
            queue.push(dependent);
          }
        }
      }
    }

    return toUpdate;
  }

  /**
   * Update the versions of the specified packages
   */
  private async updatePackageVersions(packagesToUpdate: Set<string>): Promise<void> {
    const updateOrder = this.getUpdateOrder(packagesToUpdate);

    console.log('\n🔄 Update order:', updateOrder);

    for (const packageName of updateOrder) {
      const packageData = this.graph[packageName];
      const packageJsonPath = path.join(packageData.info.path, 'package.json');

      // Read current package.json
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

      // Calculate new version (increment patch)
      const newVersion = this.incrementPatchVersion(packageJson.version);
      console.log(`📝 ${packageName}: ${packageJson.version} → ${newVersion}`);

      // Update package version
      packageJson.version = newVersion;

      // Update internal dependencies if necessary
      if (packageJson.dependencies) {
        for (const [depName, depVersion] of Object.entries(packageJson.dependencies)) {
          if (typeof depVersion === 'string' && 
              depName.startsWith(this.organizationPrefix) && 
              this.updatedPackages.has(depName)) {
            const updatedDepData = this.graph[depName];
            packageJson.dependencies[depName] = updatedDepData.info.version;
          }
        }
      }

      // Save changes
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

      // Update the graph with the new version
      this.graph[packageName].info.version = newVersion;
      this.updatedPackages.add(packageName);
    }
  }

  /**
   * Determine the correct order for updating packages
   * (dependents before dependents)
   */
  private getUpdateOrder(packagesToUpdate: Set<string>): string[] {
    const visited = new Set<string>();
    const visiting = new Set<string>();
    const result: string[] = [];

    const visit = (packageName: string) => {
      if (visited.has(packageName)) return;
      if (visiting.has(packageName)) {
        console.warn(`⚠️  Dependencia circular detectada: ${packageName}`);
        return;
      }

      visiting.add(packageName);

      // First visit all the rooms that also need updating
      if (this.graph[packageName]) {
        for (const dep of this.graph[packageName].dependencies) {
          if (packagesToUpdate.has(dep)) {
            visit(dep);
          }
        }
      }

      visiting.delete(packageName);
      visited.add(packageName);
      result.push(packageName);
    };

    for (const packageName of packagesToUpdate) {
      visit(packageName);
    }

    return result;
  }

  /**
   * Increase the patch version
   */
  private incrementPatchVersion(version: string): string {
    const parts = version.split('.');
    if (parts.length >= 3) {
      parts[2] = (parseInt(parts[2], 10) + 1).toString();
      return parts.join('.');
    }
    return version;
  }

  /**
   * Print a summary of the changes made
   */
  private printUpdateSummary(): void {
    console.log(`\n📊 Total number of updated libraries: ${this.updatedPackages.size}`);

    for (const packageName of this.updatedPackages) {
      const packageData = this.graph[packageName];
      console.log(`   • ${packageName}: ${packageData.info.version}`);
    }
  }
}

// Main script
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
🚀 NxTDS Dependency Update Script
Usage:
  npm run update-deps component1 component2 ...
  
or
  node update-dependencies.js component1 component2 ...
Examples:
  npm run update-deps button modal
  npm run update-deps pmds-cdk-button pmds-cdk-modal
  npm run update-deps @pmhub/pmds-cdk
Parameters:
  - Component names can be with or without a prefix.
  - The script will automatically detect dependencies.
  - Patch versions (+0.0.1) will be updated.
    `);
    process.exit(1);
  }

  try {
    const workspaceRoot = process.cwd();
    const updater = new DependencyUpdater(workspaceRoot);
    await updater.run(args);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
