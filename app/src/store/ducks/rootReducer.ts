import { combineReducers } from 'redux';

import auth from './auth/reducer';
import signUp from './signUp/reducer';
import signOut from './signOut/reducer';
import cars from './cars/reducer';
import schedule from './schedule/reducer';
import favorites from './favorites/reducer';
import appointments from './appointments/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  auth,
  signUp,
  cars,
  schedule,
  favorites,
  signOut,
  appointments,
  user,
});

export { rootReducer };
