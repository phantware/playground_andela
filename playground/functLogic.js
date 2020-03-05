// function test(queryObject = {}) {
//   if (
//     queryObject === null
//     || typeof queryObject === 'function'
//     || Array.isArray(queryObject)
//     || typeof queryObject === 'string'
//     || typeof queryObject === 'number'
//   ) throw TypeError('object is required');
//   let query;
//   if (queryObject.email) {
//     query = {
//       text: 'SELECT * FROM employees email = $1',
//       values: [queryObject.email],
//     };
//   } else if (queryObject.id) {
//     query = {
//       text: 'SELECT * FROM employees id = $1',
//       values: [queryObject.id],
//     };
//   } else {
//     query = {
//       text: 'SELECT * FROM employees',
//     };
//   }

//   console.log(query);
// }
// // test();
// const one = { a: 1, b: 2 };
// const two = { b: 3, d: 4 };
// console.log({ ...one, ...two });
// console.log(Object.assign(one, two));
// console.log(one);
