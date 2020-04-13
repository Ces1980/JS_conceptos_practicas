
/*La sintaxis de asignación de desestructuración (destructuring assignment)
 es una expresión que posibilita la extracción de datos,
  tanto de arreglos como de propiedades de objetos, en variables distintas. 
 */
const cliente = {
    tipo: 'Premium',
    nombre: 'Vanessa',
    datos: {
        ubicacion:{
            ciudad: 'Ecatepec',
            pais: 'México'
        },
        cuenta:{
            desde: '10-12-1012',
            saldo: 5000
        }
    }
}

let {datos: {ubicacion}} = cliente;
let {datos: {cuenta}} = cliente;

console.log(cliente)
console.log(ubicacion)
console.log(ubicacion.ciudad)
console.log(ubicacion.pais)

console.log(cuenta)
console.log(cuenta.desde)
console.log(cuenta.saldo)