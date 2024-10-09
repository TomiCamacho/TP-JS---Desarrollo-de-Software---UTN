let num=10;

while (num!=0) {
    console.log(num);
    num--;
}

let numIng;
do {
    numIng = prompt('Ingresa un número mayor a 100:')
} while (numIng<=100);

console.log('Ingresaste un número mayor a 100: '+numIng)