/* @flow */

import type { $Request, $Response } from 'express';
import type { $Tokens } from 'morgan';
import log from 'winston';
import chalk from 'chalk';

// set log as cli mode
log.cli();

function logServerConfig(err: string) {
  if (err) log.error(err);

  const url = ['http://', process.env.HOST, ':', process.env.PORT].join('');

  log.info(chalk.red('=========================================='));
  log.info(chalk.blue('Environment:'), process.env.NODE_ENV);
  log.info(chalk.blue('Listening at:'), url);
  log.info(chalk.blue('Directory:'), __dirname);
  log.info(chalk.red('=========================================='));
}

function colorfulLog(tokens: $Tokens, req: $Request, res: $Response) {
  var status = tokens.status(req, res);
  var statusColor =
    status >= 500
      ? 'red'
      : status >= 400 ? 'yellow' : status >= 300 ? 'cyan' : 'green';

  return (
    chalk.reset.white(
      padRight(tokens.method(req, res) + ' ' + tokens.url(req, res), 30),
    ) +
    ' ' +
    chalk[statusColor](status) +
    ' ' +
    chalk.reset.blue(padLeft(tokens['response-time'](req, res) + ' ms', 8)) +
    ' ' +
    chalk.reset('-') +
    ' ' +
    chalk.reset.yellow(tokens.res(req, res, 'content-length') || '-')
  );
}

function padLeft(str, len) {
  return len > str.length
    ? new Array(len - str.length + 1).join(' ') + str
    : str;
}
function padRight(str, len) {
  return len > str.length
    ? str + new Array(len - str.length + 1).join(' ')
    : str;
}

export { log, logServerConfig, colorfulLog };
