console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.length);
console.log(Number.parseInt(5));
console.log(Number.parseInt('5'));
console.log(Number.parseInt('7.25'));
console.log('-------------------------------');
console.log(Number.parseFloat(5));
console.log(Number.parseFloat('5'));
console.log(Number.parseFloat('7.25'))
console.log('-------------------------------');
console.log(parseInt(5));
console.log(parseInt('5'));
console.log(parseInt('7.25'));
console.log('-------------------------------');
console.log(parseFloat(5));
console.log(parseFloat('5'));
console.log(parseFloat('7.25'))
console.log('-------------------------------');
console.log(Number.isFinite(7.5));
console.log(isFinite(7.5));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log('-------------------------------');
console.log(Number.isNaN(7));
console.log(isNaN(7.5));
console.log(isNaN(NaN));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log('-------------------------------');
console.log(Number.parseInt(7));
console.log(parseInt(7.5));
console.log(parseInt('5'));
console.log(parseInt(Infinity));
console.log(parseInt('labas'));

const a = 3.1415;
const b = a.toFixed(2);

console.log(a, typeof a);
console.log(b, typeof b);

const c = parseInt(b) + parseInt(b);
console.log(c);

const d = parseFloat(b) + parseFloat(b);
console.log(d);

console.log(isNaN(3));
console.log(isNaN(NaN));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(14562));