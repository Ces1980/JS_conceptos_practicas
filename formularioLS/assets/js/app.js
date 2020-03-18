/**Variables */
const listaTweets = document.getElementById('lista-tweets');

//Evenlisteners

eventListener();

function eventListener() {
    //Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit',
        agregarTweet);
}

//Método tweet del formulario
function agregarTweet(e) {
    //No envía datos, cancela
    e.preventDefault();
    //Leer el valor de text área
    let tweet = document.getElementById('tweet').value;
    //Crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    //Crear el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Utilizar nodo li para añadir el botón de borrar al tweet mensaje
    li.appendChild(botonBorrar);
    //Usar el nodo padre para agregar al DOM el elemento li --> añadir el tweet a la lista
    listaTweets.appendChild(li);
}