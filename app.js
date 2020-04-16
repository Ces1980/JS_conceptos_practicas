//Destrcturing forma anterior


function reservacion(completo, opciones){
    opciones= opciones || {};
    console.log(opciones)
}


reservacion(
    true,
    {
        metodoPAgo: 'tarjeta',
        cantidad:2000,
        dias:3
    }
);