const path = require('path');

const alias = {
  'react-dom': '@hot-loader/react-dom',
  Src: path.resolve(__dirname, '../src/*'),
  Redux: path.resolve(__dirname, '../src/redux/*'),
};

module.exports = alias;
