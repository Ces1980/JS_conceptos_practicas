/**Variables */
const listaTweets = document.getElementById('lista-tweets');

//Evenlisteners

eventListener();

function eventListener() {
    //Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit',
        agregarTweet);
    //Borrar tweet
    listaTweets.addEventListener('click', borrarTweet);
    //Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

// -->> Método para agregar tweet del formulario
function agregarTweet(evento) {
    //No envía datos, cancela
    evento.preventDefault();
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
    //-- Añadir a localStorage
    agregarTweetLocalStorage(tweet);
}

// -->> Función para borrar tweet
function borrarTweet(evento) {
    /*CAncela el evento sin detener el resto del funcionamiento*/
    evento.preventDefault();
    /*Condición que identifica que si existe la clase remuev el elemento 
    señalado por la clase*/
    if (evento.target.className === 'borrar-tweet') {
        console.log(evento.target.parentElement.remove());
        alert('Tweet eliminado');
    }
}

//-- >> Mostrar datos de localStorage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    /**Muestra los arrelos en consola */
    console.log(tweets);
    /**forEach que permite mostrar en pantalla los tweets almacenados */
    tweets.forEach(function(tweet) {
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
    });
}


// --> Agregar tweet a localStorage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage()

    //Añadir el nuevo tweet
    tweets.push(tweet);
    //Convertir de string a arreglo y se arregla para localStorage
    localStorage.setItem('tweets', JSON.stringify(tweets));
    console.log('Nuevo arreglo');
}

//--> Comprobar que haya elementos en localStorage, retorna un arreglo
function obtenerTweetsLocalStorage() {
    let tweets;
    //Revisamos los valores de localstorage
    if (localStorage.getItem('tweets') === null) {
        /**Si no hay nada retorna el arreglo vacio */
        tweets = [];
    } else {
        /**Guarda los tweets agregados en formato json */
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}