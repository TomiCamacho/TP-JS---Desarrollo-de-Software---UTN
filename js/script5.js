let persona = {
    nombre:'Ana',
    edad:30,
    ciudad:'Mendoza'
}

const cambiarCiudad = (nuevaCiudad) =>
    persona.ciudad=nuevaCiudad;

const mostrarPersona = () => {
    for (let clave in persona) {
        console.log(clave + ': ' + persona[clave]);
    }};

console.log('Persona antes: ');
mostrarPersona();
cambiarCiudad('Barcelona');
console.log('Persona después: '
);
mostrarPersona();



let libro = {
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes',
    anio: 1605
}

const esAntiguo = (libroIng) => {
    let siono = libroIng.anio < (2014);
    console.log('El libro "'+libroIng.titulo+'" es antiguo: '+siono)
}

esAntiguo(libro);