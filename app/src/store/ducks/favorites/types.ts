import { ActionType } from 'typesafe-actions';
import { Car } from '../../../components/CarItem';

import * as actions from './actions';

export type FavoriteAction = ActionType<typeof actions>;

export interface FavoriteState {
  readonly error: boolean;
  readonly favorites: Car[];
}

export interface CarPayload {
  car: Car;
}
