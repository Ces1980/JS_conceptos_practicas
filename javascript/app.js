//Arreglos

//Crear arreglos
const numeros = [10, 20, 30, 40, 50, 60];
console.log(numeros);

//Arreglo de Strings  (Método alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.log(meses);

/*Ejemplos de algunos métodos propios de los arreglos*/
//LArgo del arreglo
console.log(meses.length);

//Comprobar si es un arreglo
let nombre = 'César';
console.log('La variable nombre es un array?: ' + Array.isArray(nombre));
console.log('La variable meses es un array?:  ' + Array.isArray(meses));

//Agregar elementos a un arreglo -> Se agregan hasta el ultimo de la fila

meses.push('Mayo');
console.log(meses);


//Encontrar un elemento en un arreglo
console.log('Posición de mayo en el arreglo meses? ' + meses.indexOf('Mayo'));
// Salida: Posición de mayo en el arreglo meses? 4

//Agregar elementos  al inicio del arreglo
meses.unshift('Diciembre');

//Agregar elementos a un arreglo especificando posición
meses[6] = 'Junio';
meses[7] = 'Julio';
console.log('Ultimos elementos agregados al arreglo son: ' + meses[6] + ' y ' + meses[7]);

//Invertir la posción de los elementos de un arreglo
meses.reverse();
console.log("Arreglo invertodo: " + meses);

//Eliminar  elementos --> se elimina el ultimo de la fila
console.log(meses.pop());
console.log(meses);

//Eliminar el elemento del inicio del arreglo
meses.shift();
console.log(meses);

//Eliminar elementos por rango
meses.splice(2, 2);
console.log(meses);

//Unir arreglos

let arreglo1 = [1, 2, 3],
    arreglo2 = [4, 5, 6];

console.log('Contenido del arreglo 1: ' + arreglo1);
console.log('Contenido del arreglo 2: ' + arreglo2);
console.log('Uniendo los dos arreglos: ' + arreglo1.concat(arreglo2));

//Ordenar un arreglo con string

const frutas = ['Platano', 'Fresa', 'Manzana', 'Naranja'];
console.log('Contenido del arreglo frutas:  ' + frutas);
frutas.sort();
console.log('Arreglo ordenado alfabeticamente: ' + frutas);

//Ordenar arreglos con números

arreglo1 = [1, 3, 5, 6, 8, 9, 3, 5, 7, 10];
arreglo1.sort(function(x, y) {
    return x - y;
});
console.log('Arreglo ordenado ascendente: ' + arreglo1);

//Ordenar arreglo en sentido inverso
arreglo1.sort(function(x, y) {
    return y - x;
});
console.log('Arreglo ordenado descendente: ' + arreglo1);

/*El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.*/
// expected output: Array ["f", "o", "o"]
console.log(Array.from('foo'));

// expected output: Array [2, 4, 6]
console.log(Array.from([1, 2, 3], x => x + x));