let input = document.getElementById('storage-form-correo-input');
let btnguardarcorreo = document.getElementById('storage-form-correo-btnguardar');
let correomostrado = document.getElementById('storage-form-correoguardado-p');
let btneliminarcorreo = document.getElementById('storage-form-btneliminar')
let correo;

const guardarcorreo = (e) => {
    e.preventDefault();
    correo = input.value;
    localStorage.setItem('correo', JSON.stringify(correo));
    mostrarCorreoGuardado();
}

const mostrarCorreoGuardado = () => {
    let correoguardado = localStorage.getItem('correo');
    correomostrado.innerText = correoguardado !== null ? ('Correo guardado: ' + JSON.parse(correoguardado)) : ('Correo guardado: ');
}

const eliminarCorreo = (e) => {
    e.preventDefault();
    localStorage.removeItem('correo');
    mostrarCorreoGuardado();
}

document.addEventListener('DOMContentLoaded',mostrarCorreoGuardado);

btnguardarcorreo.addEventListener('click',guardarcorreo);
btneliminarcorreo.addEventListener('click',eliminarCorreo);