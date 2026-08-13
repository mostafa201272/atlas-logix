import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CVABase } from '@core/bases/cva-base.base';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';
import { AtlasFormInputTemplateComponent } from '../templates/atlas-form-input-template/atlas-form-input-template.component';
import { AtlasFormInputErrorTemplateComponent } from '../templates/atlas-form-input-error-template/atlas-form-input-error-template.component';

@Component({
  selector: 'atlas-form-text-input',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    AtlasFormInputTemplateComponent,
    AtlasFormInputErrorTemplateComponent,
  ],
  templateUrl: './atlas-form-text-input.component.html',
  styleUrl: './atlas-form-text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AtlasFormTextInputComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtlasFormTextInputComponent extends CVABase {
  /** Optional - Regex pattern for validation (specific to text input) */
  readonly pattern = input<string | RegExp>('');

  /** Optional - Custom error message for pattern validation */
  readonly patternErrorMessage = input<string>('errors.forms.invalidPattern');

  /**
   * Get the form control name
   */
  protected override getControlName(): string {
    return 'textInput';
  }

  /**
   * Get additional validators specific to text input
   */
  protected override getAdditionalValidators(): ValidatorFn[] {
    /**
     * Additional validations list
     */
    const validators: ValidatorFn[] = [];

    /**
     * Read the pattern signal value
     */
    if (this.pattern()) {
      validators.push(Validators.pattern(this.pattern()));
    }

    /**
     * Return the validators list
     */
    return validators;
  }
}
