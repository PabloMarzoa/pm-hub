////////Angular imports
import {
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	inject,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	AbstractControl,
	ControlValueAccessor,
	FormControl,
	FormGroupDirective,
	NG_VALUE_ACCESSOR
} from '@angular/forms';
////////Third party libraries
import { Subject, timer } from 'rxjs';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsDirectiveTitle } from '../../index';
////////Component imports
import { TPmdsCdkEditableContentPosition } from './models/pmds-cdk-editable-content-tooltip-position.model';
import { IPmdsCdkEditableContentConfirmValue } from './models/pmds-cdk-editable-content-confirm-value.model';

@Component({
	selector: 'pmds-cdk-editable-content',
	standalone: true,
	imports: [CommonModule, PmdsCdkButtonComponent, PmdsDirectiveTitle],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkEditableContentComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-editable-content.component.html',
})
export class PmdsCdkEditableContentComponent
	implements OnInit, OnDestroy, ControlValueAccessor
{
	@ViewChild('inputValue', { static: false }) inputValue!: ElementRef;

	@Input() contentPosition: TPmdsCdkEditableContentPosition = 'left';
	@Input() dataQA!: string;
	@Input() formControl!: AbstractControl;
	@Input() formControlName!: string;
	@Input() hideOnTablet!: boolean;
	@Input() isDisabled!: boolean;
	@Input() noEditClass = 'font-body-s-bold';
	@Input() noEditIcon!: string;
	@Input() noEditValue!: string;
	@Input() placeholder!: string;
	@Input() tooltipPosition: TPmdsCdkEditableContentPosition = 'left';
	@Input() tooltipValue!: string;
	@Input() typeInput: 'text' | 'number' = 'text';

	@Output() noEditValueChange: EventEmitter<string> =
		new EventEmitter<string>();
	@Output() valueChange: EventEmitter<IPmdsCdkEditableContentConfirmValue> =
		new EventEmitter<IPmdsCdkEditableContentConfirmValue>();

	componentSelector = 'pmds-cdk-editable-content-';
	isEditing = false;
	omitEvent = false;
	showError = false;
	value!: string;

	private unlistener!: () => void;
	private formGroupDirective = inject(FormGroupDirective);
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private renderer = inject(Renderer2);

	ngOnInit() {
		this.formControl =
			this.formControl ??
			(this.formGroupDirective?.form?.get(
				this.formControlName
			) as FormControl);
		this.noEditValue = this.formControl?.value || this.noEditValue;
		this.value = this.noEditValue;
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
		!!this.unlistener && this.unlistener();
	}

	ngAfterViewInit() {
		this.unlistener = this.renderer.listen(
			'window',
			'click',
			(e: Event) => {
				if (this.isEditing && !this.omitEvent) {
					this.isEditing = false;
					this.updateValue();
				}
				this.omitEvent = false;
			}
		);
	}

	changeValue(ev: Event) {
		this.value = (ev.target as HTMLInputElement).value;
		this.formControl?.patchValue(this.value);
		this.formControl?.markAsTouched();
		this.showError = this.formControl?.invalid;
	}

	resetValue() {
		this.value = '';
		this.formControl?.reset();
		this.inputValue.nativeElement.focus();
	}

	initEdit() {
		this.isEditing = true;
		timer(0).subscribe((_) => this.inputValue.nativeElement.focus());
	}

	onChange(_: unknown) {}

	onTouch() {}

	writeValue(value: string) {
		this.noEditValue = value || '';
		this.value = value || '';
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = this.isDisabled ?? isDisabled;
	}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => unknown) {
		this.onTouch = fn;
	}

	clickSection(event: Event) {
		this.omitEvent = !!this.isEditing;
		event.stopPropagation()
	}

	updateValue() {
		const oldValue = `${this.noEditValue || ''}`;
		this.noEditValue = this.value;
		this.noEditValueChange.emit(this.value);
		this.valueChange.emit({
			oldValue,
			newValue: this.value,
		});
	}
}
