export class API {
  /*      Parametros que serviran para guardar los datos que se ingresen en el formulario 
        y al mismo tiempo ayudaran a construir la URL    
 */ constructor(artista,cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }
  // Construimos la consulta
  async consultarAPI() {
    const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);

    const respuesta = await url.json();

    return {
      respuesta
    };
  }
}
