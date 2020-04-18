//MAPS

/* Inicializando un MAP */
let cliente = new Map();
/**Agredando valor a un map */
cliente.set('nombre', 'Vero');
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);
/**Accediendo a los valores de un MAP */
/* console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo')); */

/* Métodos para los maps */
console.log(cliente)
//Tamaño del map
console.log(cliente.size)
//Comporbando valor dentro del MAP
console.log(cliente.has('apellido'));
//devolver el valor de MAp
console.log(cliente.get('tipo'));
//Borrar una propiedad del MAP
console.log(cliente.delete('nombre'));

console.log(cliente)

//Agregando propiedad al map
cliente.set('nombre', 'Gloria');

console.log(cliente)

/* Limpiando el MAP */

cliente.clear();
console.log(cliente)