// for of loop ----------------array

const numbers = [12, 44, 66,44];
// for(const number of numbers){
//     console.log(number);
// }

// for of can not used with objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
/* 
3 ways to read object properties
    bottle.color
    bottle['color']
    bottle[key]
*/
for(const key of keys){
    // console.log(key, bottle[key]);
}


// for in loop ---------------------- object
// we will use for in loop
// for in loop
for( const key in bottle){
    const value = bottle[key];
    // console.log(key, bottle[key]);
    // console.log(key,value);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key,value);
}