// import { ActionType } from 'typesafe-actions';

export interface AuthState {
  readonly loadingSignInRequest: boolean;
  readonly isSignedIn: boolean;
  readonly error: boolean;
  readonly user: User | null;
  readonly token: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  avatar: string;
  level: string;
}
