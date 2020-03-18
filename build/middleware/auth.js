"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var auth = function auth(req, res, next) {
  var token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send('No authorization header was specified');
  }

  var decoded;

  try {
    decoded = _jsonwebtoken["default"].verify(token, 'AndelaPrivateKey');
  } catch (ex) {
    return res.status(400).send('Token provided cannot be authenticated.');
  }

  req.body.decoded = decoded;
  return next();
};

var _default = auth;
exports["default"] = _default;