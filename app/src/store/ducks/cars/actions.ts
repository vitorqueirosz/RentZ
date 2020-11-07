import { action } from 'typesafe-actions';

import { CarPayload, FetchCarSuccess } from './types';

export function fetchCarsRequest({
  type,
  initial_price,
  final_price,
  transmission,
  brand_id,
}: any) {
  return action('@cars/FETCH_CARS_REQUEST', {
    type,
    initial_price,
    final_price,
    transmission,
    brand_id,
  });
}

export function fetchCarsSuccess(cars: []) {
  return action('@cars/FETCH_CARS_SUCCESS', { cars });
}

export function fetchCarsFailure() {
  return action('@cars/FETCH_CARS_FAILURE');
}
