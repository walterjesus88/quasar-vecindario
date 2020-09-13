import { LoginState } from './login/types';

export interface RootState {
  count: number;
  login: LoginState;
}

// export interface LoginState {
//   username: string;
//   password: string;
//   isLoggedIn: boolean;
// }