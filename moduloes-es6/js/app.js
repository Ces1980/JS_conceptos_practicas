/* Si se tienen pocas variables para importar se puede hacer de la siguiente forma */
// import { nombreCliente, ahorro } from './cliente.js'
/* Muchas variables para importar se puede hacer de la siguiente forma */
import * as cliente from './cliente.js'
// La importación se hace usando un alias y llega como un symbol
console.log(cliente);

/*
const info = mostrarInformacion(nombreCliente, ahorro);

console.log(info); */