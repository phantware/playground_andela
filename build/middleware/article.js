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

var ArticleValidation =
/*#__PURE__*/
function () {
  function ArticleValidation() {
    (0, _classCallCheck2["default"])(this, ArticleValidation);
  }

  (0, _createClass2["default"])(ArticleValidation, null, [{
    key: "articleSchema",
    value: function articleSchema() {
      return _joi["default"].object({
        title: _joi["default"].string().min(3).max(100).trim().lowercase().required(),
        article: _joi["default"].string().min(3).trim().lowercase().required(),
        category: _joi["default"].string().min(3).trim().lowercase().required()
      });
    }
  }, {
    key: "createAticle",
    value: function () {
      var _createAticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var schema, _schema$validate, error, value, errors;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                schema = ArticleValidation.articleSchema();
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

      function createAticle(_x, _x2, _x3) {
        return _createAticle.apply(this, arguments);
      }

      return createAticle;
    }()
  }, {
    key: "createArticleComment",
    value: function () {
      var _createArticleComment = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var schema, _schema$validate2, error, value, errors;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                schema = _joi["default"].object({
                  articleid: _joi["default"].number().min(1).required(),
                  comment: _joi["default"].string().min(3).trim().lowercase().required()
                });
                _schema$validate2 = schema.validate(req.body, {
                  abortEarly: false
                }), error = _schema$validate2.error, value = _schema$validate2.value;

                if (!error) {
                  _context2.next = 5;
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

              case 5:
                req.body = _objectSpread({}, value);
                return _context2.abrupt("return", next());

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createArticleComment(_x4, _x5, _x6) {
        return _createArticleComment.apply(this, arguments);
      }

      return createArticleComment;
    }()
  }, {
    key: "updateAnArticle",
    value: function () {
      var _updateAnArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res, next) {
        var schema, _schema$validate3, error, value, errors;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                schema = ArticleValidation.articleSchema().keys({
                  articleid: _joi["default"].number().min(1).required()
                });
                _schema$validate3 = schema.validate(req.body, {
                  abortEarly: false
                }), error = _schema$validate3.error, value = _schema$validate3.value;

                if (!error) {
                  _context3.next = 5;
                  break;
                }

                errors = error.details.map(function (e) {
                  return {
                    message: e.message
                  };
                });
                return _context3.abrupt("return", res.status(400).send({
                  errors: errors
                }));

              case 5:
                req.body = _objectSpread({}, value);
                return _context3.abrupt("return", next());

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateAnArticle(_x7, _x8, _x9) {
        return _updateAnArticle.apply(this, arguments);
      }

      return updateAnArticle;
    }()
  }]);
  return ArticleValidation;
}();

var _default = ArticleValidation;
exports["default"] = _default;