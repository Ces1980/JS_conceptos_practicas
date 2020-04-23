// Esportar variables
export const nombreEmpresa = 'VAESCODE';
export let ahorro = 200000;
export const categoria = 'Aprendizaje'


// Exportar funciones
export function mostrarInformacion(nombreEmpresa, ahorro, categoria) {
    return `Cliente: ${nombreEmpresa}  Ahorro: ${ahorro}  Categoria: ${categoria}`;
}


export class Empresa {
    constructor(nombreEmpresa, ahorro, categoria) {
        this.nombreEmpresa = nombreEmpresa;
        this.ahorro = ahorro;
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Empresa: ${this.nombreEmpresa}  Ahorro: ${this.ahorro}  Categoria: ${this.categoria}`;
    }
}