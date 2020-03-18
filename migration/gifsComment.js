import pool from '../src/config/db';

const gifsComment = `
DROP TABLE IF EXISTS gifsComment CASCADE;
CREATE TABLE IF NOT EXISTS gifsComment (
    commentId BIGSERIAL PRIMARY KEY,
    gifsOnCommentId INTEGER NOT NULL,
    gifOwnerId INTEGER NOT NULL,
    comment TEXT NOT NULL,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (gifsOnCommentId) REFERENCES gifs (id) ON DELETE CASCADE,
    FOREIGN KEY (gifOwnerId) REFERENCES employees (id) ON DELETE CASCADE
)`;

const createGifsCommentTable = async () => {
  await pool.query(gifsComment).then(() => {
    console.log('Gifs comment table created');
  });
};

export default createGifsCommentTable;
