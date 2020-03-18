"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

/* eslint-disable global-require */
var res;

if (process.env.NODE_ENV === 'production') {
  res = require('./prod');
} else if (process.env.NODE_ENV === 'test') {
  res = require('./test_env');
} else {
  res = require('./dev');
}

Object.entries(res).forEach(function (_ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  process.env[key] = value;
});