"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    (0, _classCallCheck2["default"])(this, Validator);
  }

  (0, _createClass2["default"])(Validator, null, [{
    key: "schemaLogin",
    value: function schemaLogin() {
      return _joi["default"].object({
        email: _joi["default"].string().trim().max(50).lowercase().email({
          minDomainSegments: 2,
          tlds: {
            allow: false
          }
        }).required(),
        password: _joi["default"].string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
      });
    }
  }, {
    key: "createEmployee",
    value: function () {
      var _createEmployee = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var schema, _schema$validate, error, value, errors;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                schema = Validator.schemaLogin().keys({
                  username: _joi["default"].string().min(3).max(30).alphanum().lowercase().trim().required(),
                  firstname: _joi["default"].string().min(2).max(30).trim().lowercase().required(),
                  lastname: _joi["default"].string().min(2).max(30).trim().lowercase().required(),
                  repeat_password: _joi["default"].string().valid(_joi["default"].ref('password')).required().strip(),
                  gender: _joi["default"].string().trim().lowercase().valid('female', 'male', 'undisclosed').required(),
                  jobrole: _joi["default"].string().trim().min(3).max(200).lowercase().required(),
                  department: _joi["default"].string().trim().min(3).max(200).lowercase().required(),
                  address: _joi["default"].string().trim().min(3).max(200).lowercase().required()
                });
                _schema$validate = schema.validate(req.body, {
                  abortEarly: false
                }), error = _schema$validate.error, value = _schema$validate.value;

                if (!error) {
                  _context.next = 5;
                  break;
                }

                errors = error.details.map(function (e) {
                  return {
                    message: e.message
                  };
                });
                return _context.abrupt("return", res.status(400).send({
                  errors: errors
                }));

              case 5:
                req.body = _objectSpread({}, value);
                return _context.abrupt("return", next());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createEmployee(_x, _x2, _x3) {
        return _createEmployee.apply(this, arguments);
      }

      return createEmployee;
    }()
  }, {
    key: "employeeSignIn",
    value: function () {
      var _employeeSignIn = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var _Validator$schemaLogi, error, value, errors;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _Validator$schemaLogi = Validator.schemaLogin().validate(req.body, {
                  abortEarly: false
                }), error = _Validator$schemaLogi.error, value = _Validator$schemaLogi.value;

                if (!error) {
                  _context2.next = 4;
                  break;
                }

                errors = error.details.map(function (e) {
                  return {
                    message: e.message
                  };
                });
                return _context2.abrupt("return", res.status(400).send({
                  errors: errors
                }));

              case 4:
                req.body = _objectSpread({}, value);
                return _context2.abrupt("return", next());

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function employeeSignIn(_x4, _x5, _x6) {
        return _employeeSignIn.apply(this, arguments);
      }

      return employeeSignIn;
    }()
  }]);
  return Validator;
}();

var _default = Validator;
exports["default"] = _default;