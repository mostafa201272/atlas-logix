import { ILoginResponse } from './login-response.interface';

export interface IAuthState {
  data: ILoginResponse | null;
  isLoading: boolean;
  error: string | null;
}

