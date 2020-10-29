import { combineReducers, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import auth from './ducks/auth';
import signUp from './ducks/signUp';
import cars from './ducks/cars';

import createStore from './createStore';

import rootSaga from './ducks/rootSaga';

const rootReducer = combineReducers({
  auth,
  signUp,
  cars,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
