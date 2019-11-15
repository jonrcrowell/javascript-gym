class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const eric = new Student("Eric", 2, 3, 4);
const mary = new Student("Mary", 2, 3, 4);
const lisa = new Student("Lisa", 4, 3, 14);

const students = [eric, mary, lisa];

console.log(mostMoney(students));

function mostMoney(students) {
  const totals = [];
  const richest = students
    .map(x => {
      const total = x.fives * 5 + x.tens * 10 + x.twenties * 20;
      totals.push(total);
      return { ...x, total: total };
    })
    .reduce((prev, current) => (prev.total > current.total ? prev : current));

  return totals.filter(x => x === totals[0]).length === totals.length &&
    totals.length > 1
    ? "All"
    : richest.name;
}

var myArr = [{ x: 100, y: 200 }, { x: 200, y: 500 }];
const maximum = Math.max(
  ...myArr.map(obj => {
    return obj.x;
  })
);

const maxReduced = myArr
  .map(obj => {
    return obj.x;
  })
  .reduce((a, b) => (a.x > b.x ? a : b));

console.log(maximum);
console.log(maxReduced);
