import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();
    
    /* Obtener datos del formulario */
    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;

          if ( artista === '' || cancion === '') {
            //   El usuario deja los campos vacios mostrar error
              /* Agregamos al div con el id #mensajes el mensaje a través de innerHTML */
              UI.divMensajes.innerHTML= 'Error...todos los campos son obligatorios';
              /*Le damos estilos al mensaje a traves de la clase error estilizada desde el css*/ 
              UI.divMensajes.classList.add('error');
              setTimeout(() => {
                  /* Vaciamos la cadena de texto */
                UI.divMensajes.innerHTML='';
                /*Removemos el error*/ 
                UI.divMensajes.classList.remove('error');
              }, 3000);
          }else {
                // El formulario esta completo realizar consulta a la API
          }
});