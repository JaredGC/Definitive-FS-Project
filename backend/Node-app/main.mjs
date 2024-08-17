/* eslint-disable global-require */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// eslint-disable-next-line import/extensions
import webpackConfig from './webpack.config.js';
import api from './routes/api.mjs';
import Server from './configs/server.mjs';
import NotFoundExeption from './handlers/NotFoundExeption.mjs';

export default class Main {
  constructor() {
    this.server = Server;
    this.configuracion();
    this.server.start();
    this.routes();
  }

  routes() {
    this.server.app.use('/', api);
    this.server.app.all('*', () => {
      throw new NotFoundExeption();
    });
  }

  configuracion() {
    if (process.env.APP_ENV === 'development') {
      // eslint-disable-next-line import/extensions
      const compiler = webpack(webpackConfig);
      this.server.app.use(webpackDevMiddleware(compiler));
      this.server.app.use(webpackHotMiddleware(compiler));
    }
  }
}
