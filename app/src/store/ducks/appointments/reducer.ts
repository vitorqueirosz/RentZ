import { AppointmentAction, AppointmentState } from './types';

const INITIAL_STATE: AppointmentState = {
  appointments: [],
  loadingAppointmentsRequest: false,
  error: false,
};

export default function reducer(
  state = INITIAL_STATE,
  action: AppointmentAction,
): AppointmentState {
  switch (action.type) {
    case '@appointments/FETCH_APPOINTMENTS_REQUEST':
      return {
        ...state,
        loadingAppointmentsRequest: true,
      };

    case '@appointments/FETCH_APPOINTMENTS_SUCCESS':
      return {
        ...state,
        loadingAppointmentsRequest: false,
        appointments: action.payload.appointments,
      };

    case '@appointments/FETCH_APPOINTMENTS_FAILURE':
      return {
        ...state,
        loadingAppointmentsRequest: false,
        error: true,
      };

    default:
      return state;
  }
}
