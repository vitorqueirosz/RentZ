import { AnyAction } from 'redux';
import { action } from 'typesafe-actions';

export function scheduleDateRequest({
  from,
  to,
}: {
  from: string;
  to: string;
}): AnyAction {
  return action('@schedule/SCHEDULE_DATE_REQUEST', { from, to });
}

export function scheduleDateSuccess({
  from,
  to,
}: {
  from: string;
  to: string;
}): AnyAction {
  return action('@schedule/SCHEDULE_DATE_SUCCESS', { from, to });
}

export function scheduleDateFailure(): AnyAction {
  return action('@schedule/SCHEDULE_DATE_FAILURE');
}
