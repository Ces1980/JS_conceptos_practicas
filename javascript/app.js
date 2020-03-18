//Expresión de funciones

const suma = function(a, b) {
    return a + b;
}
console.log(suma(5, 4));


const suma2 = function(a = 5, b = 10) {
    return a + b;
}
console.log(suma2(5));


const saludar = function(nombre = 'visitante') {
    return `Hola ${nombre}`
}

console.log(saludar('César'));

const saludar2 = function(nombre = 'visitante', edad = 39, trabajo = 'Desarrollador web') {
    return `Hola ${nombre} tienes ${edad} años y trabajas de ${trabajo}`;
}

console.log(saludar2('César'));