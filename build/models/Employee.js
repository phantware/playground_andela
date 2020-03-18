"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _db = _interopRequireDefault(require("../config/db"));

var _sql = require("../insertqueries/sql");

var Employee =
/*#__PURE__*/
function () {
  function Employee(newEmployee) {
    (0, _classCallCheck2["default"])(this, Employee);
    Object.assign(this, newEmployee);
  }

  (0, _createClass2["default"])(Employee, [{
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var username, firstname, lastname, email, password, gender, jobrole, department, address, values;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = this.username, firstname = this.firstname, lastname = this.lastname, email = this.email, password = this.password, gender = this.gender, jobrole = this.jobrole, department = this.department, address = this.address;
                _context.t0 = username;
                _context.t1 = firstname;
                _context.t2 = lastname;
                _context.t3 = email;
                _context.next = 7;
                return _bcryptjs["default"].hash(password, 10);

              case 7:
                _context.t4 = _context.sent;
                _context.t5 = gender;
                _context.t6 = jobrole;
                _context.t7 = department;
                _context.t8 = address;
                values = [_context.t0, _context.t1, _context.t2, _context.t3, _context.t4, _context.t5, _context.t6, _context.t7, _context.t8];
                return _context.abrupt("return", _db["default"].query(_sql.createEmployee, values));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }], [{
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var queryObject,
            query,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryObject = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};

                if (!(queryObject === null || typeof queryObject === 'function' || Array.isArray(queryObject) || typeof queryObject === 'string' || typeof queryObject === 'number')) {
                  _context2.next = 3;
                  break;
                }

                throw TypeError('object is required');

              case 3:
                if (queryObject.email) {
                  query = {
                    text: 'SELECT * FROM employees WHERE lower(email) = $1',
                    values: [queryObject.email.toLowerCase()]
                  };
                } else if (queryObject.id) {
                  query = {
                    text: 'SELECT * FROM employees  WHERE id = $1',
                    values: [queryObject.id]
                  };
                } else {
                  query = {
                    text: 'SELECT * FROM employees'
                  };
                }

                return _context2.abrupt("return", _db["default"].query(query));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(employeeId) {
        var deleteQuery;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                deleteQuery = {
                  text: 'DELETE  FROM employees WHERE id = $1',
                  values: [employeeId]
                };
                return _context3.abrupt("return", _db["default"].query(deleteQuery));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteById(_x) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }]);
  return Employee;
}();

var _default = Employee;
exports["default"] = _default;