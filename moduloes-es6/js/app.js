import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js'






// Utilizar la clase importada
let cliente = new Cliente('Vero', 10000);
let cliente2 = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente2);

console.log(cliente.mostrarInformacion());
console.log(cliente2.mostrarInformacion());

const info = mostrarInformacion(nombreCliente, ahorro);
console.log(info);