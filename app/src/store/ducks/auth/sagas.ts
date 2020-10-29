import AsyncStorage from '@react-native-community/async-storage';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { Creators, Types } from '.';
import api from '../../../services/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* signIn({
  payload,
}: ActionType<typeof Creators.signInRequest>) {
  try {
    const { email, password } = payload;

    console.log(email, password);

    const { data } = yield call(api.post, 'sessions', { email, password });

    yield put(Creators.signInSuccess({ user: data.user, token: data.token }));

    AsyncStorage.setItem('@Rentz:token', data.token);
    AsyncStorage.setItem('@Rentz:user', JSON.stringify(data.user));
  } catch (error) {
    yield put(Creators.signInFailure());
    console.log('ERROR SIGNIN', error);
  }
}

export default all([takeLatest(Types.SIGN_IN_REQUEST, signIn)]);
