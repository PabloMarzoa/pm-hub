#!/bin/bash
set -e

# Default to dry-run
DRY_RUN=false

# Parse arguments
for arg in "$@"
do
    case $arg in
        --dry-run)
        DRY_RUN=true
        shift # Remove --dry-run from processing
        ;;
    esac
done

echo "Building libraries..."
npm run build:libs

LIBS=("dist/libs/pm-fuel")

for lib in "${LIBS[@]}"
do
    echo "Publishing $lib..."
    cd "$lib"
    if [ "$DRY_RUN" = true ]; then
        echo "DRY RUN: npm publish --access public --dry-run"
        npm publish --access public --dry-run
    else
        echo "npm publish --access public"
        npm publish --access public
    fi
    cd -
done

echo "Done!"
