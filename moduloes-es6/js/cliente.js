export const nombreCliente = 'César';
export let ahorro = 200;

export const saludo = 'Hola';
export let dinero = '2300';

function mostrarInformacion(nombreCliente, ahorro) {
    return `Cliente: ${nombreCliente}  Ahorro: ${ahorro}`;
}

function saludoCobro(saludo, dinero) {
    return `Saludo: ${saludo} Debe:${dinero}`;
}