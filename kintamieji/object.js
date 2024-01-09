import spausdintiSvente from "./spauzdintiSvente.js";

/*
OBJECT - objiektas
*/

const name1 = 'Jonas';
const name2 = 'Maryte';
const name3 = 'Petras';
const name4 = 'Ona';

const marks1 = [];
const marks2 = [10];
const marks3 = [2, 4, 6];
const marks4 = [9, 9, 9, 9, 9, 9, 9, 9, 9];

const phone1 = '8612314542';
const phone2 = '8612315626';
const phone3 = '8612354859';

// [name, marks, phone]
const student1 = [name1, null, phone1];
const student2 = [name2, marks2, null];
const student3 = [name3, marks3, phone2];
const student4 = [name4, marks4, phone3];

const students = [student1, student2, student3, student4]

// Koks yra trecio studento telefono numeris
console.log(students[0]);
console.log(students[1]);

console.clear()

const s1 = {
    name: 'Jonas',
    marks: [],
    phone: '8612314542'
};

const s2 = {
    name: 'Maryte',
    marks: [10],
    phone: '8612315626'
};

const s3 = {
    name: 'Petras',
    marks: [2, 4, 6],
    phone: '86054584558'
};

console.log(s1);

console.log(s1['name']);
console.log(s1['marks']);
console.log(s1['phone']);

const pazymiaiArray = [10, 2, 8, 4, 6];
const pazymiaiObject = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
}

console.log(pazymiaiArray[2]);
console.log(pazymiaiObject[2]);

console.clear();

/*
Vasara:
- menesiu pavadinimai
- kiekvienas turi skirtiga dienu kieki
- svenciu sarasa
- kasdienes temperaturos
*/

const summer = {
    title: {
        lt: 'Vasara',
        en: 'Summer',
    },
    months: ['Birzelis', 'Liepa', 'Rugpjutis'],
    days: [30, 31, 31],
    holidays: [
        {
            name: 'Jonines',
            date: {
                year: 2024,
                month: 6,
                day: 23,
            },
        },
        {
            name: 'Mindaugo karunavimas',
            date: {
                year: 2024,
                month: 7,
                day: 6,
        }
    }
    ],
};

// standartine sintakse istraukti informacija
console.log(summer['title']);
console.log(summer['title']['lt']);
console.log(summer['title']['en']);
console.log(summer['months']);
console.log(summer['months'][0]);
console.log(summer['months'][1]);
console.log(summer['months'][2]);

console.log('-------------------------');
//supaprastinta objekto sintakse
console.log(summer.title);
console.log(summer.title.lt);
console.log(summer.title.en);
console.log(summer.months);
console.log(summer.months[0]);
console.log(summer.months[1]);
console.log(summer.months[2]);

console.clear();

console.log(summer.holidays[0].name);
console.log(summer.holidays[0].date);
console.log(summer.holidays[0].date.year);
console.log(summer.holidays[0].date.month);
console.log(summer.holidays[0].date.day);

console.clear()

// 1) Jonines - 2024m Birzelio 23d.
// 2) Mindaugo karunavimas - 2024m Liepos 6d.

for (let i = 0; i < summer.holidays.length; i++) {
    const text = spausdintiSvente(i, summer.holidays[i]);
    console.log(text);
}
