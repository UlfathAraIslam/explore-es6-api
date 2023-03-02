// 1. optional chaining
// student.marks?.math

// must
// 2. map, filter, find

// 3. (optional): forEach, reduce(advanced)

// 4. class

//  5. (optional) inheritance, super

// 6. (must) prototypical Inheritance

const obj = { foo: 1};
obj.bar = 2;
// console.log(obj);

function min(nums){
    return Math.min(nums)
}
// console.log(min([1,3,2] ))

const cube = x=> x*x*x;
// console.log(cube(2));

const [a , b] = [1,2,3,4,45,5]
// console.log(a+ b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);

const friends = ['Moushumi', 'Misha', 'mimi', 'mahiya'];

const product = {name: 'laptop', model:'yoga 3', price: 49000};
const {price} = product;
// console.log(price);