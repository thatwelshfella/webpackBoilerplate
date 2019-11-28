const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: './dist/favicon.ico',
});

module.exports = {
  entry: './src/Index.jsx',
  mode: 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
 module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')],
            },
          },
        ],
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
