/**Variables */
const presupuestoUsuario = prompt('¿Cual es tu presupuesto semanal?');
let cantidadPresupuesto;


/**Clases */
// -->>>Clase de presupuesto
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    //-->> Método que resta del presupuesto actual
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }

}


/**EventLiseners */
document.addEventListener('DOMContentLoaded', function() {
    //Evento que condiciona a que se relace el docuemnto si el prompt va vacio
    if (presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();
    } else {

        //Instancia de presupuesto aceptada
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
    }
});