import { SignOutAction, SignOutState } from './types';

const INITIAL_STATE: SignOutState = {
  loadingSignOutRequest: false,
  error: false,
  token: null,
};

export default function reducer(state = INITIAL_STATE, action: SignOutAction) {
  switch (action.type) {
    case '@signOut/SIGN_OUT_REQUEST':
      return {
        ...state,
        loadingSignOutRequest: true,
        token: action.payload.token,
      };

    case '@signOut/SIGN_OUT_SUCCESS':
      return {
        ...state,
        loadingSignOutRequest: false,
      };

    case '@signOut/SIGN_OUT_FAILURE':
      return {
        ...state,
        loadingSignOutRequest: false,
        error: true,
      };

    default:
      return state;
  }
}
