/**
 * La sintaxis de asignación desestructurante (destructuring assignment) 
 * es una expresión que posibilita la extracción de datos, 
 * tanto de arreglos como de propiedades de objetos, 
 * en variables distintas.
 */
//Declaración del objeto
const cliente = {
    tipo: 'Premium', 
    saldo: 30000,
    datos: {
        nombre: 'César',
        apellido: 'Vargas',
        residencia: {
            ciudad: 'México'
        }
    },
    movimientos: ['12-03-2018', '25-05-2018', '05-08-2020']
}

//Variable que permite mandar llamar los datos
let {
    tipo,
    datos,
    movimientos,
    movimientos: [uno,dos,tres],
    datos: {residencia}
} = cliente;

console.log(tres)
console.log(cliente)
console.log(datos.apellido)
console.log(tipo)
console.log(residencia)
console.log(datos)