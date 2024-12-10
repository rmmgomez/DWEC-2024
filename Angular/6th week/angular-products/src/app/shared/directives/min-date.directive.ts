import { Directive, input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[minDate][type=date]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true },
  ],
})
export class MinDateDirective implements Validator {
  minDate = input.required<string>();

  validate(control: FormControl): ValidationErrors | null {
    if (this.minDate() && control.value && this.minDate() > control.value) {
      return { minDate: true }; // Error returned
    }

    return null; // No errors
  }
}
