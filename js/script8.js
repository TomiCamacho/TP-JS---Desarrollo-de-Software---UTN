let e1 = document.getElementById('lista-elemento1');
let e2 = document.getElementById('lista-elemento2');
let e3 = document.getElementById('lista-elemento3');
let e4 = document.getElementById('lista-elemento4');



const mostrarE = (e) => console.log(e.target.innerText);

e1.addEventListener('click',mostrarE);
e2.addEventListener('click',mostrarE);
e3.addEventListener('click',mostrarE);
e4.addEventListener('click',mostrarE);




let input = document.getElementById('eventos-form-input');
let buttonDeshab = document.getElementById('eventos-form-buttonDeshab');
let buttonHab = document.getElementById('eventos-form-buttonHab');

const deshabilitar = (e) => {
    e.preventDefault();
    if(input.disabled == false){
    input.disabled=true;
    input.placeholder='';
}}

const habilitar = (e) => {
    e.preventDefault();
    if(input.disabled == true){
    input.disabled=false;
    input.placeholder='Ingresa algo';
}}

buttonDeshab.addEventListener('click',deshabilitar);
buttonHab.addEventListener('click',habilitar);