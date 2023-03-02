const myobj = {
    id: 1,
    rokib: "rokib",
    job: "web instructor",
    age: 22,
};
const jsonData = JSON.stringify(myobj);
// console.log(jsonData);
// {"id":1,"rokib":"rokib","job":"web instructor","age":22}

const objFormat = JSON.parse(jsonData);
console.log(objFormat.age);
// { id: 1, rokib: 'rokib', job: 'web instructor', age: 22 }