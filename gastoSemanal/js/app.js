/**Variables */
let presupuestoUsuario;
do {
    presupuestoUsuario = prompt('¿Cual es tu presupuesto semanal?');
    if (isNaN(presupuestoUsuario) || presupuestoUsuario === '') {
        alert('Ingrese Numeros......')
    } else {
        alert('Datos correctos')
    }
} while (isNaN(presupuestoUsuario));
const formulario = document.getElementById('agregar-gasto');
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
        //Obtener selectores e insertar cantidad dinamicamente
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //Insertar al html
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }


    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-sucess');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        //Insertar en el DOM
        //Quitar la alerta al ingresar el gasto despues de 3 segundos
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        setTimeout(function() {
            document.querySelector('.primario .alert').remove();
            //Recetaemos el formulario
            formulario.reset();
        }, 3000);
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

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    //Leer del formulario de gastos
    const nombreGastos = document.querySelector('#gasto').value;
    const cantidadGastos = document.querySelector('#cantidad').value;

    //Instanciar la interfaz
    const ui = new Interfaz();
    if (nombreGastos === '' || cantidadGastos === '') {
        //Dos parametros mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    } else {
        console.log('El gasto se agrego');
    }
});