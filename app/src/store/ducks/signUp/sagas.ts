import { all, put, takeLatest, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* signUp({ payload }: ActionType<typeof actions.signUpRequest>) {
  try {
    const { name, cpf, email, password } = payload;

    const { data } = yield call(api.post, 'users', {
      name,
      cpf,
      email,
      password,
    });

    yield put(actions.signUpSuccess({ user: data }));
  } catch (error) {
    yield put(actions.signUpFailure());
    console.log('ERROR', error);
  }
}

export default all([takeLatest('@signUp/SIGN_UP_REQUEST', signUp)]);
