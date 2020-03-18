//For en JavaScript

for (let index = 0; index <= 20; index++) {

    if (index === 10) {
        console.log('Voy en el 10');
        continue;
    } else if (index == 15) {
        break;

    }
    console.log(index);
}
console.log('Me sali en el 15');

console.log('For negativo');

for (let index = 20; index > 0; index--) {


    console.log(index);

}