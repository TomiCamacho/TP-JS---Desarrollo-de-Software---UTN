let parrafos = document.getElementById('dom-p');
let boton = document.getElementById('dom-button');

const toggleColor = () => {
    if (parrafos.classList.contains('letraazul')) {
        parrafos.classList.remove('letraazul');
        boton.innerText = 'Cambiar color a azul';
    } else {
        parrafos.classList.add('letraazul');
        boton.innerText = 'Cambiar color a negro';
    }
}

boton.addEventListener('click',toggleColor);


let input = document.getElementById('form-form-input');

const alertaform = (e) => {
    e.preventDefault();
    let msjIng = input.value;
    alert('Has ingresado: '+msjIng);
}

let botonform = document.getElementById('form-button')
.addEventListener('click',alertaform);