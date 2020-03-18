function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function() {
        console.log('Completo');
    }, 5000);
}
obtenerClientes();

try {
    algo();
} catch (error) {
    console.error(error);
    console.warn(error);
} finally {
    console.log('Ejecute el código de una ');
}