//   EMPLOYEES
export const createEmployee = 'INSERT INTO employees (username, firstname, lastname, email, password, gender, jobrOle, department, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *';
export const findEmail = 'SELECT * FROM employees WHERE email = $1';
export const findIfEmployeeExist = 'SELECT * FROM employees WHERE lower(email) = $1';

//   GIFS
export const createGif = 'INSERT INTO gifs (gifOwnerId, title, imageUrl, category) VALUES ($1, $2, $3, $4) RETURNING * ';
export const findAGif = 'SELECT * FROM gifs WHERE id = $1';
export const deleteOwnGif = 'SELECT * FROM gifs WHERE id =$1 RETURNING *';

// GIFS COMMENT
export const createGifsComment = `
WITH insertGifsComnt AS (
    INSERT INTO gifsComment(comment, gifsOnCommentId, gifsOwnerId) VALUES ($1, $2, $3) RETURNING *)
    SELECT comment, insertGifsComnt.createdOn, title, imageUrl, category FROM INSERT JOIN gifs ON inserted.gifsOnCommentId = gifs.id
`;
// GET SINGLE GIF COMMENT
export const getSingleComment = 'SELECT commentId, comment, gifsOwnerId FROM gifsComment WHERE gifsOnCommentId =  $1';

//   ARTICLES
export const createArticle = 'INSERT INTO articles (authorId, title, article, category) VALUES ($1,$2,$3, array[$4]) RETURNING *';

// FIND A SINGLE ARTICLE
export const findArticle = 'SELECT * FROM articles WHERE articleId = $1';

// UPDATE ARTICLE

export const updateArticle = 'UPDATE articles SET title = $1, article = $2, category = $3 WHERE articleId = $4 AND authorId = $5 RETURNING *';

//  DELETE ARTICLE

export const deleteOwnArticle = 'DELETE FROM articles WHERE articleId = $1 RETURNING *';

// CREATE COMMENT FOR ARTICLE

export const createCommentForArticle = ` WITH insertArticleComnt AS (
  INSERT INTO articlecomments (
    articleOnCommentedId,
    authorid, comment
  ) VALUES ($1,$2,$3)
  RETURNING *                        
)                                                                                                        
SELECT comment, insertArticleComnt.createdOn, title, article, category 
FROM insertArticleComnt JOIN articles ON insertArticleComnt.articleOnCommentedId = articles.articleid
  `;

// GET SINGLE ARTICLE COMMENT

export const getSingleArtcleComnt = 'SELECT commentid, comment, authorid FROM articlecomments WHERE articleOnCommentedId = $1';

// Get Single Article
export const getSingleArticle = 'SELECT createdon, title, article, category FROM articles WHERE articleid = $1';

// VIEW ALL ARTICLES OR GIFS

export const viewAllArticlesOrGifs = `
SELECT articleId, createdOn, title, article, authorId, 'article' FROM articles WHERE authorId = $1 UNION SELECT gifId, createdOn, title, imageUrl, gifOwnerId 'gif' FROM gifs WHERE gifId = $1 ORDER BY createdOn ASC;
`;

// GET ARTICLES BY CATEGORY

export const articlesByCategory = 'SELECT * FROM articles WHERE $1 = any(category)';

//  GET ALL ARTICLES

export const allArticles = 'SELECT * FROM articles';
