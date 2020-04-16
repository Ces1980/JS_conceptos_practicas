//Destrcturing forma anterior


function reservacion(completo, opciones){
    opciones= opciones || {};
    
    /**Mapear cada una de las cantidades */
    let metodo = opciones.metodoPago,
                cantidad = opciones.cantidad,
                dias = opciones.dias;

                console.log(metodo)
                console.log(cantidad)
                console.log(dias)
}


reservacion(
    true,
    {
        metodoPago: 'tarjeta',
        cantidad:2000,
        dias:3
    }
);