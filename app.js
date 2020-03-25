// String
const nombre1 = 'César';
const nombre2 = new String('Vero');


///Creando numeros como objetos
const numero1 = 20;
const numero2 = new Number(20);

//Creando booleans como objetos
const boleano1 = true;
const boleano2 = new Boolean(true);

//Creando funciones como objetos
const function1 = function(a, b) {
    return a + b;
}
const function2 = new Function('a', 'b', 'return a + b');


//Otra forma de crear objetos
const persona1 = {
    nombre: 'César',
}
const persona2 = new Object({ nombre: 'Verónica' });

//Crear arreglos

const arreglo1 = [1, 2, 3, 4];
const arreglo2 = new Array(1, 2, 3, 4);

console.log('Agreglo 1 :   ' + arreglo1);
console.log(arreglo2);

console.log(typeof persona1);
console.log(typeof persona2);
console.log(persona1);
console.log(persona2);
console.log(persona1.nombre);