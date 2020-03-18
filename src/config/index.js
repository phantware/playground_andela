/* eslint-disable global-require */
let res;
if (process.env.NODE_ENV === 'production') {
  res = require('./prod');
} else if (process.env.NODE_ENV === 'test') {
  res = require('./test_env');
} else {
  res = require('./dev');
}

Object.entries(res).forEach(([key, value]) => {
  process.env[key] = value;
});
