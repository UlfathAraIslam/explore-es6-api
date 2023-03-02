// when a function used as a paramiter , it's call back function

function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'halim mama';
// const numbers = [2,3,4];
// const laptop = {price: 444, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good Morning', name)
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom');
greeting(greetingHandler, 'Tommy');
greeting(greetingHandler, 'Toma');
greeting(greetEvening, 'Tonny');
greeting(greetEvening, 'Ton');
greeting(greetEvening, 'Tonu');
greeting(greetNight, 'Tonu');
greeting(greetNight, 'Toma');

function submitHandler(){
    console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler);