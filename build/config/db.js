"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./index");

var _require = require('pg'),
    Pool = _require.Pool;

var connectionString = process.env.CONNECTION_STRING;
var pool = new Pool({
  connectionString: connectionString
});
var _default = pool;
exports["default"] = _default;