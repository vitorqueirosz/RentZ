import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { Creators, Types } from '.';
import api from '../../../services/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* fetchCars({
  payload,
}: ActionType<typeof Creators.fetchCarsRequest>) {
  try {
    const {
      type,
      initial_price,
      final_price,
      transmission,
      brand_id,
    } = payload;

    console.log(type, transmission, final_price, brand_id);

    if (brand_id) {
      const { data } = yield call(api.get, 'cars/filters', {
        params: { type, initial_price, final_price, transmission, brand_id },
      });

      yield put(Creators.fetchCarsSuccess({ cars: data }));

      return;
    }

    const { data } = yield call(api.get, 'cars/filters', {
      params: { type, initial_price, final_price, transmission },
    });

    yield put(Creators.fetchCarsSuccess({ cars: data }));
  } catch (error) {
    yield put(Creators.fetchCarsFailure());
  }
}

export default all([takeLatest(Types.FETCH_CARS_REQUEST, fetchCars)]);
