////////Angular imports
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
////////PNXT libraries
import { PmdsCdkTextComponent } from '../pmds-cdk-text/pmds-cdk-text.component';
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkBadgetNumbersComponent } from '../pmds-cdk-badget-numbers/pmds-cdk-badget-numbers.component';
////////Component imports
import { IPmdsCdkPendingTaskLiterals } from './models/pmds-cdk-pending-task-group-literals.model';
import { IPmdsCdkPendingTaskGroup } from './models/pmds-cdk-pending-task-group-tasks.model';
import { PmdsCdkPendingTaskEmptyComponent } from './components/pmds-cdk-pending-task-empty.component';
import { PmdsCdkPendingTaskSkeletonComponent } from './components/pmds-cdk-pending-task-skeleton/pmds-cdk-pending-task-skeleton.component';

@Component({
	selector: 'pmds-cdk-pending-task',
	standalone: true,
	imports: [
		PmdsCdkTextComponent,
		PmdsCdkBadgetNumbersComponent,
		PmdsCdkButtonComponent,
		PmdsCdkPendingTaskEmptyComponent,
		PmdsCdkPendingTaskSkeletonComponent,
	],
	templateUrl: './pmds-cdk-pending-task.component.html',
})
export class PmdsCdkPendingTaskComponent implements OnInit {
	@Input() dataQA!: string;
	@Input() groupTasks: IPmdsCdkPendingTaskGroup[] = [];
	@Input() literals!: IPmdsCdkPendingTaskLiterals;
	@Input() skeleton!: boolean;

	@Output() viewAll = new EventEmitter<void>();
	@Output() viewGroup = new EventEmitter<IPmdsCdkPendingTaskGroup>();

	componentSelector = 'pmds-cdk-pending-task';
	totalTask = 0;

	ngOnInit() {
		this.totalTask = this.groupTasks
			.map((task) => task.tasks)
			.reduce((a, b) => a + b, 0);
	}
}
