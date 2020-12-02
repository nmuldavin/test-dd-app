const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./common.webpack.config.js');
const paths = require('./paths');

module.exports = merge(commonConfig, {
  entry: ['webpack-hot-middleware/client', paths.client('index.tsx')],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      PORT: 3000,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]--[local]--[hash:base64:5]',
              },
              importLoaders: 1,
              localsConvention: 'camelCase',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
});
