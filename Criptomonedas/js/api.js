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

    async obtenerValores(moneda, criptomoneda) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        //Consultar en rest api
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return {
            resultado
        }
    }

}