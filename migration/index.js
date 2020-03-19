import createEmployeesTable from './employees';
import createEmployeesComment from './articleComments';
import createEmployeesArticles from './articles';
import createGifTable from './gifs';
import createGifsCommentTable from './gifsComment';
import insertAllDommyDatas from '../seeders/seed';

const createQuerys = async () => {
  try {
    await createEmployeesTable();
    await createEmployeesArticles();
    await createEmployeesComment();
    await createGifTable();
    await createGifsCommentTable();
    await insertAllDommyDatas();
  } catch (error) {
    console.log(error);
  }
};

createQuerys();
