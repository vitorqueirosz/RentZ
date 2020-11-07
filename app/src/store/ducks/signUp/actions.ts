import { action } from 'typesafe-actions';
import { SignUpRequest, SignUpSuccess } from './types';

export function signUpRequest({ name, cpf, email, password }: SignUpRequest) {
  return action('@signUp/SIGN_UP_REQUEST', { name, cpf, email, password });
}

export function signUpSuccess({ user }: SignUpSuccess) {
  return action('@signUp/SIGN_UP_SUCCESS', { user });
}

export function signUpFailure() {
  return action('@signUp/SIGN_UP_FAILURE');
}
