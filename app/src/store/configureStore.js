import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import immutableCheckMiddleware from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = process.env.NODE_ENV !== 'production' ?
  [immutableCheckMiddleware(), thunk, createLogger()] :
  [thunk];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
/* eslint-enable */

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    console.log('---M', module.hot);
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
};

export default configureStore;
