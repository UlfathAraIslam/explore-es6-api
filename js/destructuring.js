// object destructuring
const fish = {
    name:'king hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '0887346374',
    price: 4000

}

// const phone = fish.phone;
// const price = fish.price;
// const color = fish.color;

// console.log(phone);
// console.log(price);

const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'};
console.log(age);

const{address} = fish;
console.log(address);

// array destructuring
const [first, another] = [23,34,565,5];
console.log(first,another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king,lost , notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Alim', 'Halim'];
}
const [baba, chacha]= getNames();
console.log(chacha, baba);


// rough

// const y = x => x*x;
// const z = y(5);
// console.log(z);

const division = (num1, num2) => console.log(num1/ num2)
division(4,2);