//

class API {
    constructor(apikey) {
            //El parametro se guarda como propiedad del objeto
            this.apikey = apikey;
        }
        //Obtener todas las monedas
    async ObtenerMonedasAPI() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //Fetch a la URL
        const urlObtenerMonedas = await fetch(url);

        //Respuesta en Json
        const monedas = await urlObtenerMonedas.json();
        return {
            monedas
        }
    }

}