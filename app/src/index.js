import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

require('../styles/application.scss');

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('react-root'));
