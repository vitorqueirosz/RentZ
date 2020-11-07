import { ActionType } from 'typesafe-actions';
import { Appointment } from '../../../pages/Appointments';

import * as actions from './actions';

export type AppointmentAction = ActionType<typeof actions>;

export interface AppointmentState {
  readonly appointments: Appointment[];
  readonly loadingAppointmentsRequest: boolean;
  readonly error: boolean;
}
