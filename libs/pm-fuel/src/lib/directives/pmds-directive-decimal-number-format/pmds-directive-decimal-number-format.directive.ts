////////Angular imports
import {
  Directive, ElementRef,
  HostListener, inject, Input
} from '@angular/core';
import {FormControl} from "@angular/forms";

@Directive({
  selector: '[pmdsDecimalNumberFormat]',
  standalone: true,
})
export class PmdsDirectiveDecimalNumberFormat {
    private el = inject(ElementRef)
    @Input() control!: FormControl
    @HostListener("keydown", ["$event"])
    onKeyDown() {
        const previousValue = this.el.nativeElement.value;
        this.run(previousValue);
    }

    private run(oldValue: any) {
        setTimeout(() => {
            const currentValue = this.el.nativeElement.value;
            if (currentValue) {
                if (currentValue.indexOf('.') !== -1 && !this.isValid(currentValue, '.')) {
                    this.restoreValue(oldValue);
                    return;
                }
                if (currentValue.indexOf(',') !== -1 && !this.isValid(currentValue, ',')) {
                    this.restoreValue(oldValue);
                    return;
                }
            }
        });
    }

    private restoreValue(oldValue: any) {
        !!this.control && this.control.setValue(oldValue);
        this.el.nativeElement.value = oldValue;
    }

    private isValid(currentValue: string, separator: string): boolean {
        const split = currentValue.split(separator);
        return !(split.length > 1 && split[1].length > 2);
    }
}



