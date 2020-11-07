import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as authActions from '../auth/actions';

export function* signOut({
  payload,
}: ActionType<typeof actions.signOutRequest>) {
  try {
    (async function removeItemFromStorage() {
      await AsyncStorage.multiRemove(['@Rentz:token', '@Rentz:user']);
    })();

    yield put(actions.signOutSuccess());
    yield put(authActions.signInSuccess({ token: null, user: null }));
  } catch (error) {
    yield put(actions.signOutFailure());
  }
}

export default all([takeLatest('@signOut/SIGN_OUT_REQUEST', signOut)]);
