const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');

const Dir = {
  root: rootDir,
  src: path.resolve(rootDir, 'src'),
  views: path.resolve(rootDir, 'src', 'views'),
  build: path.resolve(rootDir, 'build'),
  server: path.resolve(rootDir, 'src', 'server'),
  client: path.resolve(rootDir, 'src', 'client'),
};

export default Dir;
