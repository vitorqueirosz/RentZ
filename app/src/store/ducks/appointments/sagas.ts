import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import * as actions from './actions';

export function* appointments() {
  try {
    const { data } = yield call(api, '/users/rents');

    console.log('SAGA', data);

    yield put(actions.fetchAppointmentsSuccess(data));
  } catch (error) {
    yield put(actions.fetchAppointmentsFailure());
  }
}
export default all([
  takeLatest('@appointments/FETCH_APPOINTMENTS_REQUEST', appointments),
]);
