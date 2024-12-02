import { ChangeDetectorRef, Component, effect, inject, signal, untracked, viewChild } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { OneCheckedDirective } from '../shared/directives/one-checked.directive';
import { JsonPipe } from '@angular/common';
import { EqualValuesDirective } from '../shared/directives/equal-values.directive';
import { ValidationClassesDirective } from '../shared/directives/validation-classes.directive';
import { SameValueDirective } from '../shared/directives/same-value.directive';

@Component({
  selector: 'template-forms',
  imports: [
    FormsModule,
    OneCheckedDirective,
    EqualValuesDirective,
    ValidationClassesDirective,
    SameValueDirective,
    JsonPipe,
  ],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css',
})
export class TemplateFormsComponent {
  days = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
  daysOpen = new Array(7).fill(true);

  email = signal('');
}
