import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js'
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as infoEmpresa, Empresa } from './empresa.js'

console.log(nombreCliente);
console.log(nombreEmpresa);

console.log(ahorro);
console.log(ahorroEmpresa);

console.log(categoria);

console.log(mostrarInformacion(nombreCliente, ahorro));
console.log(Empresa);
/* Información de la empresa usando la clase */
let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());

/* Informaciòn de la empresa usando alias en las importaciones */
const datosEmpresa = infoEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(datosEmpresa);

/* // Utilizar la clase importada
let cliente = new Cliente('Vero', 10000);
let cliente2 = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente2);

console.log(cliente.mostrarInformacion());
console.log(cliente2.mostrarInformacion());

const info = mostrarInformacion(nombreCliente, ahorro);
console.log(info); */