import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';
import { AuthState } from './ducks/auth/types';

import { AuthAction } from './ducks/auth';
import { SignUpAction } from './ducks/signUp';
import { SignUpState } from './ducks/signUp/types';
import { CarState } from './ducks/cars/types';
import { CarActions } from './ducks/cars';

export interface StoreState {
  auth: AuthState;
  signUp: SignUpState;
  cars: CarState;
}

export type StoreAction = AuthAction | SignUpAction | CarActions;

// eslint-disable-next-line prettier/prettier
export default (reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
): any => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
