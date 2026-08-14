import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBase } from '@core/bases/form-base.base';
import { TranslatePipe } from '@ngx-translate/core';
import { AtlasIdentityComponent } from '@shared/ui/atoms/atlas-identity/atlas-identity.component';
import { AtlasFormEmailInputComponent } from '@shared/ui/organisms/forms/atlas-form-email-input/atlas-form-email-input.component';
import { AtlasFormPasswordInputComponent } from '@shared/ui/organisms/forms/atlas-form-password-input/atlas-form-password-input.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { AuthFacade } from '../../../facade/auth.facade';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslatePipe,
    AtlasIdentityComponent,
    AtlasFormEmailInputComponent,
    AtlasFormPasswordInputComponent,
    AtlasButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends FormBase {
  /**
   * INJECTION - Auth Facade
   */
  private readonly authFacade = inject(AuthFacade);

  /**
   * Holder - Base Translation Point
   */
  baseTranslationPoint = this.MODULES_ROUTES.modules.auth.login.itemsBaseTranslationKey;

  /**
   * STATE - Auth Error State
   */
  readonly authError = this.authFacade.error;

  /**
   * COMPUTED - Auth Loading State
   */
  get isLoading(): boolean {
    return this.authFacade.isLoading();
  }

  constructor() {
    super();
    this.loadForm({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  /**
   * Submit Login Form
   */
  onSubmit(): void {
    /**
     * Form Validation
     */
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    /**
     * Login
     */
    this.authFacade.login(this.form.value);
  }
}
