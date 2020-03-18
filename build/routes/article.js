"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _article = _interopRequireDefault(require("../controllers/article"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

var _article2 = _interopRequireDefault(require("../middleware/article"));

var _db = _interopRequireDefault(require("../config/db"));

var fs = require('fs');

var router = _express["default"].Router(); // Create article


router.post('/', _article2["default"].createAticle, _auth["default"], _article["default"].createArticle); // Comment on Article

router.post('/comment', _article2["default"].createArticleComment, _auth["default"], _article["default"].createArticleComment); // Update article

router.patch('/', _article2["default"].updateAnArticle, _auth["default"], _article["default"].updateAnArticle); // View posted article

router.get('/', _article["default"].getArticleByCategory, _article["default"].viewPostedArticles); // Get Specific article

router.get('/:articleid', _article["default"].viewSpecificArticle); // Delete Article

router["delete"]('/:articleid', _article["default"].deleteArticle);
router.post('/img', function (req, res) {
  var image = req.body.image;
  console.log(image);
  res.status(200).send('correct guy');
}); // drop table images if exists;
// create table images(title text, )

var upload = (0, _multer["default"])({
  dest: '/home/jamiu/Desktop/playground_andela/src/images'
});
router.post('/profile', upload.single('avatar'), function (req, res) {
  //    req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  //   ({ upload } = req.file);
  console.log(req.file);
  console.log(req.body);
  var newFilename = "".concat(req.file.filename, "-").concat(req.file.originalname);
  fs.rename(req.file.path, "".concat(req.file.destination).concat(newFilename),
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(err) {
      var result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!err) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", res.send("ERROR: ".concat(err)));

            case 2:
              _context.next = 4;
              return _db["default"].query('insert into images(title,image) values($1,$2) returning *;', [req.file.title, newFilename]);

            case 4:
              result = _context.sent;
              return _context.abrupt("return", res.status(200).send({
                success: result.rows
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});
router.use('*', function (error, req, res) {
  console.log(error);
  res.send('server not available');
});
var _default = router;
exports["default"] = _default;