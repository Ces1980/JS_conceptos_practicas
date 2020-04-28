const Vendedor = function (nombre) {
    this.nombre = nombre;
}

const Comprador = function (nombre) {
    this.nombre = nombre;
}

Vendedor.prototype = {
    oferta: function (articulo, precio) {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function (comprador) {
        console.log(`Vendido a ${comprador} (Sonido de mazo)`);
    }
}

Comprador.prototype = {
    oferta: function (mensaje, comprador) {
        console.log(`${comprador.nombre} : ${mensaje}`)
    }
}

const Subasta = function () {
    let compradores = {};

    return {
        registrar: function (usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Instancias las clases

const cesar = new Comprador('César');
const vane = new Comprador('Vanessa');
const gloria = new Comprador('Gloria');

const vendedor = new Vendedor('Verónica');


const subasta = new Subasta();

// Se registra a César en la subasta
subasta.registrar(cesar);
subasta.registrar(vane);
subasta.registrar(gloria);


vendedor.oferta('Mustang 1980', 3000.00);
cesar.oferta(3500, cesar);
vane.oferta(4000, vane);
gloria.oferta(5000, gloria);

vendedor.vendido(gloria.nombre);