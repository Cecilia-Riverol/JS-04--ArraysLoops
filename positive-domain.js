/*Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.*/

const compare= [-1, -3, -5, 4, 6767]; // Declaro mi array

function positiveDom(arr) {
    let positiveCount = 0; //Variable para contar los positivos

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        }
    }
    return positiveCount > (arr.length/2); 
    // Si mi suma de positivos es mayor que la mitad de mi largo de arreglo entonces es positivo
}

console.log(positiveDom(compare)); // should return false