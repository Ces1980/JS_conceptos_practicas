
/*La sintaxis de asignación de desestructuración (destructuring assignment)
 es una expresión que posibilita la extracción de datos,
  tanto de arreglos como de propiedades de objetos, en variables distintas. 
 */
const cliente = {
    nombre:'Aurelio',

}

let {nombre, tipo='Básico', saldo= 0} = cliente;

console.log(nombre)
console.log(tipo)
console.log(saldo)