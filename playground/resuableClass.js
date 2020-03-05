// // import pool from '../config/db';

// class Animal {
//   constructor(obj) {
//     /* eslint-disable no-restricted-syntax */
//     /* eslint-disable guard-for-in */
//     for (const prop in obj) {
//       this[prop] = obj[prop];
//       console.log(this)
//     }
//   }

//   save() {
//     return pool.query('', [this.name, this.leg]);
//   }

//   print() {
//     return `my name is ${this.name} and I av ${this.legs} legs`;
//   }
// }

// // const emp = new Employee({email:'wjnj', firstName: 'dhusus'})
// // emp.save().then(res=>{}).catch()
// const cat = new Animal({ name: 'cat', legs: 3 });
// const dog = new Animal({ name: 'dog', legs: 31 });
// console.log(cat.print(), '\n', dog.print());
