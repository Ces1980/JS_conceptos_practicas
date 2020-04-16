//Destrcturing forma anterior


function reservacion(completo, opciones){
    /**La posición en los parametros es corrsponiente a la declarada en la función */
    let {metodoPago, cantidad, dias} = opciones;
    
    /**Mapear cada una de las cantidades */
                console.log(metodoPago)
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