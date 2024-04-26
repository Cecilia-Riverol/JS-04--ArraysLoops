/*Array of Multiples
 
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]` */


// Declara la función con tope del segundo index.

// Función para sumar 2 números
const SumNumber = (a , b) => {
    let tabla = []; // VAriable vacía para colocar el array
    let x = 1; // Iniciamos con multiplo de 1

    for (let i=1; i<=b; i++){ //Incrementar el índice
    tabla.push(a*x); //Relizar la multiplicación y anexar cada resultado
    x++;
};
return tabla;
};

// Invocar función
console.log(SumNumber(2,10));
console.log(SumNumber(17,6));
