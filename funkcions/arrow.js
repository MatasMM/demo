const n1 = 7;
const n2 = 5;

// funktion declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

//
const minus = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// arrow function (rodykline funkcija)
const multiply = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

//arrow function
//jeigu, logikos bloke yra
//tik 1 salyga tai galima nerasyti { return }
const devide = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${devide(n1, n2)}`);

const square = a => a * a;
    // returne a ** 2;
console.log(`${n1} * ${n1} = ${square(n1)}`);

function cube(a) {
    // return a * a * a;
    return a ** 3;
}
console.log(`${n2} * ${n2} * ${n2} = ${cube(n2)}`);
