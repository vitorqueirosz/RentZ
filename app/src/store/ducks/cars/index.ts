import { CarState, CarPayload, FetchCarSuccess } from './types';

export interface CarActions {
  type: any;
  payload: any;
  FETCH_CARS_REQUEST: string;
  FETCH_CARS_SUCCESS: string;
  FETCH_CARS_FAILURE: string;
}

const INITIAL_STATE: CarState = {
  cars: [],
  loadingSignInRequest: false,
  data: {} as CarPayload,
};

export default function reducer(state = INITIAL_STATE, action: CarActions) {
  switch (action.type) {
    case Types.FETCH_CARS_REQUEST:
      return {
        ...state,
        loadingSignInRequest: true,
        data: action.payload,
      };

    case Types.FETCH_CARS_SUCCESS:
      return {
        ...state,
        loadingSignInRequest: false,
        cars: action.payload.cars,
      };

    case Types.FETCH_CARS_FAILURE:
      return {
        ...state,
        loadingSignInRequest: false,
      };

    default:
      return state;
  }
}

export const Types: CarActions = {
  type: {},
  payload: {},
  FETCH_CARS_REQUEST: '@cars/FETCH_CARS_REQUEST',
  FETCH_CARS_SUCCESS: '@cars/FETCH_CARS_SUCCESS',
  FETCH_CARS_FAILURE: '@cars/FETCH_CARS_FAILURE',
};

export const Creators = {
  fetchCarsRequest: ({
    type,
    initial_price,
    final_price,
    transmission,
    brand_id,
  }: CarPayload): any => {
    return {
      type: Types.FETCH_CARS_REQUEST,
      payload: { type, initial_price, final_price, transmission, brand_id },
    };
  },
  fetchCarsSuccess: (cars: FetchCarSuccess) => {
    return {
      type: Types.FETCH_CARS_SUCCESS,
      payload: { cars },
    };
  },
  fetchCarsFailure: () => {
    return {
      type: Types.FETCH_CARS_FAILURE,
    };
  },
};
