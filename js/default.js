// function add(first,second){
//     second = second || 0;
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }

function add(first=0,second = 0){
    const total = first + second;
    return total;
}
const result = add(22);
console.log(result);

function fullName (first,last = 'Chowdhury'){
    const name = first + ' ' + last;
    return name;
}
const hisName = fullName('Aslam');
console.log(hisName);