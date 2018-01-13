const path = require('path');
const express = require('express');

const app = express();

require('dotenv').config();

// Initializes webpack functions on the server, and compiles.
const webpack = require('webpack');
const devserver = require('webpack-dev-middleware');
const hotmodule = require('webpack-hot-middleware');
const webpackconfig = require('../webpack.config.js');

const compiler = webpack(webpackconfig);

// Sets port to 3000, and defaults to development mode unless specified in NODE_ENV
const PORT = 3000;
const ENV = process.env.NODE_ENV || 'development';

// Setup Morgan logger and set to skip all JSON files
const morgan = require('morgan');

function skipLog(req, res) {
  let url = req.url;
  if (url.indexOf('?') > 0) {
    url = url.substr(0, url.indexOf('?'));
  }
  if (url.match(/(json)$/ig)) {
    return true;
  }
  return false;
}

app.use(morgan('dev', {
  skip: skipLog,
}));

// Pulls static files from build folder if in production mode, otherwise will start webpack dev server and hotmodule
if (ENV === 'production') {
  app.use(express.static('build'));
} else {
  app.use(devserver(compiler, {
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
    },
    noInfo: true,
    stats: {
      colors: true,
    },
  }));
  app.use(hotmodule(compiler));
}

app.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT} in ${ENV} mode. Wait for compile...`));
