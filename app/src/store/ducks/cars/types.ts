import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type CarAction = ActionType<typeof actions>;

export interface CarState {
  readonly cars: [];
  readonly loadingSignInRequest: boolean;
  readonly data: CarPayload;
}

export interface CarPayload {
  type: string;
  initial_price: number;
  final_price: number;
  transmission: string;
  brand_id?: string;
}

export interface FetchCarSuccess {
  cars: CarPayload[];
}
