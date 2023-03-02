const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

// to get value of property
// dot notation
const marks = student.marks;
const math = student.marks.math;

// bracket notation
const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);

// undefined as subject is not present in marks,will ahve to use third bracket
// const marks2 = student.marks.subject;