import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CVABase } from '@core/bases/cva-base.base';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';
import { AtlasFormInputTemplateComponent } from '../templates/atlas-form-input-template/atlas-form-input-template.component';
import { AtlasFormInputErrorTemplateComponent } from '../templates/atlas-form-input-error-template/atlas-form-input-error-template.component';

@Component({
  selector: 'atlas-form-email-input',
  imports: [
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    AtlasFormInputTemplateComponent,
    AtlasFormInputErrorTemplateComponent,
  ],
  templateUrl: './atlas-form-email-input.component.html',
  styleUrl: './atlas-form-email-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AtlasFormEmailInputComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtlasFormEmailInputComponent extends CVABase {
  /**
   * Get the form control name
   */
  protected override getControlName(): string {
    return 'emailInput';
  }

  /**
   * Get additional validators specific to email input
   * Always includes email validation - cannot be overridden by user
   */
  protected override getAdditionalValidators(): ValidatorFn[] {
    return [Validators.email];
  }
}
