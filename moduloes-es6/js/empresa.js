import { Cliente } from './cliente.js';
// Exportar variables
export const nombreEmpresa = 'VAESCODE';
export let ahorro = 200000;
export const categoria = 'Aprendizaje'


// Exportar funciones
export function mostrarInformacion(nombreEmpresa, ahorro, categoria) {
    return `Cliente: ${nombreEmpresa}  Ahorro: ${ahorro}  Categoria: ${categoria}`;
}

// Utilizar la clase del modulo cliente
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Empresa: ${this.nombre}  Ahorro: ${this.ahorro}  Categoria: ${this.categoria}`;
    }
}