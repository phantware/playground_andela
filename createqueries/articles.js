import pool from '../config/db';

const createArticles = `
DROP TABLE IF EXISTS articles CASCADE;
CREATE TABLE IF NOT EXISTS articles (
    articleId BIGSERIAL PRIMARY KEY,
    authorId INTEGER NOT NULL,
    title VARCHAR (130) NOT NULL,
    article TEXT NOT NULL,
    category VARCHAR (130) NOT NULL,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (authorId) REFERENCES employees(id) ON DELETE CASCADE
)`;
const createEmployeesArticles = async () => {
  await pool.query(createArticles).then(() => console.log('articles table created'));
};

export default createEmployeesArticles;
