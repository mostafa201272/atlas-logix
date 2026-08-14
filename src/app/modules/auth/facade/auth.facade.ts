import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStore } from '../store/auth.store';
import { ILoginRequest } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  /**
   * INJECTION - Auth Store
   */
  private readonly authStore = inject(AuthStore);

  /**
   * STORE SIGNALS
   */
  readonly data = this.authStore.data;
  readonly isLoading = this.authStore.isLoading;
  readonly error = this.authStore.error;
  readonly isLoggedIn = this.authStore.isLoggedIn;
  readonly token = this.authStore.token;

  /**
   * Trigger Login
   */
  login(credentials: ILoginRequest): void {
    this.authStore.login(credentials);
  }

  /**
   * Fetch User Details for Session Hydration
   */
  getUser(): Observable<boolean> {
    return this.authStore.getUser();
  }

  /**
   * Trigger Logout / Reset
   */
  logout(): void {
    this.authStore.reset();
  }
}

