import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';
import { AuthState, AuthAction } from './ducks/auth/types';

import { SignUpAction, SignUpState } from './ducks/signUp/types';

import { CarState, CarAction } from './ducks/cars/types';

import { ScheduleAction, ScheduleState } from './ducks/schedule/types';
import { FavoriteAction, FavoriteState } from './ducks/favorites/types';
import { SignOutAction, SignOutState } from './ducks/signOut/types';
import {
  AppointmentAction,
  AppointmentState,
} from './ducks/appointments/types';
import { UpdateUserAction, UpdateUserState } from './ducks/user/types';

export interface StoreState {
  auth: AuthState;
  signUp: SignUpState;
  cars: CarState;
  schedule: ScheduleState;
  favorites: FavoriteState;
  signOut: SignOutState;
  appointments: AppointmentState;
  user: UpdateUserState;
}

export type StoreAction =
  | AuthAction
  | SignUpAction
  | CarAction
  | FavoriteAction
  | ScheduleAction
  | SignOutAction
  | AppointmentAction
  | UpdateUserAction;

// eslint-disable-next-line prettier/prettier
export default (reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
): any => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
