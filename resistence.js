/*
Sum of Resistors in Series
 
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/

//Preparar constantes
const res1= [-1,5,6,3];
const res2 = [14,3.5,6];
const res3 =  [8,15,100];

//Declarar función para aceptar un array por parámetro y sacar el valor absoluto con Math.abs

function sumResistance (arr) {
    const arr2 = [];
    let resultado = 0;
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach((e) => resultado = resultado + e);
    console.log (`${resultado} ohms`);
}

// Aplicar la función a los arreglos
sumResistance (res3);
sumResistance (res2);
sumResistance (res1);