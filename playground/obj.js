// const obj1 = { a: 1, b: 2, c: 3 };

// // ... spread operator
// const obj2 = { ...obj1, b: 4 };
// // obj2.a = obj1.a;
// // obj2.b = obj1.b;
// // obj2.c = obj1.c;
// console.log(obj1, '========', obj2);
// function ajs(j, ...juuu) {
//   console.log(juuu);
// }

// ajs(7, 8, 4, 5, 6, 7);
// // ... rest oprator
// const [a, ...u] = [2, 3, 5, 6, 78, 2];
// console.log(u);

// const sum = (a, b, c) => a + b + c;
// const arrOfSum = [2, 5, 8, 9, 8];

// // ... spread operator
// console.log(sum(...arrOfSum));

const prepareGreenTea = () => 'Green Tea';
const prepareBlackTea = () => 'Black Tea';
const getTea = (numOfCups) => {
  const teaCups = [];
  const teaCups2 = [];
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareGreenTea();
    const teaCups1 = prepareBlackTea();
    teaCups.push(teaCup);
    teaCups2.push(teaCups1);
  }
  return { teaCups, teaCups2 };
};

const tea4Teams = getTea(40);
console.log(tea4Teams);
