"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Employee = _interopRequireDefault(require("../models/Employee"));

var Employees =
/*#__PURE__*/
function () {
  function Employees() {
    (0, _classCallCheck2["default"])(this, Employees);
  }

  (0, _createClass2["default"])(Employees, null, [{
    key: "getEmployees",
    value: function () {
      var _getEmployees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Employee["default"].findAll()["catch"](function (err) {
                  res.status(404).send({
                    message: 'failure',
                    users: err.message
                  });
                });

              case 2:
                result = _context.sent;

                if (result) {
                  res.status(200).send({
                    message: 'success',
                    users: result.rows
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getEmployees(_x, _x2) {
        return _getEmployees.apply(this, arguments);
      }

      return getEmployees;
    }()
  }, {
    key: "createEmployee",
    value: function () {
      var _createEmployee = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var emp, _ref, _ref$rows, _ref$rows$, id, username;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(req.body.decoded.jobrole !== 'admin')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", res.status(403).send('Only admin can create employee account'));

              case 2:
                _context2.prev = 2;
                emp = new _Employee["default"](req.body);
                _context2.next = 6;
                return emp.save();

              case 6:
                _ref = _context2.sent;
                _ref$rows = (0, _slicedToArray2["default"])(_ref.rows, 1);
                _ref$rows$ = _ref$rows[0];
                id = _ref$rows$.id;
                username = _ref$rows$.username;
                return _context2.abrupt("return", res.status(200).send({
                  status: 'Success',
                  data: {
                    id: id,
                    username: username,
                    message: 'Account successfully created'
                  }
                }));

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", res.status(404).send({
                  message: 'failed to create user',
                  error: _context2.t0.message
                }));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 14]]);
      }));

      function createEmployee(_x3, _x4) {
        return _createEmployee.apply(this, arguments);
      }

      return createEmployee;
    }()
  }, {
    key: "employeeSignIn",
    value: function () {
      var _employeeSignIn = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var _req$body, email, password, employeeRes, isValidPassword, _employeeRes$rows$, id, jobrole, payload, token;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context3.next = 3;
                return _Employee["default"].findAll({
                  email: email
                });

              case 3:
                employeeRes = _context3.sent;

                if (employeeRes.rowCount) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", res.status(400).send({
                  message: 'Invalid email or password'
                }));

              case 6:
                _context3.next = 8;
                return _bcryptjs["default"].compare(password, employeeRes.rows[0].password);

              case 8:
                isValidPassword = _context3.sent;

                if (isValidPassword) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return", res.status(400).send({
                  message: 'Invalid email or password'
                }));

              case 11:
                _employeeRes$rows$ = employeeRes.rows[0], id = _employeeRes$rows$.id, jobrole = _employeeRes$rows$.jobrole;
                payload = {
                  id: id,
                  jobrole: jobrole
                };
                token = _jsonwebtoken["default"].sign(payload, 'AndelaPrivateKey');
                return _context3.abrupt("return", res.status(200).header('x-auth-token', token).send({
                  message: 'Your login was successful password'
                }));

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function employeeSignIn(_x5, _x6) {
        return _employeeSignIn.apply(this, arguments);
      }

      return employeeSignIn;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, queryRes;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.employeeId;
                _context4.next = 3;
                return _Employee["default"].deleteById(id)["catch"](function () {
                  return res.status(400).send({
                    message: 'Please check your input'
                  });
                });

              case 3:
                queryRes = _context4.sent;
                console.log(queryRes);

                if (!(queryRes.rowCount === 0)) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", res.status(404).send({
                  message: 'NO user found'
                }));

              case 7:
                return _context4.abrupt("return", res.status(200).send({
                  message: 'User was successfully deleted'
                }));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteUser(_x7, _x8) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);
  return Employees;
}();

var _default = Employees;
exports["default"] = _default;