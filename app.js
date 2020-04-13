
/*La sintaxis de asignación de desestructuración (destructuring assignment)
 es una expresión que posibilita la extracción de datos,
  tanto de arreglos como de propiedades de objetos, en variables distintas. 
 */
const cliente = {
    nombre: 'César',
    tipo: 'premium'
    
}


({nombre, tipo} = cliente);


console.log(nombre)
console.log(tipo)