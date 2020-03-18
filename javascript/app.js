//For en JavaScript


let comida = ['Carnitas', 'Barbacoa', 'Flautas', 'Quesadillas', 'Sopes'];

for (let index = 0; index < comida.length; index++) {
    console.log(comida[index]);

}
console.log('Recorrer arreglos con forEach');
comida.forEach(element => {
    console.log('Comida: ' + element);
});

let i = 0;

while (i < 10) {

    console.log(i);
    i++;
}

do {
    console.log(i);
    i--;
} while (i > 0);