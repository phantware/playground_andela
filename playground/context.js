// // eslint-disable-next-line max-classes-per-file
// this.x = 7;
// class Person {
//   constructor() {
//     this.x = 34;
//   }

//   printMe() {
//     return this.x;
//   }
// }

// class Animal {
//   constructor(y = 89) {
//     this.y = y;
//   }

//   getY() {
//     return this.y;
//   }
// }
// function Cat(name = 'default') {
//   this.name = name;
// }

// Cat.prototype.getName = function getName() {
//   return `my name is ${this.name}`;
// };
// const cat = new Cat('janeyy');
// const oo = Object.defineProperty(cat, 'age', {
//   writable: false,
// //   readable: true,
//   value: 'win',
// });

// // Cat.prototype.construct = Animal
// oo.name = 'zoo';
// oo.age = 76
// console.log(oo.age, cat.age);
// const animal = new Animal(2);
// animal.y = 23;

// const getProp = cat.getName.bind(Cat);

// // const xyz = 'my age is ';
// this.name = 'fattylee';
// // this[xyz] = 32;
// // this['my age'] = 32;
// // console.log(cat.getName(), getProp(), this);

// // OR
// // false: when all inputs are false
// /*
// false
// 0
// ''
// NaN
// undefined
// null
// */

// const o = {
//   a: {
//     b: [2, 3, 5, undefined],
//   },
// };

// const {
//   a: {
//     b: [, , , { c: email = 'default' } = {}],
//   },
// } = o;

// // console.log(email);
// // console.log(Boolean(undefined));
// // console.log(!!undefined);

// // console.log(NaN || '' || false || null || undefined || 0 || 7);
// // console.log(34 && 8 && -1 && 0 && 'dfssggf');
// // console.log(0 || (1 && undefined));
// // console.log(cat.getName());
// // console.log(new Person(), animal);
// // const obj = {
// //   x: 4,
// //   getMeX() {
// //     return this.x;
// //   },
// // };

// // const myFunc = obj.getMeX;
// // console.log(obj.getMeX(), 'myFunc', myFunc());
