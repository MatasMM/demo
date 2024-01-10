const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log(sum);

const totalSum = marks.reduce((sum, mark) => sum + mark);
console.log(totalSum);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

let allNames = '';

for (let i = 0; i < names.length; i++) {
    allNames += names[i][0];
}
console.log(allNames);

const reducedNames = names.reduce((total, name) => total + name[0]);
console.log(reducedNames);

console.log([1, 2, 3, 4].reduce((t, n) => t + n));
console.log([1, 2, 3, 4].reduce((t, n) => t - n));