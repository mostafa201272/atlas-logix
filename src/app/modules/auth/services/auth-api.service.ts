import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { AUTH_APIS } from '@utilities/apis/modules/auth/auth.apis';
import { ILoginRequest, ILoginResponse, IUserResponse } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  /**
   * Inject services
   */
  private httpService = inject(HttpService);

  /**
   * POST - Login User
   */
  login(credentials: ILoginRequest): Observable<ILoginResponse> {
    return this.httpService.postData<ILoginResponse>(
      AUTH_APIS.LOGIN,
      credentials as unknown as Record<string, unknown>,
    );
  }

  /**
   * GET - User Roles, Tenants & Permissions
   */
  user(): Observable<IUserResponse> {
    return this.httpService.getData<IUserResponse>(AUTH_APIS.USER);
  }
}
