//ForEach en JavaScript


let comida = ['Carnitas', 'Barbacoa', 'Flautas', 'Quesadillas', 'Sopes'];

console.log('Recorrer arreglos con forEach');


comida.forEach(element => {
    console.log('--> Comida: ' + element);
});

const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Libreta' },
    { id: 3, producto: 'Librero' },
    { id: 4, producto: 'Librería' },
    { id: 5, producto: 'Libroteca' },
];

const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;
});

console.log(nombreProducto);


const automovil = {
    modelo: 'Camaro',
    motor: 1.6,
    anio: 1969,
    marca: 'Chevrolet'

}

for (const auto in automovil) {
    console.log(`${auto}: ${automovil[auto]}`);

}


console.log(automovil);