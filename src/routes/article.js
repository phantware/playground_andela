import express from 'express';
import multer from 'multer';
import articleController from '../controllers/article';
import authToken from '../middleware/auth';
import articleMiddleware from '../middleware/article';
import pool from '../config/db';

const fs = require('fs');

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

router.post('/img', (req, res) => {
  const { image } = req.body;
  console.log(image);
  res.status(200).send('correct guy');
});

// drop table images if exists;
// create table images(title text, )

const upload = multer({ dest: '/home/jamiu/Desktop/playground_andela/src/images' });
router.post('/profile', upload.single('avatar'), (req, res) => {
  //    req.file is the `avatar` file

  // req.body will hold the text fields, if there were any
  //   ({ upload } = req.file);
  console.log(req.file);
  console.log(req.body);

  const newFilename = `${req.file.filename}-${req.file.originalname}`;
  fs.rename(req.file.path, `${req.file.destination}${newFilename}`, async (err) => {
    if (err) return res.send(`ERROR: ${err}`);

    const result = await pool.query('insert into images(title,image) values($1,$2) returning *;', [
      req.file.title,
      newFilename,
    ]);

    return res.status(200).send({ success: result.rows });
  });
});

router.use('*', (error, req, res) => {
  console.log(error);
  res.send('server not available');
});
export default router;
