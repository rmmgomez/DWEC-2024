import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { oneCheckedValidator } from '../shared/validators/one-checked.validator';
import { JsonPipe } from '@angular/common';
import { equalValues } from '../shared/validators/equal-values.validator';
import { ValidationClassesDirective } from '../shared/directives/validation-classes.directive';
import { sameValueValidator } from '../shared/validators/same-value.validator';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe, ValidationClassesDirective],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  days = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
  daysOpen = new Array(7).fill(true);

  #fb = inject(NonNullableFormBuilder);

  daysForm = this.#fb.group({
    daysOpen: this.#fb.array(
      new Array(7).fill(0).map(() => this.#fb.control(false)), // Genera 7 objetos FormControl con valor false
      { validators: [oneCheckedValidator] }
    ),
  });

  emailGroupForm = this.#fb.group({
    emailGroup: this.#fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        repeatEmail: '',
      },
      { validators: equalValues('email', 'repeatEmail') }
    ),
  });

  // Aquí el validador lo ponemos a nivel de formulario
  emailGroupForm2 = this.#fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      repeatEmail: '',
    },
    { validators: equalValues('email', 'repeatEmail') }
  );

  // Aquí el validador lo ponemos a nivel de campo
  emailControl = this.#fb.control('', [Validators.required, Validators.email]);
  emailControl2 = this.#fb.control('', [sameValueValidator(this.emailControl)]);
  emailGroupForm3 = this.#fb.group({
    email: this.emailControl,
    repeatEmail: this.emailControl2,
  });

  #changeDetecion = inject(ChangeDetectorRef);

  constructor() {
    this.emailControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.emailControl2.updateValueAndValidity()
        this.#changeDetecion.markForCheck();
      });
  }
}
