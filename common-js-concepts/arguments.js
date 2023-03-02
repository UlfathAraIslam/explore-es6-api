// argument: array like object
function sum(a,b,c){
    // console.log(arguments[3]);
    // console.log(typeof arguments);
    // console.log(arguments);
    // arguments.push(4);

    // ----------> convert argument as an array
    const args = [...arguments];
    // console.log(args);

    const result = a + b + c;
    return result;
}
const total = sum(3,4,3,21,5,56);
// console.log(total);
// console.log(typeof sum);

// to get to know how many parameter in a function
console.log(sum.length);