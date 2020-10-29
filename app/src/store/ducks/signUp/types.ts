import { User } from '../auth/types';

export interface SignUpState {
  readonly loadingSignUpRequest: boolean;
  readonly error: boolean;
  readonly user: User | null;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

export interface SignUpSuccess {
  user: User;
}
