/*
Viskas JS'e turi savo tipa.
*/

function sum(a, b) {
    return a + b;
}

console.log(typeof 3.14);
console.log(typeof -999);
console.log(typeof 0);
console.log(typeof '');
console.log(typeof 'labas');
console.log(typeof true);
console.log(typeof false);
console.log(typeof sum);
console.log(typeof []);
console.log(typeof [1, 2]);
console.log(typeof [true, false]);
console.log(typeof sum, sum);
console.log(typeof ['a', 'b']);

console.log('--------------');

function sum(a, b) {
    if (typeof a !== 'number'){
        return 'Error: pirmas'
    }
    if (typeof b !== 'number'){
        return 'Error: antras'
    }
    return a+ b;
}

console.log(sum(7, 5), 12);
console.log(sum(7, true));
console.log(sum([], 5));
console.log(sum('labas', undefined));