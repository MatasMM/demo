const marks = [10, 2, 8, 4, 6];

const dubleMarks = marks.map(mark => mark * 2);

console.log(marks);
console.log(dubleMarks);

const indexList = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

const expo = indexList.map((item, index) => item ** index);
console.log(indexList);
console.log(expo);

const conso = indexList.map((item, index, arr) => console.log(item, index, arr));