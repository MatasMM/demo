/*
IF - palyginimas

LOGIKOS SABLONAI:
- if () {}
- if () {} else {}
- if () {} else if () {}
- if () {} else if () {} else {}
- if () {} else if () {} else if () {}
- if () {} else if () {} else if () {} else {}

PALYGINIMO OPERATORIAI:
- visi: >, <, >=, <=, ==, !=, ===, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini:==, !=
*/

if (3.14 >= Infinity) {
    console.log('TAIP');
} else {
    console.log('NE');
}


const prekesKrepselioVerte = 1000;
const noulaidosRida = 500;
const noulaidosDydisProcentai = 10;

console.log('skaiciai pries skaiciavimas: ...');

if (prekesKrepselioVerte > noulaidosRida) {
console.log('bandom pritaikyti nuolaida...');
}

console.log('tai koke ta galutine kaina?..');

console.clear ()

if (true) {
    console.log('Tik kai true');
}
console.log('-----------------------------');

const cartValue = 1000;
const discoundTreshhold = 500;
const discountPercentage = 10;

if (cartValue > discoundTreshhold){
    const coof = 1 - (discountPercentage / 100);
    console.log('Total to pay:', coof, cartValue * coof);
} else {
    console.log('Total to pay:', cartValue);
}

console.log('-----------------------------');

const colors = ['red', 'green', 'blue'];
const selectedColor = 'red';

if (selectedColor == colors[0]) {
    console.log('pasirinkta: raudona.');
} else if (selectedColor == colors[1]) {
    console.log('pasirinkta: zalia.');
} else if (selectedColor == colors[2]) {
    console.log('pasirinkta: melyna.');
} else {
    console.log('Tavo spalvos nera tarp galimu pasirinkimu:(');
}

console.log('-----------------------------');



const a = '10';
const b = 10;

if (a === b) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.clear ();

const day = 2;

if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('Antradienis');
} else if (day === 3) {
    console.log('Treciadienis');
} else if (day === 4) {
    console.log('Ketvirtadienis');
} else if (day === 5) {
    console.log('Penktadienis');
} else if (day === 6) {
    console.log('Sestadienis');
} else if (day === 7) {
    console.log('Sekmadienis');
} else {
    console.log('Tokios dienos nera musu laiko zonoje');
}