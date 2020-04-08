//Async Await
/**
 * La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction.
 * Es posible definir también funciones asíncronas a través de una expresión de función async.
 */

async function leerTodos() {
    //Esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //Procede cuando la respuesta este hecha
    const datos = await respuesta.json();

    return datos;
}

leerTodos()
    .then(usuarios => console.log(usuarios));