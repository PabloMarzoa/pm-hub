////////Angular imports
import { NgClass } from '@angular/common';
import {
	AfterViewInit,
	Component,
	EventEmitter,
	inject,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
} from '@angular/core';

@Component({
	selector: 'pmds-cdk-select-paginator',
	standalone: true,
	imports: [NgClass],
	templateUrl: './pmds-cdk-select-paginator.component.html',
})
export class PmdsCdkSelectPaginatorComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	@Input() dataQA!: string;
	@Input() initialValue!: number;
	@Input() options!: number[];
	@Input() selectedItem!: number;
	@Input() search!: boolean;

	@Output() valueClick: EventEmitter<number> = new EventEmitter<number>();

	componentSelector = 'pmds-cdk-select-paginator-';
	displayValues = false;
	omitEvent = false;
	filterValues!: number[];

	private renderer = inject(Renderer2);
	private unlistener!: () => void;

	ngOnInit(): void {
		this.filterValues = this.options;
	}

	ngAfterViewInit() {
		this.unlistener = this.renderer.listen('window', 'click', () => {
			if (!this.omitEvent) {
				this.displayValues = false;
				this.omitEvent = false;
				this.filterValues = this.options;
			}
		});
		Promise.resolve().then(
			() =>
				(this.selectedItem =
					this.selectedItem || (this.initialValue ?? this.options[0]))
		);
	}

	ngOnDestroy() {
		!!this.unlistener && this.unlistener();
	}

	onValueClick(page: number) {
		if (this.selectedItem !== page) {
			this.selectedItem = page;
			this.valueClick.emit(page);
		}
	}

	valueFilter(ev: Event) {
		const query = (ev.target as HTMLInputElement).value;
		this.filterValues = query
			? this.options.filter((value) => value.toString().includes(query))
			: this.options;
		this.omitEvent = false;
	}
}
