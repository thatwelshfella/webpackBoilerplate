const path = require('path');

const alias = {
  Src: path.resolve(__dirname, '../src/'),
  Redux: path.resolve(__dirname, '../src/redux/'),
  Tests: path.resolve(__dirname, '../tests'),
};

module.exports = alias;
