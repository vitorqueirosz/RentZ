import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* fetchCars({
  payload,
}: ActionType<typeof actions.fetchCarsRequest>) {
  try {
    const {
      type,
      initial_price,
      final_price,
      transmission,
      brand_id,
    } = payload;

    if (brand_id) {
      const { data } = yield call(api.get, 'cars/filters', {
        params: { type, initial_price, final_price, transmission, brand_id },
      });

      yield put(actions.fetchCarsSuccess({ cars: data }));

      return;
    }

    const { data } = yield call(api.get, 'cars/filters', {
      params: { type, initial_price, final_price, transmission },
    });

    yield put(actions.fetchCarsSuccess({ cars: data }));
  } catch (error) {
    yield put(actions.fetchCarsFailure());
  }
}

export default all([takeLatest('@cars/FETCH_CARS_REQUEST', fetchCars)]);
