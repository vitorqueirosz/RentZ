import { UpdateUserAction, UpdateUserState } from './types';

const INITIAL_STATE: UpdateUserState = {
  error: false,
  loadingUpdateUserRequest: false,
  avatar: null,
  user: null,
};

export default function reducer(
  state = INITIAL_STATE,
  action: UpdateUserAction,
): UpdateUserState {
  switch (action.type) {
    case '@user/UPDATE_USER_REQUEST':
      return {
        ...state,
        loadingUpdateUserRequest: true,
        avatar: action.payload.avatar,
      };

    case '@user/UPDATE_USER_SUCCESS':
      return {
        ...state,
        loadingUpdateUserRequest: false,
        user: action.payload.user,
      };

    case '@user/UPDATE_USER_FAILURE':
      return {
        ...state,
        loadingUpdateUserRequest: false,
        error: true,
      };

    default:
      return state;
  }
}
