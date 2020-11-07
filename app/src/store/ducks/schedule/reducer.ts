import { ScheduleAction, ScheduleState } from './types';

const INITIAL_STATE: ScheduleState = {
  from: null,
  to: null,
  loadingScheduleRequest: false,
  error: false,
};

export default function reducer(
  state = INITIAL_STATE,
  action: ScheduleAction,
): ScheduleState {
  switch (action.type) {
    case '@schedule/SCHEDULE_DATE_REQUEST':
      return {
        ...state,
        loadingScheduleRequest: true,
        from: action.payload.from,
        to: action.payload.to,
      };

    case '@schedule/SCHEDULE_DATE_SUCCESS':
      return {
        ...state,
        loadingScheduleRequest: false,
      };

    case '@schedule/SCHEDULE_DATE_FAILURE':
      return {
        ...state,
        loadingScheduleRequest: false,
        error: true,
      };

    default:
      return state;
  }
}
