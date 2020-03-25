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
const function2 = new Function('a', 'b', 'return a + b')

console.log(typeof function1);
console.log(typeof function2);
console.log(function1(1, 2));
console.log(function2(2, 3));