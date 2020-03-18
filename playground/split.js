const list = 'huhh    ,jjjn , okoko     , jijij   '.trim().split(/[, ]+/);
console.log(list);
console.log(list.toString());
console.log(list.join());
// const names = ['tunde', 'kosoko', 'alabi'].join();
const array = `{${list}}`;
console.log(array, typeof array);
