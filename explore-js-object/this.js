// console.log(this);
const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return this.name + ' is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}