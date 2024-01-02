/*
BOOLEAN - logine reiksme
- true (pozityvas)
- false (negatyvas)

Logines operacijos:
&& (and)
|| (or)
! (priesinga reiksme)
*/

const arRytas = true;
const arVakaras = false
console.log('Ar rytas:', arRytas);
console.log('Ar vakaras:', arVakaras);

const isNumber = true;
const isText = false;

const isRaining = true;
const isNotRaining= false;
const isMorning = true;
const isWarm = false;

//galima, jeigu: yra silta ir ne lyje
const shoulIGoRollerBlading1 = isWarm && isNotRaining;
const shoulIGoRollerBlading2 = isWarm && !isRaining;
console.log('Rieduciai', shoulIGoRollerBlading1);
console.log('Rieduciai', shoulIGoRollerBlading2);

console.log(true, !true);
console.log(false, !false);


const arGrazus = true;
const arAukstas = true;
const arTurtingas = true;

const arGrazus1 = false;
const arAukstas1 = false;
const arTurtingas1 = true;

//
const arEisiIPasimatyma = arAukstas && arGrazus && arTurtingas;
console.log('Pasimatymas:', arEisiIPasimatyma);

const arEisiIPasimatyma2 = arAukstas1 || arGrazus1 || arTurtingas1;
console.log('Pasimatymas:', arEisiIPasimatyma2);