import { CarState, CarPayload, CarAction } from './types';

const INITIAL_STATE: CarState = {
  cars: [],
  loadingSignInRequest: false,
  data: {} as CarPayload,
};

export default function reducer(state = INITIAL_STATE, action: CarAction) {
  switch (action.type) {
    case '@cars/FETCH_CARS_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
        data: action.payload,
      };

    case '@cars/FETCH_CARS_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        cars: action.payload.cars,
      };

    case '@cars/FETCH_CARS_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
      };

    default:
      return state;
  }
}
