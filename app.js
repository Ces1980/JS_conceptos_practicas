//MAPS

/* Inicializando un MAP */
let paciente = new Map(
    /* Pasando parametros por default a un map */
    /* Cada atributo requiere de sus propios corchetes */
    [['nombre', 'paciente'],
    ['habitacion', 'no definido'],
    ['alta', 'Recien ingresado']]
);

paciente.set('nombre', 'César');
/* MAP no accepta duplicados, toma el último valor */
paciente.set('habitacion', 404);
paciente.set('habitacion', 200);

/* Recorrer un MAP con forEach */
console.log('Recorrido del forEach')
paciente.forEach(datos => {
    console.log(datos)
});

/* Recorrdio con forEach y con index*/
console.log('Recorrdio con forEach y con index')
paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`)
});


console.log(paciente);