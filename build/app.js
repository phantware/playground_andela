"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _employee = _interopRequireDefault(require("./routes/employee"));

var _article = _interopRequireDefault(require("./routes/article"));

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use('/employees', _employee["default"]);
app.use('/articles', _article["default"]);
var _default = app;
exports["default"] = _default;