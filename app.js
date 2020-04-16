//Destrcturing forma anterior


function reservacion(completo, 
/* Declarar valores por default */
{
    metodoPago = 'efectivo', 
    cantidad = 0, 
    dias = 0
}= {}
)
{

    if (completo) {
        console.log('Proceder a acompletar...')
    }else{
        console.log('Abandonar...')
    
    }
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