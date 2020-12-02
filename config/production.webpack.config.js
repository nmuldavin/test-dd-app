const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./common.webpack.config.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundles/[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      PORT: 3000,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:5]',
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
