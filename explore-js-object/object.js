// 1. create object using object literals
const player = {};
// object property
player.name = 'Small Nirob';
player.specialty = ' batsman';

// object method
player.bat = function () {
    console.log('swing your bat');
}
console.log(player);
player.bat();
//  bat: [Function (anonymous)]

const student = {
    name: 'Pandey',
    job: 'khai andey',
    ball: function () {
        console.log('throw the ball');
    },
    salary: 100000
}
student.ball();

// 2. object constructor
const person = new Object();
console.log(person);

// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.friend);

// 4. class
class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1);

// 5. Function
function Car(model, price) {
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 32);
console.log(tesla);