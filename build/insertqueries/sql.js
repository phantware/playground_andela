"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allArticles = exports.articlesByCategory = exports.viewAllArticlesOrGifs = exports.getSingleArticle = exports.getSingleArtcleComnt = exports.createCommentForArticle = exports.deleteOwnArticle = exports.updateArticle = exports.findArticle = exports.createArticle = exports.getSingleComment = exports.createGifsComment = exports.deleteOwnGif = exports.findAGif = exports.createGif = exports.findIfEmployeeExist = exports.findEmail = exports.createEmployee = void 0;
//   EMPLOYEES
var createEmployee = 'INSERT INTO employees (username, firstname, lastname, email, password, gender, jobrOle, department, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *';
exports.createEmployee = createEmployee;
var findEmail = 'SELECT * FROM employees WHERE email = $1';
exports.findEmail = findEmail;
var findIfEmployeeExist = 'SELECT * FROM employees WHERE lower(email) = $1'; //   GIFS

exports.findIfEmployeeExist = findIfEmployeeExist;
var createGif = 'INSERT INTO gifs (gifOwnerId, title, imageUrl, category) VALUES ($1, $2, $3, $4) RETURNING * ';
exports.createGif = createGif;
var findAGif = 'SELECT * FROM gifs WHERE id = $1';
exports.findAGif = findAGif;
var deleteOwnGif = 'SELECT * FROM gifs WHERE id =$1 RETURNING *'; // GIFS COMMENT

exports.deleteOwnGif = deleteOwnGif;
var createGifsComment = "\nWITH insertGifsComnt AS (\n    INSERT INTO gifsComment(comment, gifsOnCommentId, gifsOwnerId) VALUES ($1, $2, $3) RETURNING *)\n    SELECT comment, insertGifsComnt.createdOn, title, imageUrl, category FROM INSERT JOIN gifs ON inserted.gifsOnCommentId = gifs.id\n"; // GET SINGLE GIF COMMENT

exports.createGifsComment = createGifsComment;
var getSingleComment = 'SELECT commentId, comment, gifsOwnerId FROM gifsComment WHERE gifsOnCommentId =  $1'; //   ARTICLES

exports.getSingleComment = getSingleComment;
var createArticle = 'INSERT INTO articles (authorId, title, article, category) VALUES ($1,$2,$3, array[$4]) RETURNING *'; // FIND A SINGLE ARTICLE

exports.createArticle = createArticle;
var findArticle = 'SELECT * FROM articles WHERE articleId = $1'; // UPDATE ARTICLE

exports.findArticle = findArticle;
var updateArticle = 'UPDATE articles SET title = $1, article = $2, category = $3 WHERE articleId = $4 AND authorId = $5 RETURNING *'; //  DELETE ARTICLE

exports.updateArticle = updateArticle;
var deleteOwnArticle = 'DELETE FROM articles WHERE articleId = $1 RETURNING *'; // CREATE COMMENT FOR ARTICLE

exports.deleteOwnArticle = deleteOwnArticle;
var createCommentForArticle = " WITH insertArticleComnt AS (\n  INSERT INTO articlecomments (\n    articleOnCommentedId,\n    authorid, comment\n  ) VALUES ($1,$2,$3)\n  RETURNING *                        \n)                                                                                                        \nSELECT comment, insertArticleComnt.createdOn, title, article, category \nFROM insertArticleComnt JOIN articles ON insertArticleComnt.articleOnCommentedId = articles.articleid\n  "; // GET SINGLE ARTICLE COMMENT

exports.createCommentForArticle = createCommentForArticle;
var getSingleArtcleComnt = 'SELECT commentid, comment, authorid FROM articlecomments WHERE articleOnCommentedId = $1'; // Get Single Article

exports.getSingleArtcleComnt = getSingleArtcleComnt;
var getSingleArticle = 'SELECT createdon, title, article, category FROM articles WHERE articleid = $1'; // VIEW ALL ARTICLES OR GIFS

exports.getSingleArticle = getSingleArticle;
var viewAllArticlesOrGifs = "\nSELECT articleId, createdOn, title, article, authorId, 'article' FROM articles WHERE authorId = $1 UNION SELECT gifId, createdOn, title, imageUrl, gifOwnerId 'gif' FROM gifs WHERE gifId = $1 ORDER BY createdOn ASC;\n"; // GET ARTICLES BY CATEGORY

exports.viewAllArticlesOrGifs = viewAllArticlesOrGifs;
var articlesByCategory = 'SELECT * FROM articles WHERE $1 = any(category)'; //  GET ALL ARTICLES

exports.articlesByCategory = articlesByCategory;
var allArticles = 'SELECT * FROM articles';
exports.allArticles = allArticles;