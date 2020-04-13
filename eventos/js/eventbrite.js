class EventBrite {
    constructor() {
        //Token de autentificación de la página eventBrite para usar su apí
        this.token_auth = 'NU5VQSU75GFV4PYXLQQA';
        //Para ordenar por fecha por cada que se genere una instancia
        this.ordenar = 'date';
    }

    //Mostrar resultados de la busqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch (`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}/?token=${this.token_auth}`);
        
        //Codigo esperar la respuesta del evento y devolverlo com JSON
        const eventos = await respuestaEvento.json();
        return{
            eventos
        }

    }


    //*Obtiene las categorias en asincrono
    async obtenerCategorias() {
        //Consultar las categorias a la REST API de EventBrite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //Esperar la respuesta de las categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();

        //Devolvemos el resultado
        return{
            categorias
        }
    }
}