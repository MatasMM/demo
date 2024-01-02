/*
for - vienas is galimu ciklo variaciju
*/

console.log('start');

for (let i=0; i<5; i++) {
    console.log('labas', i);
}

console.log('end');

for (let i = 10; i < 33; i++) {
    console.log('kiek desimciu:', i, (i-(i % 10)) / 10);
}

console.clear();

for (let i = 0; i < 10; i += 1) {
    console.log('step', i);
}

console.clear();

const hi = 'labukas';
console.log(hi.length);
console.log(hi[0]);
console.log(hi[1]);
console.log(hi[2]);
console.log(hi[3]);
console.log(hi[4]);
console.log(hi[5]);
console.log(hi[6]);

console.clear()

const marks = [10, 2, 8, 4, 6, 10, 3];
console.log(marks.length);

for (let i = 0; i < marks.length; i++) {
    console.log(i, '->', marks [i]);
}