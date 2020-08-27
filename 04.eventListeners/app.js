// event listeners: Para esperar a que el usuario haga una acción dentro de la página web para ejecutar un bloque de código

// Event listener click al buscador
// <form action="#" id="busqueda" method="post" class="formulario clase2 clase3"> --> action='#' al hacer click se ejecuta el action y por defecto lo redirige a otra página
//      <input class="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador">
//      <input type="submit" id="submit-buscador" class="submit-buscador">
// </form>

document.querySelector('#submit-buscador').addEventListener('click', function(event) { // addEventListener('evento', función)
    event.preventDefault(); // Va a evitar el action por default, por lo tanto no va a redirigir a otra página
    alert('Buscando Cursos');
});

// otra forma, poniendo la función de manera externa
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(event) {
    event.preventDefault();

    console.log('Desde la función ejecutar botón');

    let elemento;
    elemento = event;
    console.log(elemento); // MouseEvent {isTrusted: true, screenX: 536, screenY: 364, clientX: 536, clientY: 293, …}

    elemento = event.target;
    console.log(elemento); // <input type="submit" id="submit-buscador" class="submit-buscador"> --> event.target accede al elemento al que le he dado click

    elemento = event.target.id;
    console.log(elemento); // submit-buscador

    elemento = event.target.className; // 
    console.log(elemento); // submit-buscador

    elemento = event.target.innerText; // 
    console.log(elemento); // Accede al texto que esté en el elemento

}


document.querySelector('#encabezado').addEventListener('click', function(event) {
    // console.log(event.target.innerText); //// Cursos En Línea

    // Modificar el texto del encabezado
    event.target.innerText = 'Nuevo encabezado';
    event.target.innerText = 2 + 2;

});


// Variables

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

// Click
// boton.addEventListener('click', obtenerEvento);

// // Doble click
// boton.addEventListener('dblclick', obtenerEvento);

// // Mouse enter
// boton.addEventListener('mouseenter', obtenerEvento); // Se ejecuta cuando se pasa el mouse por encima del elemento, no necesita hacer click

// // Mouse over
// boton.addEventListener('mouseover', obtenerEvento);

// // Mouse leave 
// boton.addEventListener('mouseleave', obtenerEvento); //Se ejecuta cuando se retira el mouse del elemento

// // Mouse out 
// boton.addEventListener('mouseout', obtenerEvento);

// // Mouse down 
// boton.addEventListener('mousedown', obtenerEvento);

// // Mouse up
// boton.addEventListener('mouseup', obtenerEvento); // Se ejecuta cuando se suelta el mouse del elemento

// // Mouse move 
// boton.addEventListener('mousemove', obtenerEvento);


// function obtenerEvento(e) {
//     console.log(`EVENTO: ${e.type}`); // EVENTO: click --> e.type nos retorna el tipo de evento que se está ejecutando

// }


// eventos para inputs

const busqueda = document.querySelector('#buscador');

// // keydown --> Se accede a la busqueda que escribe el usuario en el input, se ejecuta cuando se presiona la tecla
// busqueda.addEventListener('keydown', getEvent);

// // keyup --> Se ejecuta cuando se suelta la tecla
// busqueda.addEventListener('keyup', getEvent);

// // keypress
// busqueda.addEventListener('keypress', getEvent);

// focus --> se ejecuta cuando se da click al input
busqueda.addEventListener('focus', getEvent);

// blur --> Se ejecuta cuando se da click fuera del input, sirve para validar formularios (campos obligatorios)
busqueda.addEventListener('blur', getEvent);

// cut --> Se ejecuta cuando al texto que está en el input se le hace ctrl+x (cortar)
busqueda.addEventListener('cut', getEvent);

// copy --> Cuando se copia el texto
busqueda.addEventListener('copy', getEvent);

// paste --> pegar, se usa cuando no se puede copiar por derechos de autos (ejemplo)
busqueda.addEventListener('paste', getEvent);

// input --> Detecta todos los eventos que se lleven a cabo en el input
busqueda.addEventListener('input', getEvent);

// change --> Select, cuando se selecciona una opción y luego se cambia
busqueda.addEventListener('change', getEvent);


function getEvent(event) {
    // const encabezado = document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(busqueda.value);
    console.log(`EVENTO: ${event.type}`);
}



// Event bubbling (burbuja de eventos) --> Click en elemento hijo se propaga en elemento padre. Per si doy clck en elemento padre, solo se ejecuta el elemento padre

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

// card.addEventListener('click', function(e) {
//     console.log('Click en Card');
//     e.stopPropagation(); // Detener propagación
// });

// infoCurso.addEventListener('click', function(e) {
//     console.log('Click en Info Curso');
//     e.stopPropagation(); // Detener propagación

// });

// agregarCarrito.addEventListener('click', function(e) {
//     console.log('Click en Agragar a Carrito');
//     e.stopPropagation(); // Detener propagación
// });


// Delegación

document.body.addEventListener('click', eliminarElemento); // .body para detectar cualquier click que haya en el documento

function eliminarElemento(e) {
    e.preventDefault();
    // console.log('Click!!');
    // console.log(e.target.classList); // Lista de clases de cada elemento que le doy click

    if (e.target.classList.contains('borrar-curso')) {
        console.log('Sí!');
        console.log(e.target.parentElement.parentElement.remove()); // remueve el elemento
    } else if (e.target.classList.contains('agregar-carrito')) {
        console.log('Curso agregado');
    } else {
        console.log('No!');
    }
}

// Local Storage --> Permite añadir información al navegador, queda guardado en el pc cuando se vuelva a abrir el navegador

// Agregar a local storage --> Queda guardado luego de cerrar el navegador, a no ser que se borre el caché de la computadora
// localStorage.setItem('nombre', 'Juan');

const nombre = localStorage.getItem('nombre');
console.log(nombre); // Juan

// // Session storage --> Se borra cuando se cierra el navegador
// sessionStorage.setItem('nombre', 'Juan');

// Eliminar de local storage
localStorage.removeItem('nombre');

localStorage.clear(); // Limpiar todo el local storage