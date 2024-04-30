/*
Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/

function processArray(arr) {
    // Revisa el largo de mi arreglo
    let length = arr.length;
    // Mathfloor me da el numero absoluto de una división, si mi array tiene 7 elementos, me va a regresa 3.5 y con Math.floor lo subo a 3.
    let midpoint = Math.floor(length / 2);

    // Reviso si no es divisible en 2 partes iguales exactas.
    if (length % 2 !== 0) {
        // Le quito el elemento de enmedio.
        arr.splice(midpoint, 1);
    }

    let result = [];
    for (let i = 0; i < midpoint; i++) {
        // sumo el primer indice más el último índice de mi array y lo voy bajando.
        let sum = arr[i] + arr[arr.length - 1 - i];
        // Divido entre 2 y junto los resultados
        result.push(sum / 2);
    }

    return result;
}

console.log(processArray([1, 2, 3, 14, 5, 22, 6])); // debería regresar [3.5, 12, 4]
