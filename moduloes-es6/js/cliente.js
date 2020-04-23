export const nombreCliente = 'César';
export let ahorro = 200;

export let dinero = 2300;

export function mostrarInformacion(nombreCliente, ahorro) {
    return `Cliente: ${nombreCliente}  Ahorro: ${ahorro}`;
}

export function saludoCobro(nombreCliente, dinero) {
    return `Saludo: ${nombreCliente} Debe: ${dinero}`;
}