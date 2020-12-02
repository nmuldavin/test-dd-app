const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const app = require('.');
const webpackConfig = require('../../config/development.webpack.config.js');

const port = process.env.PORT || 3000;
const compiler = webpack(webpackConfig);

app
  .use(
    devMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: webpackConfig.stats,
    }),
  )
  .use(hotMiddleware(compiler, { reload: true }))
  .listen(port, () => console.log(`Server listening at port ${port}`));
