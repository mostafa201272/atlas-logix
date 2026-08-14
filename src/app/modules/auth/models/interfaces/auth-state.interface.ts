import { ILoginResponse, ITenant } from './login-response.interface';

export interface IAuthState {
  data: ILoginResponse | null;
  selectedTenant: ITenant | null;
  isLoading: boolean;
  error: string | null;
}


