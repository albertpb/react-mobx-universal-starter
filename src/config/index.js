var config = {
  axios: {},
};

if (process.env.NODE_ENV === 'test') {
  const path = require('path');
  const lib = path.join(
    path.dirname(require.resolve('axios')),
    'lib/adapters/http',
  );
  const http = require(lib);
  config.axios.adapter = http;
}

export { config };
