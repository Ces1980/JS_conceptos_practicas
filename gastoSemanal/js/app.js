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

// -->>>Clase de interfaz que maneja todo lo relacionado al html
class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //Insertar al html
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
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
        //Instanciar la clase de Interfaz
        const ui = new Interfaz();
        //Accedemos al presupuesto
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});