// DOM es lo que contiene al html, todo lo que compone al html se conoce como nodos (etiquetas, clases, id, formularios, tablas, todo junto es el dom, es lo que se ve en el navegador).

let elemento;

elemento = document; // Retorna todo el html
elemento = document.all; // Retorna todo el html en forma de arreglo
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain; // 127.0.0.1
elemento = document.URL; // http://127.0.0.1:5500/index.html#
elemento = document.characterSet; // UTF-8
elemento = document.forms; // Accede a todos los formularios
elemento = document.forms[0]; // Accede a un formulario en específico
elemento = document.forms[0].id; // busqueda --> Accede al id del formulario
elemento = document.forms[0].className; // formulario clase2 clase3 --> Accede al conjunto de clases del elemento
elemento = document.forms[0].classList; // Accede al conjunto de clases del elemento, pero como un arreglo
// elemento = document.forms[0].classList[0]; // formulario

// Para saber cuántas imágenes hay en el sitio web
elemento = document.images; // HTMLCollection --> Retorna la cantidad de imágenes como si fuera un arreglo, cada imagen con el id o clase
elemento = document.images[2];
elemento = document.images[2].src; // http://127.0.0.1:5500/img/curso1.jpg --> Accede al src de la imagen
elemento = document.images[2].getAttribute('src'); // img/curso1.jpg --> Regresa la url, sin el puerto

// Arreglo de imágenes
let imagenes = document.images;
let imagenesArr = Array.from(imagenes); // Convierte HTMLCollection en un arreglo
console.log(imagenesArr);

// Accedes a cada imagen de manera individual
imagenesArr.forEach(function(imagen) {
    console.log(imagen);
});

// Cantidad de scripts
elemento = document.scripts; // HTMLCollections scripts

console.log(elemento);

// Eliminar de Local Storage
localStorage.clear();


// Seleccionando elementos

// getElementById

elemento = document.getElementById('hero');
elemento = document.getElementById('hero').className;

elemento = document.getElementById('header').className; // header (clase y id tienen el mismo nombre)

console.log(elemento);


let encabezado;

encabezado = document.getElementById('encabezado').className; // encabezadp
encabezado = document.getElementById('encabezado').textContent; // Cursos en línea
encabezado = document.getElementById('encabezado').innerText; // Cursos en línea

console.log(encabezado);

encabezado = document.getElementById('encabezado');

// Cambiar estilo de un elemento
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

// Cambiar el texto
encabezado.textContent = 'Los mejores cursos';
encabezado.innerText = 'Los mejores cursos';

console.log(encabezado);
console.log(encabezado.innerText);


// Query Selector, puede seleccionar por id (#) o por clase (.) pero si hay muchas etiquetas con la misma clase, sólo selecciona el primer elemento que encuentre en el dom.

// Seleccionar por id
const encabezado1 = document.querySelector('#encabezado'); // Se selecciona el id con el signo #, igual que en CSS

// Seleccionar por clase
const encabezado2 = document.querySelector('.encabezado');

// Aplicar CSS ( Se pueden aplicar las mismas propiedades que con getElementById)
encabezado1.style.background = '#330';
encabezado1.style.color = '#fff';
encabezado1.style.padding = '20px';
encabezado1.textContent = 'Bienvenido a Cursos en Línea';

console.log(encabezado1);

// Seleccionar por etiqueta --> Selecciona el primer elemento
const encabezado3 = document.querySelector('h1');

console.log(encabezado3);

// Seleccionar una imagen
const image = document.querySelector('img');
console.log(image);

//Seleccionar una img dentro de un div (id='card')
const imgDiv = document.querySelector('.card img');

// Seleccionar elementos específicos de un conjunto de elementos

let enlace;

// nav id='principal'
enlace = document.querySelector('#principal a:first-child'); // Primer enlace (primer hijo)
enlace = document.querySelector('#principal a:nth-child(3)');
enlace = document.querySelector('#principal a:last-child'); // último enlace

console.log(enlace);

// Query Selector All. Selecciona todos los elementos que correspondan a una clase
const enlaces = document.querySelectorAll('.enlace');
console.log(enlaces); // NodeList(8) [a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace]

// Seleccionar todas las imágenes del sitio
const images = document.querySelectorAll('img');
console.log(images);


// Selección de múltiples elementos
let enlaces1 = document.getElementsByTagName('enlace')[3]; // Regresa el enlace en posición 3.

// enlaces1 = enlaces1[0]; // regresa el primer enlace del arreglo

// enlaces1.style.background = '#333';
// enlaces1.textContent = 'Nuevo enlace';

console.log(enlaces1);


const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

console.log(listaEnlaces);


const links = document.getElementsByTagName('a'); // Slecciona etiquetas del html

links[18].style.color = 'red';
links[18].textContent = 'Nuevo enlace';

console.log(links);

// Convertir la colección de enlaces en un arreglo
let enlaces2 = Array.from(links);

enlaces2.forEach(function(enlace) {
    console.log(enlace.textContent); // Retorna el texto que contiene cada enlace
});

console.log(enlaces2);


let enlaces3 = document.querySelectorAll('#principal .enlace');
enlaces[1].style.background = 'red';
enlaces[1].textContent = 'nuevo enlace';
enlaces3 = document.querySelectorAll('h1');
console.log(enlaces3); // NodeList(5) [a.enlace, a.enlace, a.enlace, a.enlace, a.enlace]

enlaces3 = document.querySelectorAll('#principal a:nth-child(odd)'); // odd selecciona los enlaces impares

enlaces3.forEach(function(impares) {
    impares.style.backgroundColor = 'red';
    impares.style.color = 'white';
});

console.log(enlaces3); // NodeList(3) [a.enlace, a.enlace, a.enlace]

// Traversing: Acceder a un elemento desde el padre hacia el hijo

const navegacion = document.querySelector('#principal');

console.log(navegacion.nodeName); // NAV

console.log(navegacion.childNodes); // NodeList(11) --> Devuelve una lista de 11 elementos, 5 enlaces + los espacios entre los enlaces
console.log(navegacion.children); // HTMLCollection(5) --> Regresa sólo los enlaces, sin contar los espacios entre ellos

console.log(navegacion.children[0].textContent = 'Nuevo enlace');

console.log(navegacion.children[0].nodeName); // A --> nodeNAme accede al nombre de la etiqueta html (nodo html)

console.log(navegacion.children[0].nodeType); // 1 --> Regresa el tipo de nodo con un número

// TIPOS DE NODOS (todos conforman el html, dom)
// Nodo tipo 1 ==> Elementos html
// Nodo tipo 2 ==> Atributos
// Nodo tipo 3 ==> Text nodes
// Nodo tipo 8 ==> Comentarios
// Nodo tipo 9 ==> Documentos
// Nodo tipo 10 ==> doctype

const barra = document.querySelector('.barra');

console.log(barra.children); // HTMLCollection [div.container]
console.log(barra.children[0]); // <div class="container">...</div>
console.log(barra.children[0].children[0]); // <div class="row">...</div>
console.log(barra.children[0].children[0].children); // HTMLCollection(3) [div.four.columns.icono.icono1, div.four.columns.icono.icono2, div.four.columns.icono.icono3]

const cursos = document.querySelectorAll('.card');

console.log(cursos); // NodeList(12) [div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card]

console.log(cursos[0].lastChild); // #text --> espacios en blanco
console.log(cursos[0].lastElementChild); // <div class="info-card"></div> --> último elemento
console.log(cursos[0].firstElementChild); // <img src="img/curso1.jpg" class="imagen-curso u-full-width"> --> primer elemento

console.log(cursos[0].childElementCount); // 2 --> childElementCount cuenta cuántos elementos hay dentro del elemento cursos[0]


// Traversing: Desde el hijo hacia el padre

const enlaces4 = document.querySelectorAll('.enlace');

console.log(enlaces4); // NodeList(8) [a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace]

console.log(enlaces4[0]); // <a class="enlace" href="#" style="background-color: red; color: white;">Nuevo enlace</a>

console.log(enlaces4[0].parentNode); // <nav id="principal" class="menu">...</nav>

console.log(enlaces4[0].parentElement); // <nav id="principal" class="menu">...</nav>
console.log(enlaces4[0].parentElement.parentElement); // <div class="four columns">...</div>
console.log(enlaces4[0].parentElement.parentElement.parentElement); // <div class="row"></div>


const cursos1 = document.querySelectorAll('.card');

console.log(cursos1); // NodeList(12) [div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card]

console.log(cursos1[0].parentElement); // <div class="four columns">...</div>
console.log(cursos1[0].parentElement.parentElement); // <div class="row">...</div>
console.log(cursos1[0].parentElement.parentElement.parentElement); // <div id="lista-cursos" class="container">...</div>
console.log(cursos1[0].parentElement.parentElement.parentElement.children); // HTMLCollection(5) [h1#encabezado.encabezado, div.row, div.row, div.row, div.row, encabezado: h1#encabezado.encabezado]

console.log(cursos1[0].parentElement.parentElement.parentElement.children[0].textContent = 'hola desde traversing');

const enlaces5 = document.querySelectorAll('.enlace');



console.log(enlaces5[4]); // <a class="enlace" href="#" style="background-color: red; color: white;">Temas</a>
console.log(enlaces5[4].previousElementSibling); // <a class="enlace" href="#">Soporte</a> --> Accede al enlace previo, en el mismo nivel
console.log(enlaces5[4].previousElementSibling.previousElementSibling); // <a class="enlace" href="#" style="background-color: red; color: white;">Aplicaciones Móviles</a>

console.log(enlaces5[0].nextElementSibling); // <a class="enlace" href="#" style="background-color: red;">nuevo enlace</a>


//Crear elementos con JavaScript

// Crear un enlace
const links1 = document.createElement('a');

// Agregar una clase al enlace
links1.className = 'enlace';

// Añadir id
links1.id = 'nuevo-id';

// Atributo href
links1.setAttribute('href', '#');

// Agregar texto al elemento
links1.textContent = 'Nuevo enlace';
links1.appendChild(document.createTextNode('Nuevo enlace'));

// Agregarlo al html
document.querySelector('#secundaria').appendChild(links1);

console.log(links1);


// Reemplazando elementos con JavaScript

const nuevoEncabezado = document.createElement('h2');

// Agregar un id
nuevoEncabezado.id = 'encabezado';

// Agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos')); // --> appendChild se usa para insertar elementos hijos
console.log(nuevoEncabezado);

// Elemento anterior será reemplazado
const anterior = document.querySelector('#encabezado');
console.log(anterior.parentElement);

// Elemento padre
const elemPadre = document.querySelector('#lista-cursos');

// Reemplazar
elemPadre.replaceChild(nuevoEncabezado, anterior); // replaceChild requiere dos parámetros (nuevoElemento, elementoAnterior)


// Agregar o quitar clases y otros atributos
const links2 = document.querySelectorAll('.enlace');
const navegacion1 = document.querySelector('#principal');

// Eliminar enlace
links2[0].remove(); // Eliminando directamente el enlace
navegacion1.removeChild(links2[1]); // removeChild elimina el elemento tomando como referencia al elemento padre

console.log(links2);


const primerLi = document.querySelector('.enlace');

let element;

// Obtener una clase de CSS 
element = primerLi.className; // enlace

// Agregar una nueva clase
elemento = primerLi.classList.add('nueva-clase');

// Obtener una lista de clases
element = primerLi.classList; // DOMTokenList(2) ["enlace", "nueva-clase", value: "enlace nueva-clase"] --> Retorna un arreglo con las clases

// Remover una clase
element = primerLi.remove('nueva-clase');

// Leer atributos
element = primerLi.getAttribute('href'); //#

// Dar valor a un atributo
primerLi.setAttribute('href', 'http://facebook.com'); // getAttribute --> Obtener el valor
primerLi.setAttribute('data-id', 20); // setAttribute --> Modifica el valor del atributo o lo añade en caso de que no exista

// Comprobar si existe el atributo
element = primerLi.hasAttribute('data-id'); // true
element = primerLi.hasAttribute('data-algo'); // false

// Eliminar atributo
primerLi.removeAttribute('data-id');

element = primerLi;

console.log(element);