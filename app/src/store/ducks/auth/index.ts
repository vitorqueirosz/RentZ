import { AuthState, User } from './types';

export interface AuthAction {
  type: any;
  payload: any;
  SIGN_IN_REQUEST: string;
  SIGN_IN_SUCCESS: string;
  SIGN_IN_FAILURE: string;
}

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
    case Types.SIGN_IN_REQUEST:
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case Types.SIGN_IN_FAILURE:
      return {
        ...state,
        loadingSignInRequest: false,
        error: true,
      };
    default:
      return state;
  }
}

export const Types: AuthAction = {
  type: {},
  payload: {},
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: '@auth/SIGN_IN_FAILURE',
};

export const Creators = {
  signInRequest: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): any => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password },
  }),
  signInSuccess: ({ user, token }: { user: User; token: string }) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { user, token },
  }),
  signInFailure: () => ({ type: Types.SIGN_IN_FAILURE }),
};
