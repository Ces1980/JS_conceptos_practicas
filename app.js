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

//Comprobando que existe un valor en un SET
console.log(carrito.has('Guitarra'));
//Eliminar un valor del SET
carrito.delete('Camisa');

/* Vaciar completamente el SET */
carrito.clear();

console.log(carrito)
console.log(carrito.size)