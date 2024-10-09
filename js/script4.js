let num1=8, num2=7;
const esPar = (num) =>
    num % 2 == 0;
console.log('el número 8 es par:',esPar(num1));
console.log('el número 7 es par:',esPar(num2));

const convertirCelsiusAFahrenheit = (tempC) =>
    Math.round(tempC*1.8+32);

let tempIng = prompt('Ingrese una temperatura en Celsius');
tempIng = parseFloat(tempIng)
console.log(tempIng+'ºC son equivalentes a '+convertirCelsiusAFahrenheit(tempIng)+'ºF')