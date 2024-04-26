
/*Secret Society
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.*/


//Declarar los arreglos con los nombres de los miembros
const memberListOne = ["Esperanza", "Franco", "Nia"];
const memberListTwo = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const memberListThree = ['Harry', 'Ron', 'Hermione'];

function secretName (array){
    let resultado = [];
    array.forEach((e) => resultado.push(e.charAt(0)));
    return resultado.sort().join("");
}

console.log(secretName(memberListOne));
console.log(secretName(memberListTwo));
console.log(secretName(memberListThree));



/*Código previo que sólo función para un array
let SocietyName = [];
for (let i = 0; i < memberName.length; i++){

    var array_palabras = memberName[i].split(" ");

    for(var j = 0; j < array_palabras.length; j++){
      secretName += array_palabras[j][0];
    }
}
console.log(SocietyName); */
