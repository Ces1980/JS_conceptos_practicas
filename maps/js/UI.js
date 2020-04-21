class UI {
    constructor() {

        //Instanciar la API y guardada como propiedad
        this.api = new API();

        //Crear los markers con layerGroup de Leaflet

        /* LayerGroup es una clase de 
        https://leafletjs.com/ */
        this.markers = new L.LayerGroup();
        // Iniciar el mapa
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
        // Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + enlaceMapa + ' Contributors',
            maxZoom: 18,
        }).addTo(map);
        return map;

    }

    mostrarEstablecimientos() {
        //Obtener datos esta declarada en la clase API pero como API
        //se va a instanciar desdecla clase UI se puede utilizar
        this.api.obtenerDatos()
        .then(datos =>{
            const resultado  = datos.respuestaJSON.results;

            //Ejecutar la función para mostrar los pines
            this.mostrarPines(resultado);
        })
    }

    mostrarPines(datos){
        //Limpiar los markers
        this.markers.clearLayers();

        //Recorrer los estableciemientos
        datos.forEach(dato =>{
            //destructuring
            const {latitude, longitude, calle, regular, premium } = dato; 

            //Crear pop-up método de Leaflet
            const opcionesPopUp = L.popup()
                .setContent(`
                    <p>Calle: ${calle}</p>
                    <p><b>Regular:</b>$ ${regular}</p>
                    <p><b>Premuim:</b>$ ${premium}</p>
                `);

            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);

//Se ha agregado los markers(señalamientos) de las gasolinerias a la capa 
//pero de momento no estan visibles esas marcas
            this.markers.addLayer(marker);
        });
        /* Incrustar las marcas al mapa */
        this.markers.addTo(this.mapa);

    }
}