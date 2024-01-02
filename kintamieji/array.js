/*
ARRAY - arejus, masyvas, sarasas, listas, matrica
*/

const luckyNumber1 = 1;
const luckyNumber2 = 2;
const luckyNumber3 = 3;

console.log(luckyNumber1);
console.log(luckyNumber2);
console.log(luckyNumber3);

const luckySum = luckyNumber1 + luckyNumber2 + luckyNumber3;
console.log(luckySum);

const luckyNumbers = [1,    2,  3];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Petras', ' ona'];
console.log(students);

const booleanList = [true, false, true, true, false, false];
console.log(booleanList);

const mix = [1, 'asd', true, []];
console.log(mix);

console.clear();

//index:        0, 1, 2, 3, 4, ...
const marks = [10, 2, 8, 4, 6];

//koks pazimiu vidurkis?
const mark1 = 10
const mark2 = 2
const mark3 = 8
const mark4 = 4
const mark5 = 6

const markSum = mark1 + mark2 + mark3 + mark4 + mark5;
const markCount = 5;

const average = markSum / markCount;
console.log('Average:', average);

let marksSum = 0;
marksSum = 10;
marksSum = 20;
marksSum = 30;
const marksLength = marks.length;

const marksAverage = marksSum / marksLength;
console.log('array average:', marksAverage);

let marksArraySum = 0;
let index = 0;
console.log(index, marksArraySum);

marksArraySum += marks[index];
index += 1;
console.log(index, marksArraySum);

marksArraySum += marks[index];
index += 1;
console.log(index, marksArraySum);

marksArraySum += marks[index];
index += 1;
console.log(index, marksArraySum);

marksArraySum += marks[index];
index += 1;
console.log(index, marksArraySum);

marksArraySum += marks[index++];

console.log(index, marksArraySum);
/*
marksArraySum += marks[0];
marksArraySum += marks[1];
marksArraySum += marks[2];
marksArraySum += marks[3];
marksArraySum += marks[4];
*/

console.log('Sum:', marksArraySum, 'index', index);

const marksArrayLength = marks.length;