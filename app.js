//EXPRESIONES REGULARES
/*  Las expresiones regulares son patrones utilizados para encontrar 
*  una determinada combinación de caracteres dentro de una cadena de texto. 
*  En JavaScript, las expresiones regulares también son objetos. 
*  Estos patrones se utilizan en los métodos exec y test de RegExp, 
*  así como los métodos match, replace, search y split de String.  */

let valor, expReg;

expReg = /[123456789]/;
/* expReg con rango */
expReg =/[1-9]/;

valor = 1992;
/**Verificar si los numeros de valor se encuentran dentro de la expresion regular */
console.log(expReg.test(valor));

