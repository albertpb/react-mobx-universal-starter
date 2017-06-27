import http from 'http';
import express from 'express';
import serveStatic from 'serve-static';
import ssrender from './middlewares/ssrender';
import Dir from '../config/dir';
import morgan from 'morgan';
import { logServerConfig, colorfulLog } from './middlewares/logger';

export default () => {
  const app = express();
  const server = http.createServer(app);

  app.use(morgan(colorfulLog));

  // use ejs template engine on express
  app.set('view engine', 'ejs');
  app.set('views', Dir.views);

  app.use('/build/', serveStatic(Dir.build));
  app.use('/build/server/', serveStatic(Dir.server));
  app.use(ssrender);

  server.listen(process.env.PORT, process.env.HOST, err =>
    logServerConfig(err),
  );
};
