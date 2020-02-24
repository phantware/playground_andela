import pool from '../config/db';

const createComment = `
DROP TABLE IF EXISTS articlecomment CASCADE;
CREATE TABLE IF NOT EXISTS articlecomments (
    commentId BIGSERIAL PRIMARY KEY,
    articleOnCommentId INTEGER NOT NULL,
    authorId INTEGER NOT NULL,
    comment TEXT NOT NULL,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (articleOnCommentedId) REFERENCES articles (articleId) ON DELETE CASCADE,
    FOREIGN KEY (authorId) REFERENCES employees (id) ON DELETE CASCADE
)`;
const createEmployeesComment = async () => {
  await pool.query(createComment).then(() => console.log('Comment table created'));
};

export default createEmployeesComment;
