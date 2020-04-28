const restauApp = {};
restauApp.platillos = [

    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 15
    }
];

restauApp.funciones = {
    ordenar: id => {
        console.log(`
                Tu platillo: ${restauApp.platillos[id].platillo} se esta preparando
        `);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restauApp.platillos.push(nuevo);
    },
    mostrarMenu: platillo => {
        console.log(`
                Bienvenidos a nuestro menú:
        `);
        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`)
        });
    }
}



console.log(restauApp);
const { platillos } = restauApp;
restauApp.funciones.mostrarMenu();
restauApp.funciones.agregarPlatillo('Crepas', 25);
restauApp.funciones.mostrarMenu();
restauApp.funciones.ordenar(2);
restauApp.funciones.ordenar(1);
restauApp.funciones.ordenar(3);
restauApp.funciones.ordenar(0);
