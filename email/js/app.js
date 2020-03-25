//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//MAndar llamar la función eventListeners()
eventListeners();

//event lisener
function eventListeners() {
    //Inicio de la aplicación y desabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

}

//Funciones
function inicioApp() {
    //Desabilitar el envio
    btnEnviar.disabled = true;
}

//-->Valida que el campo tenga algo escrito
function validarCampo() {
    //Se valida la longitud del texto y que no este vacio

    validarLongitud(this);

    //--> identificar el tipo de datos que recibe cada input en el formulario console.log(this.type);
    //-->> Validar unicamente el email
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    } else {
        //Al monento de que se borre un campo se vuelve a desabilitar el boton enviar
        btnEnviar.disabled = true;
    }
}


// Verifica la longitud del texto en los campos
function validarLongitud(campo) {

    //console.log(campo.value.length);

    /*Condición que cambia el border del input*/
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}


function validarEmail(campo) {

    const mensaje = campo.value;
    /**Condición que cambia el border del input si no encuentra un arroba */
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}