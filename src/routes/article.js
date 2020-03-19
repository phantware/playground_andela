import express from 'express';
import multer from 'multer';
import path from 'path';
import articleController from '../controllers/article';
import authToken from '../middleware/auth';
import articleMiddleware from '../middleware/article';
import pool from '../config/db';

const fs = require('fs');

const location = path.join(__dirname, 'hhh/a/b');
console.log('location', location);
const upload = multer({ dest: 'src/images' });

const router = express.Router();
// Create article
router.post('/', articleMiddleware.createAticle, authToken, articleController.createArticle);
// Comment on Article
router.post(
  '/comment',
  articleMiddleware.createArticleComment,
  authToken,
  articleController.createArticleComment,
);
// Update article
router.patch('/', articleMiddleware.updateAnArticle, authToken, articleController.updateAnArticle);
// View posted article
router.get('/', articleController.getArticleByCategory, articleController.viewPostedArticles);

// Get Specific article
router.get('/:articleid', articleController.viewSpecificArticle);

// Delete Article
router.delete('/:articleid', articleController.deleteArticle);


router.post('/img', upload.single('avatar'), (req, res) => {
  // const { image } = req.body;
  console.log(req.file);
  console.log(req.body);
  res.status(200).send('correct guy');
});

router.post('/profile', upload.single('avatar'), (req, res) => {
//    req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  // ({ upload } = req.file);
  console.log('this is file', req.file);
  console.log('this is req.body', req.body);
  let result;
  const newFilename = `${req.file.filename}-${req.file.originalname}`;
  fs.rename(req.file.path, `${req.file.destination}${newFilename}`, async (err) => {
    if (err) return res.send(`ERROR: ${err}`);

    result = await pool.query('insert into images(title,images) values($1,$2) returning *;', [req.file, req.body]);

    // // req.file.title,
    // // newFilename;
  });
  console.log('this is result', result);
  return res.status(200).send({ success: result.rows });
});

router.use('*', (error, req, res) => {
  console.log(error);
  res.send('server not available');
});
export default router;
