import pool from '../config/db';

const gifTable = `
DROP TABLE IF EXISTS gifs CASCADE;
CREATE TABLE IF NOT EXISTS gifs (
    id BIGSERIAL PRIMARY KEY,
    gifOwnerId INTEGER NOT NULL,
    title VARCHAR (130) NOT NULL,
    imageUrl TEXT NOT NULL,
    category VARCHAR (130) NOT NULL,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (gifOwnerId) REFERENCES employees(id) ON DELETE CASCADE
)`;
const createGifTable = async () => {
  await pool.query(gifTable).then(() => {
    console.log('Gif table created');
  });
};

export default createGifTable;
