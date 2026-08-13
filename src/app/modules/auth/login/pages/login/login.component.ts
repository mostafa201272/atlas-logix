import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBase } from '@core/bases/form-base.base';
import { TranslatePipe } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AtlasIdentityComponent } from '@shared/ui/atoms/atlas-identity/atlas-identity.component';
import { AtlasFormEmailInputComponent } from '@shared/ui/organisms/forms/atlas-form-email-input/atlas-form-email-input.component';
import { AtlasFormPasswordInputComponent } from '@shared/ui/organisms/forms/atlas-form-password-input/atlas-form-password-input.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';

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
  // BASE TRANSLATION POINT
  baseTranslationPoint = this.MODULES_ROUTES.modules.auth.login.itemsBaseTranslationKey;

  isLoading: boolean = false;
  isLoggedIn$!: Observable<boolean>;

  constructor() {
    super();
    // this.isLoggedIn$ = this.authService.checkLoggedIn();
    this.loadForm({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  onSubmit() {}
}
