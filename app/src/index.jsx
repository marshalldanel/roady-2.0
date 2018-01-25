import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

require('../styles/application.scss');

const rootEl = document.getElementById('react-root');

const render = () => {
  // eslint-disable-next-line global-require
  const App = require('./App').default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  );
};

if (module.hot) {
  console.log('client hot');
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./App').default;
    render(nextApp);
  });
}

render();
