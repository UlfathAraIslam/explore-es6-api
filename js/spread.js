const max = Math.max(12, 34, 56,444);
// console.log(max);
const numbers = [12, 34, 56, 444];
const largest = Math.max(...numbers);
// console.log(largest);
// console.log(...numbers);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [444,23, ...numbers, 111,33];