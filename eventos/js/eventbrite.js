class EventBrite {
    constructor() {
        //Token de autentificación de la página eventBrite para usar su apí
        this.token_auth = 'NU5VQSU75GFV4PYXLQQA';
        //Para ordenar por fecha por cada que se genere una instancia
        this.ordenar = 'date';
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