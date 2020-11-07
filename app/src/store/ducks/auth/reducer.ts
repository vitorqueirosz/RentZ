import { AuthState, AuthAction } from './types';

const INITIAL_STATE: AuthState = {
  isSignedIn: false,
  error: false,
  loadingSignInRequest: false,
  token: null,
  user: null,
};

export default function reducer(
  state = INITIAL_STATE,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        error: true,
      };
    default:
      return state;
  }
}
