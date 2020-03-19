"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _article = _interopRequireDefault(require("../controllers/article"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

var _article2 = _interopRequireDefault(require("../middleware/article"));

// import pool from '../config/db';
// const fs = require('fs');
var location = _path["default"].join(__dirname, 'hhh/a/b');

console.log('location', location);
var upload = (0, _multer["default"])({
  dest: 'images'
});

var router = _express["default"].Router(); // Create article


router.post('/', _article2["default"].createAticle, _auth["default"], _article["default"].createArticle); // Comment on Article

router.post('/comment', _article2["default"].createArticleComment, _auth["default"], _article["default"].createArticleComment); // Update article

router.patch('/', _article2["default"].updateAnArticle, _auth["default"], _article["default"].updateAnArticle); // View posted article

router.get('/', _article["default"].getArticleByCategory, _article["default"].viewPostedArticles); // Get Specific article

router.get('/:articleid', _article["default"].viewSpecificArticle); // Delete Article

router["delete"]('/:articleid', _article["default"].deleteArticle);
router.post('/img', upload.single('avatar'), function (req, res) {
  // const { image } = req.body;
  console.log(req.file);
  console.log(req.body);
  res.status(200).send('correct guy');
}); // router.post('/profile', upload.single('avatar'), (req, res) => {
//    req.file is the `avatar` file
// req.body will hold the text fields, if there were any
// ({ upload } = req.file);
// console.log('this is file', req.file);
// console.log('this is req.body', req.body);
// let result;
// const newFilename = `${req.file.filename}-${req.file.originalname}`;
//   fs.rename(req.file.path, `${req.file.destination}${newFilename}`, async (err) => {
//     if (err) return res.send(`ERROR: ${err}`);
//     result = await pool.query('insert into images(title,images)
// values($1,$2) returning *;', [req.file, req.body]);
//     // // req.file.title,
//     // // newFilename;
//   });
//   console.log('this is result', result);
//   return res.status(200).send({ success: result.rows });
// });
// router.use('*', (error, req, res) => {
//   console.log(error);
//   res.send('server not available');
// });

var _default = router;
exports["default"] = _default;