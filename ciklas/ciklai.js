for (let i = 0; i < 5; i++) {
    console.log(i);
}

const studentNames = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < studentNames.length; i++) {
    const studentName = studentNames[i];
    console.log(studentName);
}

console.log('-----------');

function arTestiCikla(iteracijosNr, sarasoIlgis) {
    return iteracijosNr < sarasoIlgis;
}

let j = 0;
for (; arTestiCikla(j, studentNames.length);) {
    const studentName = studentNames[j];
    console.log(j, studentName);
    j++;
}

console.log('END...');


function kaDarytiIfui(pirmas, antras) {
    return (pirmas * 2) >= (antras + 5);
}

const a = 7;
const b = 5;

if (kaDarytiIfui(a, b)) {
    console.log('--- TAIP');
} else {
    console.log('--- NE');
}

console.clear();