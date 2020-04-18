//SYMBOL


let nombre = Symbol();
let apellido  = Symbol();

//Crear una persona
let persona = {}
//Se agrega propiedad nueva al objeto
persona.nombre='César';
//Agegrar a persona atributo symbol
persona[nombre] = 'César';
persona[apellido]= 'Vargas';
//Agregando más propiedades al objeto persona
persona.saldo=100;
persona.tipoCliente= 'Normal';

//Accediendo a las propiedades del objeto
console.log(persona.nombre)
//Accediendo al Symbol del objeto
console.log(persona[nombre])

//Los Symbols tienen propiedades privadas
//Con el siguiente for se muestran las propiedades del objeto pero no 
//las propiedades declaradas como SYMBOL
for (let i in persona) {
    console.log(`${i} : ${persona[i]}`);
}

console.log(persona)