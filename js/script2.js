let a=14,b=8,c=4;
let numbers = [a,b,c];
let mayor = Math.max(...numbers);
console.log('El mayor de los tres números es: '+mayor);

let numeroIngresado = prompt('Ingresa un número y te diré si es par o impar');
( () => { numeroIngresado % 2 == 0 ?
    console.log('El número '+numeroIngresado+' es par')
    : console.log('El número '+numeroIngresado+' es impar')
})();