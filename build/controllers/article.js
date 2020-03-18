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

var _db = _interopRequireDefault(require("../config/db"));

var _sql = require("../insertqueries/sql");

/* eslint-disable no-return-assign */
var Article =
/*#__PURE__*/
function () {
  function Article() {
    (0, _classCallCheck2["default"])(this, Article);
  }

  (0, _createClass2["default"])(Article, null, [{
    key: "createArticle",
    // Employee can create article
    value: function () {
      var _createArticle2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var id, build, values, _ref, rows, _rows$, articleid, authorid, title, article, category, createdon;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.body.decoded.id;
                build = "{".concat(req.body.category.trim().split(/[, ]+/), "}");
                values = [id, req.body.title, req.body.article, build];
                _context.prev = 3;
                _context.next = 6;
                return _db["default"].query(_sql.createArticle, values);

              case 6:
                _ref = _context.sent;
                rows = _ref.rows;
                _rows$ = rows[0], articleid = _rows$.articleid, authorid = _rows$.authorid, title = _rows$.title, article = _rows$.article, category = _rows$.category, createdon = _rows$.createdon;
                return _context.abrupt("return", res.status(201).send({
                  status: 'success',
                  data: {
                    message: 'Article successfully posted',
                    articleid: articleid,
                    authorid: authorid,
                    title: title,
                    article: article,
                    category: category,
                    createdon: createdon
                  }
                }));

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                if (!_context.t0.message.includes('violates foreign key constraint')) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", res.status(500).send({
                  status: 'failed',
                  error: 'You are not allowed to perform this operation, please re-login'
                }));

              case 16:
                return _context.abrupt("return", res.status(500).send({
                  status: _context.t0,
                  error: _context.t0.message
                }));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12]]);
      }));

      function createArticle(_x, _x2) {
        return _createArticle2.apply(this, arguments);
      }

      return createArticle;
    }() // Employee can comment on other colleague's article

  }, {
    key: "createArticleComment",
    value: function () {
      var _createArticleComment = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var authorid, _req$body, articleid, comment, values, _ref2, rows, rowCount, _rows$2, articlecomment, createdon, article, category, title;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                authorid = req.body.decoded.id;
                _req$body = req.body, articleid = _req$body.articleid, comment = _req$body.comment;
                values = [articleid, authorid, comment];
                _context2.prev = 3;
                _context2.next = 6;
                return _db["default"].query(_sql.createCommentForArticle, values);

              case 6:
                _ref2 = _context2.sent;
                rows = _ref2.rows;
                rowCount = _ref2.rowCount;

                if (!(rowCount === 0)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", res.status(400).send({
                  status: 'failed',
                  data: {
                    message: 'Cannot find article of the given id'
                  }
                }));

              case 11:
                _rows$2 = rows[0], articlecomment = _rows$2.comment, createdon = _rows$2.createdon, article = _rows$2.article, category = _rows$2.category, title = _rows$2.title;
                return _context2.abrupt("return", res.status(201).send({
                  status: 'success',
                  data: {
                    message: 'Comment successfully created',
                    createdon: createdon,
                    title: title,
                    article: article,
                    articlecomment: articlecomment,
                    category: category
                  }
                }));

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](3);
                return _context2.abrupt("return", res.status(500).send({
                  status: _context2.t0,
                  error: _context2.t0.message
                }));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 15]]);
      }));

      function createArticleComment(_x3, _x4) {
        return _createArticleComment.apply(this, arguments);
      }

      return createArticleComment;
    }() // Employees can update their article

  }, {
    key: "updateAnArticle",
    value: function () {
      var _updateAnArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var authorid, articleLookUp, _ref3, rowCount, rows, _req$body2, _req$body2$title, title, _req$body2$article, article, _req$body2$category, category, articleid, values, _ref4, updatedArticle;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                authorid = req.body.decoded.id;
                _context3.prev = 1;
                articleLookUp = 'SELECT * FROM articles WHERE  articleid = $1 ';
                _context3.next = 5;
                return _db["default"].query(articleLookUp, [req.body.articleid]);

              case 5:
                _ref3 = _context3.sent;
                rowCount = _ref3.rowCount;
                rows = _ref3.rows;

                if (rowCount) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", res.status(404).send({
                  status: 'failed',
                  message: "article with the given ID: ".concat(req.body.articleid, " was not found")
                }));

              case 10:
                _req$body2 = req.body, _req$body2$title = _req$body2.title, title = _req$body2$title === void 0 ? rows[0].title : _req$body2$title, _req$body2$article = _req$body2.article, article = _req$body2$article === void 0 ? rows[0].article : _req$body2$article, _req$body2$category = _req$body2.category, category = _req$body2$category === void 0 ? rows[0].category : _req$body2$category, articleid = _req$body2.articleid;
                values = [title, article, category, articleid, authorid];
                _context3.next = 14;
                return _db["default"].query(_sql.updateArticle, values);

              case 14:
                _ref4 = _context3.sent;
                updatedArticle = _ref4.rows;
                console.log('this is role', updatedArticle);
                return _context3.abrupt("return", res.status(200).send({
                  status: 'success',
                  data: {
                    message: 'Article successfully updated.',
                    updatedArticle: updatedArticle
                  }
                }));

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](1);

                if (!_context3.t0.message.includes('violates foreign key constraint')) {
                  _context3.next = 24;
                  break;
                }

                return _context3.abrupt("return", res.status(400).send({
                  status: 'failed',
                  error: 'You are not allowed to perform this operation, please re-login'
                }));

              case 24:
                return _context3.abrupt("return", res.status(400).send({
                  status: 400,
                  error: _context3.t0.message
                }));

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 20]]);
      }));

      function updateAnArticle(_x5, _x6) {
        return _updateAnArticle.apply(this, arguments);
      }

      return updateAnArticle;
    }() // Employee can Delete article
    // eslint-disable-next-line consistent-return

  }, {
    key: "deleteArticle",
    value: function () {
      var _deleteArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var articleid, _ref5, rowCount;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                articleid = req.params.articleid;
                _context4.prev = 1;
                _context4.next = 4;
                return _db["default"].query(_sql.deleteOwnArticle, [articleid]);

              case 4:
                _ref5 = _context4.sent;
                rowCount = _ref5.rowCount;

                if (!(rowCount !== 0)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", res.status(200).send({
                  status: 200,
                  message: 'Article successfully deleted.'
                }));

              case 8:
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](1);
                return _context4.abrupt("return", res.status(400).send({
                  status: 400,
                  error: _context4.t0.message
                }));

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 10]]);
      }));

      function deleteArticle(_x7, _x8) {
        return _deleteArticle.apply(this, arguments);
      }

      return deleteArticle;
    }() // Employee can view all articles that belong to a category.

  }, {
    key: "getArticleByCategory",
    value: function () {
      var _getArticleByCategory = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res, next) {
        var category, value, foundByCategory;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                req.query = Article.lowerCasePropertyNames(req.query);
                category = req.query.category;

                if (!category) {
                  _context5.next = 16;
                  break;
                }

                _context5.prev = 3;
                value = [category];
                _context5.next = 7;
                return _db["default"].query(_sql.articlesByCategory, value);

              case 7:
                foundByCategory = _context5.sent;

                if (!(foundByCategory.rowCount === 0)) {
                  _context5.next = 10;
                  break;
                }

                return _context5.abrupt("return", res.status(400).send({
                  status: 'Failed',
                  error: 'Cannot find category'
                }));

              case 10:
                return _context5.abrupt("return", res.status(200).send({
                  status: 'success',
                  data: foundByCategory.rows
                }));

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](3);
                return _context5.abrupt("return", res.status(500).send({
                  status: _context5.t0,
                  error: _context5.t0.message
                }));

              case 16:
                return _context5.abrupt("return", next());

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[3, 13]]);
      }));

      function getArticleByCategory(_x9, _x10, _x11) {
        return _getArticleByCategory.apply(this, arguments);
      }

      return getArticleByCategory;
    }()
  }, {
    key: "lowerCasePropertyNames",
    value: function lowerCasePropertyNames(obj) {
      var newObj = {};
      Object.entries(obj).forEach(function (_ref6) {
        var _ref7 = (0, _slicedToArray2["default"])(_ref6, 2),
            key = _ref7[0],
            value = _ref7[1];

        return newObj[key.toLowerCase()] = value;
      });
      return newObj;
    } // Employee can view all articles

  }, {
    key: "viewPostedArticles",
    value: function () {
      var _viewPostedArticles = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, res) {
        var _ref8, rows;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log('watin');
                _context6.prev = 1;
                _context6.next = 4;
                return _db["default"].query(_sql.allArticles);

              case 4:
                _ref8 = _context6.sent;
                rows = _ref8.rows;
                return _context6.abrupt("return", res.status(200).send({
                  status: 'Success',
                  data: rows
                }));

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](1);
                return _context6.abrupt("return", res.status(500).send({
                  error: _context6.t0.message
                }));

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 9]]);
      }));

      function viewPostedArticles(_x12, _x13) {
        return _viewPostedArticles.apply(this, arguments);
      }

      return viewPostedArticles;
    }() // EMployee can view a specific article

  }, {
    key: "viewSpecificArticle",
    value: function () {
      var _viewSpecificArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(req, res) {
        var articleid, value, _ref9, rows, rowCount, _rows$3, id, category, title, article, createdon, foundComment, comments;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                articleid = req.params.articleid;
                value = articleid;
                _context7.prev = 2;
                _context7.next = 5;
                return _db["default"].query(_sql.getSingleArticle, [value]);

              case 5:
                _ref9 = _context7.sent;
                rows = _ref9.rows;
                rowCount = _ref9.rowCount;

                if (!(rowCount === 0)) {
                  _context7.next = 10;
                  break;
                }

                return _context7.abrupt("return", res.status(400).send({
                  status: 400,
                  error: 'Cannot find specific article'
                }));

              case 10:
                _rows$3 = rows[0], id = _rows$3.id, category = _rows$3.category, title = _rows$3.title, article = _rows$3.article, createdon = _rows$3.createdon;
                _context7.next = 13;
                return _db["default"].query(_sql.getSingleArtcleComnt, [value]);

              case 13:
                foundComment = _context7.sent;
                comments = foundComment.rows.map(function (_ref10) {
                  var comment = _ref10.comment;
                  return comment;
                });
                return _context7.abrupt("return", res.status(200).send({
                  status: 'success',
                  data: {
                    id: id,
                    createdon: createdon,
                    title: title,
                    article: article,
                    category: category,
                    comments: comments
                  }
                }));

              case 18:
                _context7.prev = 18;
                _context7.t0 = _context7["catch"](2);
                return _context7.abrupt("return", res.status(500).send({
                  status: _context7.t0,
                  error: _context7.t0.message
                }));

              case 21:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[2, 18]]);
      }));

      function viewSpecificArticle(_x14, _x15) {
        return _viewSpecificArticle.apply(this, arguments);
      }

      return viewSpecificArticle;
    }()
  }]);
  return Article;
}();

var _default = Article;
exports["default"] = _default;