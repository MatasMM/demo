const marks = [10, 2, 8, 4, 6];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[777]);
console.log(marks[marks.length - 1], marks[0]); // 4
console.log(marks[marks.length - 2], marks[1]); // 3
console.log(marks[marks.length - 3], marks[2]); // 2
console.log(marks[marks.length - 4], marks[3]); // 1
console.log(marks[marks.length - 5], marks[4]); // 0

console.log('------------------');

const a = [1, 1, 1];
const b = [2, 2, 2];
const c = [3, 3, 3];
const d = [a.concat(b).concat(c)];
const e = a.concat(b, c)

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log('------------------');

const rugsejis = [10, 2];
const spalis = [8, 4];
const lapkritis = [6];

const trimestras = rugsejis.concat(spalis, lapkritis);
console.log(trimestras);

console.log('------------------');

console.log(marks);
console.log(marks.includes(10));
console.log(marks.includes(7));

console.log(marks.indexOf(10));
console.log(marks.indexOf(2));
console.log(marks.indexOf(8));
console.log(marks.indexOf(4));
console.log(marks.indexOf(6));

console.log(marks.indexOf(7));
console.log(marks.indexOf(77));
console.log(marks.indexOf(777));

console.log('------------------');

console.log(marks.join());
console.log(marks.join(', '));
console.log(marks.join(' --==-- '));
console.log(marks.join(' + '));

console.log('------------------');

// const x = 102846;
const x = parseInt(marks.join(''));
console.log(x);

console.log('------------------');

console.log(marks);
marks.reverse();

console.log(marks);
marks.reverse();

console.log(marks);

const alus = 'alus';
const sula = alus.split('').reverse().join('');
console.log(sula);

function reverseString(text) {
    return text.split('').reverse().join('');
}

console.log(reverseString('alus'));
console.log(reverseString('sula'));
console.log(reverseString('sedekuzukedes'));
console.log(reverseString('sedek'));

console.log('------------------');

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice());
console.log(numbers.slice(2));
console.log(numbers.slice(1, 3));
console.log(numbers.slice(0, -1));
console.log(numbers.slice(0, -2));

console.log('------------------');

