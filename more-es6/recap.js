// 1. let,var, const
// break up with var
const numbers = [12, 33,55,65,33];
let selary = 450;
selary = 455;

//  2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// 3. template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`

// 4.arrow function
const doubleIt = x => x*2;
const calculateSalary2 = (salary,tax,bonus) => salary-salary * tax + bonus;

// 5. spread
const ages = [2,4,55,43];
const newAges = [...ages, 22,23,56];

// 6. destructuring
const{x, y, z,...c} = {x: 2, y: 5, z: 7, name: 'saahkin', salary: 33455};
const[a,b,...r] = [12,45, 66,86];


