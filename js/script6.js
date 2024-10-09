let numeros = [1,2,3,4,5,6,7,8,9,10];

const duplicar = (arraynumeros) => {
    let numerospor2 = [];
    for (let num of arraynumeros) {
        numerospor2.push(num*2);
    }
    console.log('Números originales:\n'+numeros);
    console.log('Números multiplicados por 2:\n'+numerospor2);
}

duplicar(numeros);



let pares = [];

const agregarPares = (arrayIng) => {
    for (let i = 1; i <= 20; i++) {
        if(i % 2 == 0){arrayIng.push(i)};
    }
    console.log('Primeros 10 números pares:\n'+arrayIng);
}

agregarPares(pares);