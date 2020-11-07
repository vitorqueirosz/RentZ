import { action } from 'typesafe-actions';
import { User } from '../auth/types';

export function updateUserRequest({ avatar }: { avatar: FormData }) {
  return action('@user/UPDATE_USER_REQUEST', { avatar });
}

export function updateUserSuccess(user: User) {
  return action('@user/UPDATE_USER_SUCCESS', { user });
}

export function updateUserFailure() {
  return action('@user/UPDATE_USER_FAILURE');
}
