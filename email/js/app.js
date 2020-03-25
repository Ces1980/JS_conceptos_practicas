/**Zona de event variables**/

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');



/**
 * Método que contiene los registros de un evento de un objeto en especifico
 * 
 * El ObJeto especifico puede ser un simple elemento en un archivo, 
 * el mismo  documento , una ventana o un  XMLHttpRequest.
 */
eventListeners();



/**Zona de event lisener**/

function eventListeners() {
    //Inicio de la aplicación y desabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    //Boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}


/**Zona de funciones**/


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


//Resetear al formulario
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}


//Cuando se envía el correo
function enviarEmail(e) {
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que envía el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spiner y mostrar gif de enciado
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function() {
            //Remueve el gif de correo
            enviado.remove();
            //Resetea los campos del formulario
            formularioEnviar.reset();
        }, 5000);
    }, 3000);
    e.preventDefault();
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