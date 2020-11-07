import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import signUp from './signUp/sagas';
import cars from './cars/sagas';
import signOut from './signOut/sagas';
import appointments from './appointments/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, signUp, cars, signOut, appointments, user]);
}
