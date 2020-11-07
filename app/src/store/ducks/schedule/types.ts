import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type ScheduleAction = ActionType<typeof actions>;

export interface ScheduleState {
  readonly from: string | null;
  readonly to: string | null;
  readonly loadingScheduleRequest: boolean;
  readonly error: boolean;
}
