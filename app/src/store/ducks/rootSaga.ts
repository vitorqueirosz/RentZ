import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import signUp from './signUp/sagas';
import cars from './cars/sagas';

export default function* rootSaga() {
  return yield all([auth, signUp, cars]);
}
