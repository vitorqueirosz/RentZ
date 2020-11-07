import { SignUpAction, SignUpState } from './types';

const INITIAL_STATE: SignUpState = {
  error: false,
  loadingSignUpRequest: false,
  user: null,
};

export default function reducer(
  state = INITIAL_STATE,
  action: SignUpAction,
): SignUpState {
  switch (action.type) {
    case '@signUp/SIGN_UP_REQUEST':
      return { ...state, loadingSignUpRequest: true };

    case '@signUp/SIGN_UP_SUCCESS':
      return {
        ...state,
        loadingSignUpRequest: false,
        user: action.payload.user,
      };

    case '@signUp/SIGN_UP_FAILURE':
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}
