import pool from '../config/db';

const allDommyDatas = `
INSERT INTO employees (username, firstName, lastName, email, password, gender, jobRole, department, address) 
VALUES ('marusoft' ,'kehinde', 'alimi', 'alimi@teamwork.com', 'jamiu12345', 'male', 'admin', 'HR', '3, Olourunosebi street, Oni, Lagos.'),
       ( 'moyo' ,'moyosore', 'omodada', 'moyosore@teamwork.com', 'fatai12345', 'female', 'employee', 'Engineering' ,'3,Talomoola Street, ajumobi, Lagos.');

INSERT INTO gifs(gifownerId, title, imageUrl, category) 
VALUES ( 2, 'cat developer', 'http://res.cloudinary.com/marusofteamwork/image/upload/v1573995345/b2j6f4ascsrvvm76ebje.gif', 'Software'),
       ( 1, 'cat developer', 'http://res.cloudinary.com/marusofteamwork/image/upload/v1573995345/b2j6f4ascsrvvm76ebje.gif', 'Engineering');
`;

const insertAllDommyDatas = async () => {
  await pool.query(allDommyDatas).then(() => {
    console.log('Inserted Successfully ');
  });
};

export default insertAllDommyDatas;
