/* @flow */

// Enable ES6
// Prevents Babel from transpiling server-side bundle
// resulting in faster server-side hot-reload (startup) times.
require('babel-register')({
  ignore: [/\/(build|node_modules)\//],
});

// A babel/register style hook to ignore style imports
require('ignore-styles');

// Run start-server
require('./start-server.js');
