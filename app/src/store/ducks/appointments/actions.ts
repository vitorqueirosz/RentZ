import { action } from 'typesafe-actions';
import { Appointment } from '../../../pages/Appointments';

export function fetchAppointmentsRequest() {
  return action('@appointments/FETCH_APPOINTMENTS_REQUEST');
}

export function fetchAppointmentsSuccess(appointments: Appointment[]) {
  return action('@appointments/FETCH_APPOINTMENTS_SUCCESS', { appointments });
}

export function fetchAppointmentsFailure() {
  return action('@appointments/FETCH_APPOINTMENTS_FAILURE');
}
