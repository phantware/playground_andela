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
// GET SINGLE COMMENT
export const getSingleComment = 'SELECT commentId, comment, gifsOwnerId FROM gifsComment WHERE gifsOnCommentId =  $1';

//   ARTICLES
export const createArticle = 'INSERT INTO articles (authorId, title, article, category) VALUES ($1,$2,$3,$4) RETURNING *';

// FIND A SINGLE ARTICLE
export const findArticle = 'SELECT * FROM articles WHERE articleId = $1';

// UPDATE ARTICLE

export const updateArticle = 'UPDATE articles SET title = $1, article = $2, category = $3 WHERE articleId = $4 AND authorId = $5 RETURNING *';

//  DELETE ARTICLE

export const deleteOwnArticle = 'DELETE * FROM aarticles WHERE articleId = $1 RETURNING *';

// CREATE COMMENT FOR ARTICLE

export const createCommentForArticle = `WITH insertArticleComnt AS (
  INSERT INTO articlecomments (
    comment, articleOnCommentId, authorId) VALUES ($1,$2,$3) 
  )
  RETURNING *
)
SELECT comment, insertArticleComnt.createdOn, title, article, category FROM JOIN articles ON insertArticleComnt.articleOnCommentId = articles.articleId 
  `;

// GET SINGLE ARTICLE COMMENT

export const getSingleArtcleComnt = 'SELECT * FROM commentId, comment, authorId FROM articlescomment WHERE articleOnCommentId = $1';

// VIEW ALL ARTICLES OR GIFS

export const viewAllArticlesOrGifs = `
SELECT articleId, createdOn, title, article, authorId, 'article' FROM articles WHERE authorId = $1 UNION SELECT gifId, createdOn, title, imageUrl, gifOwnerId 'gif' FROM gifs WHERE gifId = $1 ORDER BY createdOn ASC;
`;

// GET ARTICLES BY CATEGORY

export const articlesByCategory = 'SELECT * FROM articles WHERE category = $1';

//  GET ALL ARTICLES

export const allArticles = 'SELECT * FROM articles';
