class UI {
    constructor() {
        //Inicializa el mapa
        this.mapa = this.inicializarMapa();
    }


    inicializarMapa() {
        //Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
        const enlaceMap = '<a href ="http://openstreetmap.org">OpenStreetMap</a>';

        L.titleLayer(
            'http://{s}.titleopenstreetmap.org/{z}/{x}/{y}.png', {
            mazZoom: 18,
        }).addTo(map);

        return map;
    }

}