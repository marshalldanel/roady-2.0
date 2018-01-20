import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import immutableCheckMiddleware from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = process.env.NODE_ENV !== 'production' ?
  [immutableCheckMiddleware(), thunk, createLogger()] :
  [thunk];

export default createStore(
  rootReducer,
  applyMiddleware(...middleware),
);
