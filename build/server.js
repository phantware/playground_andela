"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

console.log(__dirname);
var port = process.env.PORT;

_app["default"].listen(port, console.log("App is listening at ".concat(port)));