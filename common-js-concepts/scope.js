// scope {}, not work outside of second bracket , var is different  because of hoisting

function add(a, b){
    const total = a + b;
    if(b>5){
        const sum = 34 + a + b;
    }
    else{
        const sum = 5 + a + b;
        var current = sum;
    }
    console.log(current);
    return total;
}
// console.log(sum);
// console.log(total);
add(6,4);