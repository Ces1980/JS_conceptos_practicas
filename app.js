//SET
/* Los objetos Set son colecciones de valores. 
Se puede iterar sus elementos en el orden de su inserción.
Un valor en un Set sólo puede estar una vez; éste es único en la colección Set. */


/* Inicializando un SET */
let carrito = new Set();
//Agregando elementos a la collección
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
//Un disco cuando observa un valor duplicado no lo añade a la colección
carrito.add('Disco #3');

//Comprobando que existe un valor en un SET console.log(carrito.has('Guitarra'));
//Recorrer set con foreach
console.log('Pinta todos los elementos de la coleccion SET')
carrito.forEach((producto, index) => {
    console.log(`${index}: ${producto}`)
});
/* En un SET la llave y el valor son iguales */

/* Convertir un SET a Arreglo */
const arregloCarrito = [...carrito];
console.log(arregloCarrito);
/**Al convertir un SET en un arreglo se le pueden aplicar todas las caracteristicas
 * se pueden utilizar en arreglo
 */