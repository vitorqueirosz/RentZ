import { ActionType } from 'typesafe-actions';
import { User } from '../auth/types';

import * as actions from './actions';

export type SignUpAction = ActionType<typeof actions>;

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
