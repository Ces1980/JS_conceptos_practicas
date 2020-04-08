//Async Await
/**
 * La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction.
 * Es posible definir también funciones asíncronas a través de una expresión de función async.
 */

async function obtenerClientes() {
    //Crear un promise
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Clientes descargados....');
        }, 2000);
    });
    //Error o no
    const error = true;

    if (!error) {
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject('Hubo un error...');
    }
}

obtenerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error))