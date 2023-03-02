// strongly typed language

// int a = 5;
// string b = 'alin halim khalim';
// bool c = true;
// object student = { name: 'noya', id: 33};
// int[] numbers = [12, 44, 556];
// string[] friends = ['abum', 'bsbul'];

//  javascript is a dynamic type language
// premitive
const a = 5;
const b = 'Samsu kopay na ekhon ar';
const d = true;


//  non-premitive (multiple value)(object, array)
const ages = [23,44,55];
const student = {id: 23, class: 7};
// console.log(typeof a, typeof b, typeof d, typeof ages,typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q.job = 'front end developer';
console.log(p, q);