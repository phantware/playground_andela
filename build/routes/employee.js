"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _employees = _interopRequireDefault(require("../controllers/employees"));

var _employees2 = _interopRequireDefault(require("../middleware/employees"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

var router = _express["default"].Router();

router.get('/', _employees["default"].getEmployees); // Private Route

router.post('/', _employees2["default"].createEmployee, _auth["default"], _employees["default"].createEmployee);
router.post('/login', _employees2["default"].employeeSignIn, _employees["default"].employeeSignIn);
router["delete"]('/:employeeId', _employees["default"].deleteUser);
var _default = router;
exports["default"] = _default;