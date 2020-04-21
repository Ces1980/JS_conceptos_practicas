class API {
    async obtenerDatos() {

        const total = 1000;
        //Obtener datos desde la API
        const url = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`;
        const datos = await fetch(url);

        //Datos como JSON
        const respuestaJSON = await datos.json();

        return{
            respuestaJSON
        }
    }
}