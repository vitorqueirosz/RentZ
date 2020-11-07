import { all, put, takeLatest, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* updateUser({
  payload,
}: ActionType<typeof actions.updateUserRequest>) {
  try {
    const { avatar } = payload;

    console.log(avatar);

    const { data } = yield call(api.patch, 'users/avatar', avatar);

    console.log('DATA', data);

    const user = data;

    yield put(actions.updateUserSuccess(user));
  } catch (error) {
    yield put(actions.updateUserFailure());
    console.log('ERROR', error);
  }
}

export default all([takeLatest('@user/UPDATE_USER_REQUEST', updateUser)]);
