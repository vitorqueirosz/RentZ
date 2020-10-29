import { SignUpRequest, SignUpState, SignUpSuccess } from './types';

export interface SignUpAction {
  type: any;
  payload: any;
  SIGN_UP_REQUEST: string;
  SIGN_UP_SUCCESS: string;
  SIGN_UP_FAILURE: string;
}

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
    case Types.SIGN_UP_REQUEST:
      return { ...state, loadingSignUpRequest: true };

    case Types.SIGN_UP_SUCCESS:
      return {
        ...state,
        loadingSignUpRequest: false,
        user: action.payload.user,
      };

    case Types.SIGN_UP_FAILURE:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}

export const Types: SignUpAction = {
  type: {},
  payload: {},
  SIGN_UP_REQUEST: '@signUp/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: '@signUp/SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: '@signUp/SIGN_UP_FAILURE',
};

export const Creators = {
  signUpRequest: ({ name, cpf, email, password }: SignUpRequest): any => {
    return {
      type: Types.SIGN_UP_REQUEST,
      payload: { name, cpf, email, password },
    };
  },
  signUpSuccess: (user: SignUpSuccess): any => {
    return {
      type: Types.SIGN_UP_SUCCESS,
      payload: { user },
    };
  },
  signUpFailure: (): any => {
    return {
      type: Types.SIGN_UP_FAILURE,
    };
  },
};
