/*
Number divided into halves
Given a number, return the number divided into its halves in an array.
 Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 */

const n = 4;
const n2 = 10;

function division(number) {
    let resultado = [];
    const half = number/2;
    resultado.push(half); // Primera mitad
    resultado.push(half); // Segunda mitad
    return resultado;
}

console.log(division(n2))
console.log(division(n))