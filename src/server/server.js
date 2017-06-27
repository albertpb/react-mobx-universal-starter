/* @flow */

import express from 'express';
import serveStatic from 'serve-static';
import ssrender from './middlewares/ssrender';
import Dir from '../config/dir';
import morgan from 'morgan';
import { logServerConfig, colorfulLog } from './middlewares/logger';

export default () => {
  const app = express();

  app.use(morgan(colorfulLog));

  // use ejs template engine on express
  app.set('view engine', 'ejs');
  app.set('views', Dir.views);

  app.use('/build/', serveStatic(Dir.build));
  app.use('/build/server/', serveStatic(Dir.server));
  app.use(ssrender);

  app.listen(process.env.PORT || 3000, process.env.HOST || '0.0.0.0', err =>
    logServerConfig(err),
  );
};
