/* eslint-disable no-return-assign */
import pool from '../config/db';
import {
  createArticle,
  updateArticle,
  allArticles,
  createCommentForArticle,
  deleteOwnArticle,
  articlesByCategory,
  getSingleArticle,
  getSingleArtcleComnt,
} from '../insertqueries/sql';

class Article {
  // Employee can create article
  static async createArticle(req, res) {
    const { id } = req.body.decoded;
    const build = `{${req.body.category.trim().split(/[, ]+/)}}`;
    const values = [id, req.body.title, req.body.article, build];

    try {
      const { rows } = await pool.query(createArticle, values);
      const {
        articleid, authorid, title, article, category, createdon,
      } = rows[0];
      return res.status(201).send({
        status: 'success',
        data: {
          message: 'Article successfully posted',
          articleid,
          authorid,
          title,
          article,
          category,
          createdon,
        },
      });
    } catch (error) {
      if (error.message.includes('violates foreign key constraint')) {
        return res.status(500).send({
          status: 'failed',
          error: 'You are not allowed to perform this operation, please re-login',
        });
      }
      return res.status(500).send({
        status: error,
        error: error.message,
      });
    }
  }

  // Employee can comment on other colleague's article
  static async createArticleComment(req, res) {
    const { id: authorid } = req.body.decoded;
    const { articleid, comment } = req.body;
    const values = [articleid, authorid, comment];
    try {
      const { rows, rowCount } = await pool.query(createCommentForArticle, values);
      if (rowCount === 0) {
        return res.status(400).send({
          status: 'failed',
          data: {
            message: 'Cannot find article of the given id',
          },
        });
      }
      const {
        comment: articlecomment, createdon, article, category, title,
      } = rows[0];
      return res.status(201).send({
        status: 'success',
        data: {
          message: 'Comment successfully created',
          createdon,
          title,
          article,
          articlecomment,
          category,
        },
      });
    } catch (error) {
      return res.status(500).send({
        status: error,
        error: error.message,
      });
    }
  }

  // Employees can update their article
  static async updateAnArticle(req, res) {
    const { id: authorid } = req.body.decoded;

    try {
      const articleLookUp = 'SELECT * FROM articles WHERE  articleid = $1 ';

      const { rowCount, rows } = await pool.query(articleLookUp, [req.body.articleid]);
      if (!rowCount) {
        return res.status(404).send({
          status: 'failed',
          message: `article with the given ID: ${req.body.articleid} was not found`,
        });
      }

      const {
        title = rows[0].title,
        article = rows[0].article,
        category = rows[0].category,
        articleid,
      } = req.body;

      const values = [title, article, category, articleid, authorid];
      const { rows: updatedArticle } = await pool.query(updateArticle, values);
      console.log('this is role', updatedArticle);
      return res.status(200).send({
        status: 'success',
        data: {
          message: 'Article successfully updated.',
          updatedArticle,
        },
      });
    } catch (error) {
      if (error.message.includes('violates foreign key constraint')) {
        return res.status(400).send({
          status: 'failed',
          error: 'You are not allowed to perform this operation, please re-login',
        });
      }
      return res.status(400).send({
        status: 400,
        error: error.message,
      });
    }
  }

  // Employee can Delete article
  // eslint-disable-next-line consistent-return
  static async deleteArticle(req, res) {
    const { articleid } = req.params;
    try {
      const { rowCount } = await pool.query(deleteOwnArticle, [articleid]);
      if (rowCount !== 0) {
        return res.status(200).send({
          status: 200,
          message: 'Article successfully deleted.',
        });
      }
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error: error.message,
      });
    }
  }

  // Employee can view all articles that belong to a category.
  static async getArticleByCategory(req, res, next) {
    req.query = Article.lowerCasePropertyNames(req.query);
    const { category } = req.query;
    if (category) {
      try {
        const value = [category];
        const foundByCategory = await pool.query(articlesByCategory, value);
        if (foundByCategory.rowCount === 0) {
          return res.status(400).send({
            status: 'Failed',
            error: 'Cannot find category',
          });
        }
        return res.status(200).send({
          status: 'success',
          data: foundByCategory.rows,
        });
      } catch (error) {
        return res.status(500).send({
          status: error,
          error: error.message,
        });
      }
    }
    return next();
  }

  static lowerCasePropertyNames(obj) {
    const newObj = {};
    Object.entries(obj).forEach(([key, value]) => (newObj[key.toLowerCase()] = value));
    return newObj;
  }

  // Employee can view all articles
  static async viewPostedArticles(req, res) {
    console.log('watin');
    try {
      const { rows } = await pool.query(allArticles);
      return res.status(200).send({
        status: 'Success',
        data: rows,
      });
    } catch (error) {
      return res.status(500).send({
        error: error.message,
      });
    }
  }

  // EMployee can view a specific article
  static async viewSpecificArticle(req, res) {
    const { articleid } = req.params;
    const value = articleid;
    try {
      const { rows, rowCount } = await pool.query(getSingleArticle, [value]);
      if (rowCount === 0) {
        return res.status(400).send({
          status: 400,
          error: 'Cannot find specific article',
        });
      }
      const {
        id, category, title, article, createdon,
      } = rows[0];
      const foundComment = await pool.query(getSingleArtcleComnt, [value]);
      const comments = foundComment.rows.map(({ comment }) => comment);
      return res.status(200).send({
        status: 'success',
        data: {
          id,
          createdon,
          title,
          article,
          category,
          comments,
        },
      });
    } catch (error) {
      return res.status(500).send({
        status: error,
        error: error.message,
      });
    }
  }
}

export default Article;
