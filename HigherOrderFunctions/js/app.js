const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];
// for (let index = 0; index < autos.length; index++) {
// 	console.log(autos[index].marca);
// }
// forEach
/* autos.forEach(auto => {
	console.log(auto);
}); */
// autos.forEach(auto => console.log(auto));

/*		Ver valores especifico de un atributo de los
objetos que se encuentran en el arreglo		*/
// let resultado = [];
// autos.forEach(auto => {
// 	if (auto.color === 'Negro') {
// 		resultado.push(auto);
// 	}
// });

// console.log(resultado)

/* autos.forEach(auto => {
	console.log(auto)
}); */
// map
// let resultado = autos.map(auto => {
// 	return auto;
// });
// let resultado = autos.map(auto => auto);
// console.log(resultado)

// filter
// let resultado = autos.filter(auto => auto.marca === 'BMW');
// let resultado1 = autos.filter(auto => auto.color === 'Rojo');
// let resultado2 = autos.filter(auto => auto.year === 2018);
// console.log(resultado);
// console.log(resultado1);
// console.log(resultado2)

// console.log(`
// 		Revisar dos condiciones con .filter

// `);

// let resultado3 = autos.filter(auto => auto.year >= 2015 && auto.year <= 2017);
// console.log(resultado3)

// find
// let resultado = autos.find(auto => auto.marca === 'BMW');
// let resultado = autos.find(auto => auto.modelo === 'Mustang');
// console.log(resultado)

// reduce
/*
El método reduce() aplica una función a un acumulador y a cada
valor de una array (de izquierda a derecha) para reducirlo a un único valor.
*/
//Sintaxis
/* console.log(`
			Sintaxis:  arreglo.reduce((totalValor, integrantesArreglo) => valorActual + integrantes, valorInicial)

					   resultado = autos.reduce((total, auto) => total + auto.precio, 0)


					   					const numeros = [, 1, 2, 3]
					   resultado1 = numeros.reduce((total, numero) => total + numero, 0)
					   					resultado1 = 6
`);
let resultado = autos.reduce((total, auto) => total + auto.precio, 0);
console.log(resultado)

const numeros = [, 1, 2, 3];
let resultado1 = numeros.reduce((total, numero) => total + numero, 0);
console.log(resultado1)
 */
// some

let resultado = autos.some(auto => auto.marca === 'BMW');
let resultado1 = autos.some(auto => auto.precio > 50000);

console.log(resultado)
console.log(resultado1)

