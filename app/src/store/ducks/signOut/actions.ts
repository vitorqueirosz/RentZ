import { action } from 'typesafe-actions';

export function signOutRequest({ token }: { token: string }) {
  return action('@signOut/SIGN_OUT_REQUEST', { token });
}

export function signOutSuccess() {
  return action('@signOut/SIGN_OUT_SUCCESS');
}

export function signOutFailure() {
  return action('@signOut/SIGN_OUT_FAILURE');
}
