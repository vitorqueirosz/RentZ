import { ActionType } from 'typesafe-actions';
import { User } from '../auth/types';

import * as actions from './actions';

export type UpdateUserAction = ActionType<typeof actions>;

export interface UpdateUserState {
  readonly loadingUpdateUserRequest: boolean;
  readonly error: boolean;
  readonly avatar: FormData | null;
  readonly user: User | null;
}
