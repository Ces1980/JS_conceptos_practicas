// Tambien se le conoce como suscriptor-publicador

let observer = {
    obtenerOfertas: function (callback) {
        if (typeof callback === 'function') {
            this.subcribers[this.subcribers.length] = callback;
        }
    },
    cancelarOfertas: function (callback) {
        for (let i = 0; i < this.subcribers.length; i++) {
            if (this.subcribers === callback) {
                delete this.subcribers[i];
            }

        }
    },
    publicarOferta: function (oferta) {
        for (let i = 0; i < this.subcribers.length; i++) {
            if (typeof this.subcribers[i] === 'function') {
                this.subcribers[i](oferta);
            }

        }
    },
    crear: function (objeto) {
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subcribers = [];
            }
        }
    }
}
// Publicador
const udemy = {
    nuevoCurso: function () {
        const curso = 'Un nuevo curso de JavaScript!!';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function () {
        const oferta = 'Comprar un celular';
        this.publicarOferta(oferta);
    }
}

// Crear las publicaciones
observer.crear(udemy);
observer.crear(facebook);

// Suspcriptor
const cesar = {
    compartir: function (oferta) {
        console.log('César dice: excelente oferta!!  ' + oferta);
    }
}

const vero = {
    interesa: function (oferta) {
        console.log('Vero dice :Me interesa la oferta de ' + oferta);
    }
}

udemy.obtenerOfertas(cesar.compartir);
udemy.obtenerOfertas(vero.compartir);
udemy.nuevoCurso();
udemy.cancelarOfertas(vero.interesa);
udemy.nuevoCurso();


facebook.obtenerOfertas(vero.interesa);
facebook.obtenerOfertas(cesar.compartir);
facebook.nuevoAnuncio();