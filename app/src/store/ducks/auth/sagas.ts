import AsyncStorage from '@react-native-community/async-storage';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'sessions', { email, password });

    const { token, user } = data;

    (async function setDataToStorage() {
      await AsyncStorage.setItem('@Rentz:token', data.token);
      await AsyncStorage.setItem('@Rentz:user', JSON.stringify(data.user));
    })();

    yield put(actions.signInSuccess({ user, token }));

    api.defaults.headers.authorization = `Bearer ${token}`;
  } catch (error) {
    yield put(actions.signInFailure());
    console.log('ERROR SIGNIN', error);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
