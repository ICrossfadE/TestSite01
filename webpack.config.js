'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
  },
  watch: true,

  // devtool: "source-map"
};
