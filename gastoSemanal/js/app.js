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
            //Se crea el div donde paparecera la alerta con un mensaje
            const divMensaje = document.createElement('div');
            //Se le agregan las clases al div con boostrap
            divMensaje.classList.add('text-center', 'alert');
            //Mensaje dependiendo el contenido con que se envien las cajas del div
            if (tipo === 'error') {
                divMensaje.classList.add('alert-danger');
            } else {
                divMensaje.classList.add('alert-success');
            }
            divMensaje.appendChild(document.createTextNode(mensaje));
            //Insertar en el DOM
            //Quitar la alerta al ingresar el gasto despues de 3 segundos
            document.querySelector('.primario').insertBefore(divMensaje, formulario);
            setTimeout(function() {
                //Quita la alerta
                document.querySelector('.primario .alert').remove();
                //Recetaemos el formulario
                formulario.reset();
            }, 3000);
        }
        // Inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad) {
            const gastosListado = document.querySelector('#gastos ul');

            //Crear un li
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between aling-items-center';
            //Insertar el gasto
            li.innerHTML = `
        ${nombre}
        <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
        `;
            //Insertar al HTML
            gastosListado.appendChild(li);
        }
        //Comprueba el presupuesto restante
    presupuestoRestante(cantidad) {
            const restante = document.querySelector('span#restante')
                //Lee o actualizar el documento restante
            const presupuestoRestanteUsuario =
                cantidadPresupuesto.presupuestoRestante(cantidad);
            restante.innerHTML = `${presupuestoRestanteUsuario}`;

            this.comprobarPresupuesto();
        }
        //CAmbiar de color el presupuesto restante
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        //Comprobar el 25%
        if ((presupuestoTotal / 4) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
            //Comprobar el 50%
        } else if ((presupuestoTotal / 2) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }

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
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    //Instanciar la interfaz
    const ui = new Interfaz();
    if (nombreGasto === '' || cantidadGasto === '') {
        //Dos parametros mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    } else {
        ui.imprimirMensaje('Correcto', 'correcto')
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
});