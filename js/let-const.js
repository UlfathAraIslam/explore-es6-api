// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign
// const variable can reuse but can not reassign 

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const message = bird + ' patas potas'
console.log(message);

const numbers = [12,34,22,23];
// reassign is not allowed
// numbers = [3,3,35,3,6];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'rongpur'
}
// student = {name:'Mofazzol'}
student.name = 'Mofazzol';
console.log(student);

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}
// must be inside the second bracket
// console.log(number);