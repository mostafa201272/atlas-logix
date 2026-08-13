import { Component, input, signal, ChangeDetectionStrategy, WritableSignal } from '@angular/core';
import { CVABase } from '@core/bases/cva-base.base';
import { PasswordModule } from 'primeng/password';
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AtlasFormInputTemplateComponent } from '../templates/atlas-form-input-template/atlas-form-input-template.component';
import { AtlasFormInputErrorTemplateComponent } from '../templates/atlas-form-input-error-template/atlas-form-input-error-template.component';

@Component({
  selector: 'atlas-form-password-input',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    AtlasFormInputTemplateComponent,
    AtlasFormInputErrorTemplateComponent,
  ],
  templateUrl: './atlas-form-password-input.component.html',
  styleUrl: './atlas-form-password-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AtlasFormPasswordInputComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtlasFormPasswordInputComponent extends CVABase {
  /** Optional - Feedback for password strength */
  readonly feedback = input<boolean>(false);

  /** Optional - Regex pattern for validation (e.g. password strength) */
  readonly pattern = input<string | RegExp>('');

  /** Optional - Custom error message for pattern validation */
  readonly patternErrorMessage = input<string>('errors.forms.invalidPattern');

  /**
   * Get the form control name
   */
  protected override getControlName(): string {
    return 'passwordInput';
  }

  /**
   * Get additional validators specific to password input
   */
  protected override getAdditionalValidators(): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    if (this.pattern()) {
      validators.push(Validators.pattern(this.pattern()));
    }

    return validators;
  }
}
