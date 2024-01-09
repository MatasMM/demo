/* HOF - higher order function */
/* "tevine" fukcija, kuri gauna kita funkcija kaip argumenta */

function doubleTrouble(n) {
    if (n * 2 > 10) {
        return 10
    }

    return n * 2
}

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const doubleMarks = [];

for (let i=0; i< marks.length; i++){
        doubleMarks.push(doubleTrouble(marks[i]));
}

console.log(doubleMarks);

console.log('-------------------------------------');

const doubleMarksMap = marks.map(doubleTrouble);
console.log(doubleMarksMap);

const tripleMarks = marks.map(n => n * 3);
console.log(tripleMarks);

const forth = n => n * 4;
const forthMarks = marks.map(forth);
console.log(forthMarks);

console.clear();

const bool = [true, false, true, false, true, false, true, false];
const allTrue = bool.map(x => true);
console.log(allTrue);

const students = ['Jonas', 'Maryte', 'petras', 'Ona']
const inicialai = students.map(s => s[0]);
console.log(inicialai);

const matrix = [
    [1, 2],
    [3],
    [4, 5, 6],
    [7, 8, 9, 10, 11],
    [0],
];
// [2, 1, 3, 5, 1]
const matrixCount = matrix.map(m => m.length);
const matrixFirstFalue = matrix.map(m => m[0]);
console.log(matrixCount);

const mandarinai = [
    [true, false],
    [true],
    [true, true, true],
    [false, false, false, false, false],
    [true, true, true, false],
];
// [1, 1, 3, 0, 3]

function primokusiuMandarinukiekis(krepselis) {
    let geruKiekis = 0;

    for (let i=0; i<krepselis.length; i++){
        const mandarinas = krepselis[i];
        if (mandarinas === true) {
            geruKiekis++;
        }
    }

    return geruKiekis;
}

const prinokusiuKiekis = mandarinai.map(primokusiuMandarinukiekis)
console.log(prinokusiuKiekis);

console.clear();

function filterAllowedPeaple(weight) {
    const weightsLimit = 80;

    if (weight > weightsLimit) {
        return false;
    }

    return true;
}

const weights = [100, 10, 50, 70, 66, 99, 150, 20];

const allowedWeight = [];

for (let i = 0; i < weights.length; i++) {
    if (filterAllowedPeaple(weights[i])) {
        allowedWeight.push(weights[i])
    }
}

console.log(allowedWeight);