import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type SignOutAction = ActionType<typeof actions>;

export interface SignOutState {
  loadingSignOutRequest: boolean;
  token: string | null;
  error: boolean;
}
