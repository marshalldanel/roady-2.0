import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

require('../styles/application.scss');

const rootEl = document.getElementById('react-root');

const render = () => {
  // eslint-disable-next-line global-require
  const App = require('./components/App').default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  );
};

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

if (module.hot) {
  console.log('client hot');
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./components/App').default;
    render(nextApp);
  });
}

render();
