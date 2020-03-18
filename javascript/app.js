///Crear arreglos de objetos en JavaScript

const autos = [
    { modelo: 'Mustang', motor: 2.4 },
    { modelo: 'Camaro', motor: 3.2 },
    { modelo: 'Dodge-300', motor: 2.9 },
    { modelo: 'Sentra', motor: 21.8 }
];

console.log(autos);
console.log(autos[1].modelo);

console.log('Recorrer el arreglo de objetos......');
for (let index = 0; index < autos.length; index++) {
    console.log(autos[index]);

}

console.log('Entregando solo un atributo de los objetos que se encuentran en un arreglo');
for (let index = 0; index < autos.length; index++) {
    console.log(autos[index].modelo);
}