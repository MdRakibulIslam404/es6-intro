const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
const maxInArray = Math.max(...numbers);
// console.log(max);
// console.log(maxInArray);

const numbers2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);