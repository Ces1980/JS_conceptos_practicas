
// Esportar variables
export const nombreCliente = 'César';
export let ahorro = 200;


// Exportar funciones
export function mostrarInformacion(nombreCliente, ahorro) {
    return `Cliente: ${nombreCliente}  Ahorro: ${ahorro}`;
}

// Exportando clase
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}  Ahorro: ${this.ahorro}`;
    }
}

