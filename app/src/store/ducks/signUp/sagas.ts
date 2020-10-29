import { all, put, takeLatest, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { Creators, Types } from '.';
import api from '../../../services/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* signUp({
  payload,
}: ActionType<typeof Creators.signUpRequest>) {
  try {
    const { name, cpf, email, password } = payload;

    // console.log(payload);

    const { data } = yield call(api.post, 'users', {
      name,
      cpf,
      email,
      password,
    });

    console.log(data);

    yield put(Creators.signUpSuccess({ user: data }));
  } catch (error) {
    yield put(Creators.signUpFailure());
    console.log('ERROR', error);
  }
}

export default all([takeLatest(Types.SIGN_UP_REQUEST, signUp)]);
