/* @flow */

// Enables proper source map support in Node.js
import 'source-map-support/register';

import { server } from 'universal-webpack';
import settings from '../../webpack/universal-webpack-settings';
import configuration from '../../webpack/webpack.config.babel';

server(configuration, settings);
