// TIPOS DE VARIABLES
// var
var nombre = 'Juan'; // Inicializando variable con un valor
nombre = 'John'; // Re escribiendo variable
var nombre = 'José'; // Reasignando valor a variable
console.log(nombre);

var nombre; // Inicializando variable sin valor --> undefined

// Inicializando más de una variable
var carrito1 = 'Libro',
    carrito2 = 'Lápiz';

// let
let nombre1 = 'Juan';
let nombre2; // Inicializando variable vacía --> undefined
let texto, mensaje; // Inicializando dos variables vacías

// Inicializando más de una variable
let carro1 = 'Libro',
    carro2 = 'Lápiz';

carro1 = 'Cuaderno'; // Reasignando valor de la variable
let carro1 = 'Libro'; // --> Uncaught Syntax Error: Identifier 'producto' has already been declared (Se puede volver a cambiar el valor a la variable, pero no se puede volver a declarar)

// const 
const producto; // --> Uncaught SyntaxError: Missing initializer in const declaration (las const siempre deben inicializarse con un valor, nunca deben estar vacías, ya que estas no se pueden re escribir)

const animal = 'gato';

animal = 'perro'; // Uncaught TypeError: Assignment to constant variable (no se puede reasignar un valor a una constante)


// Uso de comillas, las siguientes tres formas son válidas
mensaje = "Y entonces dije '!Buen curso'";
mensaje = 'Y entonces dije "!Buen curso"';
mensaje = 'Y entonces dije \'!Buen curso\' ';

mensaje = 'Y entonces dije 'Buen curso!' '; // Uncaught SyntaxError: Unexpected identifier

// Concatenación de strings
// ES5
let curso = 'JAVA' + 'SCRIPT'; // JAVASCRIPT

let aprendiendo = 'Aprendiendo',
    tecnologia = 'Javascript';
console.log =(aprendiendo + ' ' + tecnologia); // Aprendiendo Javascript

//ES6 (template literals)
console.log(`${aprendiendo} ${tecnologia}`);

// Cadenas de texto y sus métodos

// Longitud de una cadena de texto
console.log(tecnologia.length); // 10

// Concatenar otra cadena de texto
console.log(tecnologia.concat(' ', 'es genial')); // Javascript es genial

// Transformar a mayúsculas
console.log(tecnologia.toUpperCase()); // JAVASCRIPT

// Transformar a minúsculas
console.log(tecnologia.toLowerCase()); //javascript

let numero = 300;

console.log(numero.toLowerCase()); // Uncaught TypeError: numero.ToLowerCase is not a function, estos métodos sólo se pueden usar en cadenas de texto

numero = "300";
console.log(numero.toLowerCase()); // 300

// Convertir número a string 
let numero1 = 300;
console.log(numero1.toString()); // '300'

// Buscando una palabra en específico
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser Frontend';

console.log(mensaje.indexOf('Javascript')); // 12, método indexOf indica en qué posición comienza la palabra Javascript, contando desde la posición 0.

console.log(mensaje.indexOf('PHP')); // -1, cuando no encuentra el valor dentro de la cadena de texto retorna -1

// Cortar espacios en blanco de un string
const producto = '                  Monitor de 20 pulgadas      ';
console.log(producto.trimStart()) // Monitor de 20 pulgadas (elimina los espacios en blanco al inicio)
console.log(producto.trimEnd()) //                  Monitor de 20 pulgadas (elimina espacios final)
console.log(producto.trimStart().trimEnd()); // Elimina espacio en blanco en ambas direcciones
console.log(producto.trim()) // Elimina espacio en blanco en ambas direcciones

// Obteniendo un trozo del texto
console.log(mensaje.substring(0,22)); // Aprendiendo Javascript (Método substring extrae caracteres de un string entre dos índices específicos (inicio y fin, no incluyendo el final), y retorna un nuevo substring, sin cambiar el string original)

console.log(mensaje.slice(0,22)); // Aprendiendo Javascript (Método slice extrae parte del string, y retorna la parte extraida en un nuevo string, tomando los parámetros inicial y final para especificar la parte del string que se quiera extraer.  El segundp argumento indica donde finaliza la extracción, pero no se incluye. Si se omite, por ejemplo, slice(3) selecciona todos los caracteres desde la posición 3 hasta el final de la cadena)
console.log(mensaje.slice(0, 1)); // A (Obtiene sólo el primer caracter)
console.log(mensaje.slice(12)); // Javascript, CSS, HTML para ser Frontend (Obtiene desde el caracter en la posición 12 hasta el final del string)

console.log(mensaje.slice(-8)); // Frontend, con el número negativo obtiene trozo de texto contanto desde atrás hacia adelante
console.log(mensaje.slice(-1)); // d (Obtiene sólo el último caracter)

// **** Diferencia entre slice y substring****
// Cuando el primer argumento es mayor al segundo
console.log(mensaje.slice(2,1)); // método slice no hace nada
console.log(mensaje.substring(2,1)); // p (Método substring reordena los argumentos de menor a mayor, y retorna el resultado)

// Obteniendo un caracter específico
console.log(mensaje.charAt()) // A (retorna el caracter presente en el índice especificado)

// Repetir una cadena de texto
let texto = ' en Promoción'.repeat(3);
console.log(texto); //  en Promoción en Promoción en Promoción

console.log(`${producto} ${texto}!!!`);// Monitor 20 pulgadas  en Promoción en Promoción en Promoción !!!

texto = ' en oferta'.repeat(2.4);
console.log(texto); // en oferta en oferta (número decimal se redondea hacia abajo SIEMPRE)


// Dividir un string
console.log(mensaje.split(' ')); // ["Aprendiendo", "Javascript,", "CSS,", "HTML", "para", "ser", "Frontend"] (Método split usa un argumento como separador, en este caso el espacio (' ') y divide el string principal etre cada caracter que vaya encontrando y lo convierte en un arreglo de substrings, este método no cambia el string original).
console.log(mensaje.split(' ', 3)); // ["Aprendiendo", "Javascript,", "CSS,"] (En este caso se está usando un límite, el cual es un número entero que especifica un número máximo de divisiones que se incuirán en el arreglo).

console.log(mensaje.replace('CSS', 'PHP')); // Aprendiendo Javascript, PHP, HTML para ser Frontend (Método replace cambia el primer argumento por el segundo)

console.log(mensaje.includes('Javascript')); // true (Busca un argumento dentro del string y retorna un booleano)

let text = 'Hola mundo' + ' ';

console.log(text.repeat(3)); // Hola mundo Hola mundo Hola mundo (Repite el string las veces que indique el argumento)

// NÚMERO EN JAVASCRIPT
const num1 = 30,
      num2 = 20,
      num3 = 20.20,
      num4 = 0.1020,
      num5 = -3;

let resultado;

// Suma
resultado = num1 + num2; // 30

// Resta
resultado = num1 - num2; // 10

// Multiplicación
resultado = num1 * num2; // 600

resultado = num1 * 2; // 1.5

// División
resultado = num1 / 2; // 60

// Módulo (residuo)
resultado = num1 % num2; //10

// Pi
resultado = Math.PI; // 3.141592653589793

// Redondeo
resultado = Math.round(2.5); // 3
resultado = Math.round(2.4); // 2
resultado = Math.ceil(2.3); // 3 (Redondea siempre hacia arriba)
resultado = Math.floor(2.3); // 2 (Redondea siempre hacia abajo)

// Raíz cuadrada
resultado = Math.sqrt(144); // 12

// Número absoluto
resultado = Math.abs(num5); // 3 
resultado = Math.abs(-10); // 10

// Potencia
resultado = Math.pow(8,3); //512 (8^3)

// Número mínimo
resultado = Math.min(10,6,3,5,9,7,8); // 3

// Número máximo
resultado = Math.max(10,6,3,5,9,7,8); // 10

// Generar número aleatorio entre 0 y 1
resultado = Math.random(); // 0.734067......

// Número aleatorio entre 0 y 30
resultado = Math.floor(Math.random() * 30); // 7 13 25 ...


// Incrementos y decrementos
let puntaje;
puntaje = 10; 
puntaje++; // 10 (en la consola hay que volver a llamar la variable para que muestre el valor aumentado)

++puntaje; // 11 (Al ponerle ++ antes de la variable, se le asigna el valor antes de imprimirlo, y se muestra su valor incrementado de inmediato)

puntaje += 3; // 14

puntaje -= 10; // 4

// TIPOS DE DATOS
// Primitivos
let valor; // undefined
valor = undefined; // undefined
valor = null; // Object
valor = 'Cadena de texto'; // string
valor = '20'; // string
valor = 20; // number
valor = true; // boolean
valor = false; // boolean
valor = Symbol('simbolo'); // symbol

console.log(null == undefined) //true
console.log(null === undefined) // false

console.log(true == 'true') // false
console.log(true === 'true') // false


// De referencia
valor = [1,2,3,4]; 
console.log(typeof valor); // Object
console.log(valor); // Array

valor = {           // Object
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 35
};
console.log(typeof valor); // Object

valor = new Date(); 
console.log(typeof valor); // Object


// OPERADORES DE COMPARACIÓN

const numero1 = 20,
      numero2 = 50,
      numero3 = '20';

console.log(numero1 > numero2); // false
console.log(typeof(numero1 > numero2)); // boolean
console.log(numero1 < numero2); // true

// Comparador de igualdad
console.log(20 == 20); // true
console.log(20 == '20'); // true (Comparador == no es tan estricto, compara sólo el valor)
console.log(20 === '20'); // false (Comparador === es más estricto, compara el valor y el tipo de datos, es más recomendable usar este comparador, para ser más excato)
console.log(numero1 === parseInt(numero3)); // true

console.log(numero1 == numero3); // true
console.log(numero1 === numero3); // false

console.log(numero1 != numero2); // true
console.log(numero1 != numero3); // false
console.log(numero1 !== numero3); // true


console.log('hola' == ' hola'); // false

console.log('a' > 'b'); // false (Las letras mayúsculas tienen menor rango que las letras minúsculas, el rango va aumentando de la a a la z, siendo la z el de mayor valor)

console.log('Z' > 'a'); // false
console.log('z' > 'A'); // true

console.log(null == undefined); // true
console.log(null === undefined); // false

// Operador ternario
const autenticado = true;
console.log(autenticado ? 'Sí está autenticado' : 'No está autenticado'); // Sí está autenticado

// CONVERTIR STRINGS A NUMEROS

const valor1 = '50',
      valor2 = 10,
      valor3 = 'tres',
      valor4 = '20.2';

console.log(valor1 + valor2); // 5010
console.log(Number(valor1) + valor2); // 60
console.log(parseInt(valor1) + valor2); // 60
console.log(parseInt(valor4)); // 20 (Lo convierte en un entero)
console.log(parseFloat(valor4)); // 20.2 (Lo convierte en un número flotante)
console.log(parseInt(valor3)); // NaN (No es un número)

// Revisar si un número es entero
console.log(Number.isInteger(valor1)); // true
console.log(Number.isInteger(valor4)); // false

// OBJETOS
// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Acceder a los valores de un objeto
console.log(producto.nombre); // Monitor de 20 pulgadas
console.log(producto['nombre']); // Monitor de 20 pulgadas

// A los objetos se les puede reasignar o eliminar los valores de sus propiedades
// Agregar nuevas propiedades a un objeto
producto.imagen = 'imagen.jpg';

// Eliminar una propiedad
delete producto.disponible;

// Asignar valores de un objeto a una variable (forma antigua)
const nombre = producto.nombre;
console.log(nombre); // Monitor de 20 pulgadas

// Para que un objeto se comporte como una const (no se puedan cambiar sus propiedades), se debe poner 'use strict'; en la primera línea del código. El modo estricto evita el uso de malas prácticas

Object.freeze( producto ); // Evita modificación del objeto
producto.disponible = false;
console.log(producto); // Uncaught TypeError: Cannot assign to read only property 'disponible' of object '#<object>'

producto.imagen = imagen.jpg;
console.log(producto); // Uncaught TypeError: Cannot add property imagen, object is not extensible

delete producto.precio; 
console.log(producto); // Uncaught TypeError: Cannot delete property 'precio' of #<Object>

// Comprobar si el objeto está congelado
console.log(Object.isFrozen(producto)); // true

// Sellar un objeto, para poder modificar propiedades existentes, pero no deja agregar ni eliminar
Object.seal(producto);
producto.imagen = 'imagen.jpg'; 
console.log(producto); // Uncaught TypeError: Cannot add property imagen, object is not extensible
delete producto.precio; 
console.log(producto); // Uncaught TypeError: Cannot delete property 'precio' of #<Object>

// Comprobar si el objeto está sellado
console.log(Object.isSealed(producto)); // true

// Desestructuración de objetos (ES6), extrae una propiedad de un objeto y la convierte en una variable
const {nombre} = producto;
console.log(nombre); // Monitor de 20 pulgadas
const {precio} = producto; 
console.log(precio); // 300
let { nombre, precio, disponible } = producto; // Se crea 3 variables 
let { nombre, precio, disponible, noExiste } = producto; 
console.log(noExiste); // undefined

// Objeto anidado
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}

console.log(producto.informacion); // {peso: '1kg', medida: '1m'}
console.log(producto.informacion.peso); // 1kg
console.log(producto.informacion.medida); // 1m


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas: {
            peso: '1kg', 
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

// Extrayendo una propiedad que está dentro de un objeto anidado
const { nombre, informacion: { fabricacion, fabricacion: { pais } } } = producto;
console.log(nombre);
console.log(informacion); // {medidas: {...}, fabricacion: {...}}
console.log(fabricacion); // {pais: 'China'}
console.log(pais); // China

// Unir dos objetos 
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg', 
    medida: '1m'
}

const resultado = Object.assign(producto, medidas);
console.log(resultado); // {nombre: "Monitor de 20 pulgadas", precio: 300, disponible: true, peso: '1kg', medida: '1m'}

// SPREAD OPERATOR
const resultado2 = {...producto, ...medidas}
console.log(resultado2); // {nombre: "Monitor de 20 pulgadas", precio: 300, disponible: true, peso: '1kg', medida: '1m'}

// Funciones en objetos y acceder a sus valores 
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`) // this se refiere a las propiedades del objeto
    }
}

producto.mostrarInfo();


// OBJECT CONSTRUCTOR
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; 
    this.dosponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log(producto2); // Producto {nombre: 'Monitor de 24 pulgadas', precio: 500}

const producto3 = new Producto('Television', 100);
console.log(producto2); // Producto {nombre: 'Monitor de 24 pulgadas', precio: 500}

const producto = {
    nombre: 'Monitor de 24 pulgadas', 
    precio: 300, 
    disponible: true
}

// Object.keys: retorna las propiedades del objeto
console.log(Object.keys(producto)); // ['nombre', 'precio', 'disponible']

// Object.values: retorna los valores de las propiedades
console.log(Object.values(producto)); // ['Monitor de 20 pulgadas', 300, true]

// Object.entries: retorna
console.log(Object.entries(producto)); //[['nombre', 'Monitor de 24 pulgadas'], ['precio', 300], ['disponible', true]]

// ARRAYS
const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');

// Un arreglo puede contener de todo tipo de datos 
const deTodo = ['Hola', 10, true, 'si', null, {nombre: 'Juan', trabajo: 'programador'}];

// Como acceder a los elementos del array
console.log(numeros[0]); // 10
console.log(numeros[2]); // 30
console.log(numeros[20]); // undefined (elemento 20 no existe en el arreglo)
console.log(numeros[5][1]); // 2

// Recorrer un array
// Iterador for
for(let i=0; i < meses.length; i++) {
    console.log(meses[i]); // Enero Febrero Marzo Abril Mayo Junio
}

// Agregar nuevos valores a un array (Forma imperativa, modifica el array actual)
meses[0] = 'Nuevo mes'; // Reemplaza el primer elemento 'Enero' por 'Nuevo mes'
meses[7] = 'Ultimo mes'; // Agrega un elemento en la posición 7
meses[10] = 'Otro mes'; // Se salta la posición que no existe y crea la posición 10

// Agragar nuevo elemento en la última posición del array
meses.push('Agosto');

const carrito = [];

const producto = {
    nombre: 'Monitor de 30 pulgadas', 
    precio: 480
}

const producto2 = {
    nombre: 'Celular', 
    precio: 800
}

const producto4 = {
    nombre: 'Celular 2', 
    precio: 100
}

carrito.push(producto);
console.log(carrito); // {nombre: "Monitor de 30 pulgadas", precio: 480}

carrito.push(producto2);
carrito.push(producto4);

// Agregar elemento al inicio del arreglo con unshift
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);

// Agregar elementos con SPREAD OPERATOR (Forma declarativa, no modifica el array actual)
let resultado;
resultado = [...carrito, producto]; // Arrays originales no son modificados
resultado = [...resultado, producto2]; 
resultado = [producto, ...resultado]; 

// ELiminar elementos con del arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);
console.log(carrito); //[{nombre: 'Teclado'}, precio: 50}, {nombre: 'Celular', precio: 800}, {nombre: 'Monitor de 32 pulgadas', precio: 400}]

// Eliminar ultimo elemento
carrito.pop();
console.log(carrito); // [{nombre: 'Teclado'}, precio: 50}, {nombre: 'Celular', precio: 800}]

//Eliminar primer elemento
carrito.shift();
console.log(carrito); // [{nombre: 'Celular', precio: 800}]



// // // Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones:
// // // Para números divisibles por 3, imprime "Fizz" en vez del número
// // // Para números divisibles por 5 (pero no por 3), imprime "Buzz".
// // // Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los números que sean divisibles tanto por 3 como por 5 (y que siga imprimiendo "Fizz" o "Buzz" para números divisibles por sólo uno de ellos).


// // // CICLO FOR
// // // for(let i=1; i<=100; i++){
// // //     if(i%3 === 0 && i%5 === 0){
// // //       console.log("FizzBuzz");
// // //     }else if(i%3 === 0){
// // //       console.log("Fizz");  
// // //     }else if(i%5 === 0){
// // //       console.log("Buzz")
// // //     }else{
// // //       console.log(i);
// // //     }
// // //   }

// // // CICLO WHILE
// // // let i = 1;
// // // while (i <= 100) {

// // //     if (i % 3 === 0 && i % 5 === 0) {
// // //         console.log("FizzBuzz");
// // //     } else if (i % 3 === 0) {
// // //         console.log("Fizz");
// // //     } else if (i % 5 === 0) {
// // //         console.log("Buzz")
// // //     } else {
// // //         console.log(i);
// // //     }

// // //     i++;
// // // }

// // // DO WHILE

// // // let i = 1;
// // // do {
// // //     if (i % 3 === 0 && i % 5 === 0) {
// // //         console.log("FizzBuzz");
// // //     } else if (i % 3 === 0) {
// // //         console.log("Fizz");
// // //     } else if (i % 5 === 0) {
// // //         console.log("Buzz")
// // //     } else {
// // //         console.log(i);
// // //     }

// // //     i++;
// // // } while (i <= 100);


// // // Crea un programa que cree un string que represente una cuadrícula de 8x8, usando el salto de línea como separador. En cada posición de la cuadrícula debe haber un espacio o un carácter "#". Los caracteres deberían formar un tablero de ajedrez.

// // // Pasar ese string a console.log debería mostrar algo como esto:

// // //    # # # #
// // //   # # # #
// // //    # # # #
// // //   # # # #
// // //    # # # #
// // //   # # # #
// // //    # # # #
// // //   # # # #
// // // Cuando tengas un programa que genere este patrón, define una variable size = 8 y cambia el programa de tal manera que trabaje para cualquier tamaño, que sea proporcionado por un prompt() produciendo una cuadrícula del ancho y alto dado.

// // let size = parseInt(prompt("Introduce un número par"));



// // // for (let i = 1; i <= numero; i++) {
// // //     if (i % 2 != 0) {
// // //         console.log(" # # # #");
// // //     } else {
// // //         console.log("# # # # ");
// // //     }
// // // }

// // let result = '';

// // for (let row = 1; row <= size; row++) {
// //     for (let column = 1; column <= size; column++) {

// //         if ((column + row) % 2 === 0) {
// //             result += ' ';
// //         } else {
// //             result += '#';
// //         }

// //     }

// //     result += '\n'; // Se agrega un enter al finalizar cada fila

// // }

// // console.log(result);


// // // FUNCIONES

// // // Función con keyword function
// // // const square = function (num) {
// // //     return num * num;
// // // };

// // // Función flecha de una sola sola expresión (retorno implícito)
// // // const square = num => num * num;

// // // Si una función no especifica el valor de retorno, entonces, la función retorna undefined.
// // // El keyword return sin una expresión después de él, también hará que la función devuelva undefined.

// // // const square = function (num) {
// // //     return num * num;
// // //   };

// // // console.log('El cuadrado de 12 es ' + square(12));

// // // // Función sin parámetro

// // // const makeNoise = function () {
// // //     console.log('Pling!');
// // //   };

// // // makeNoise();


// // // // Función con 2 parámetros

// // // const power = function (base, exponent) {
// // //     let result = 1;
// // //     for (let count = 0; count < exponent; count++) {
// // //       result *= base;
// // //     }
// // //     return result;
// // //   };

// // //   console.log(power(2, 10));

// // var drawMultipleTimes = function(howManyTimes, whatToDraw) {

// //     for (var i = 1; i <= howManyTimes; i++) {
// //         console.log(i + ' ' + whatToDraw);
// //     }

// // }

// // drawMultipleTimes(8, '<3');
// // drawMultipleTimes(5, 'Hola');
// // drawMultipleTimes(3, 'Chao');

// // Uso de return: Una forma común de utilizar return es para salir de la función de manera temprana si alguno de los argumentos brindados no son válidos; es decir, si no son el tipo de argumentos que la función necesita para funcionar correctamente. Por ejemplo, la siguiente función devuelve una cadena que indica el quinto caracter de tu nombre. Si el nombre pasado a la función tiene menos de cinco caracteres, la función utiliza return para dejar la función inmediatamente. Esto significa que la declaración de devolución al final, que te dice la quinta letra de tu nombre, nunca se ejecuta.

// // const fifthLetter = function(name) {
// //     if (name.length < 5) { // El código no se ejecuta en caso de que el nombre tenga menos de 5 letras.
// //         return;
// //     }
// //     console.log('La quinta letra de tu nombre es ' + name[4] + '.');
// // };

// // fifthLetter('Ana'); // Aquí el código no se ejecuta, ya que en este caso el nombre tiene menos de 5 letras



// // Con el uso de multiples return dentro del if, se evita usar if... else, y así se asegura de que sólo una de las tres condiciones se ejecute.

// // const medalForScore = function (score) {
// //     if (score < 3) {
// //       return 'Bronze';
// //     }
// //     if (score < 7) {
// //       return 'Silver';
// //     }
// //     return 'Gold';
// //   };


// // 1. Funciones matemáticas
// // Crea dos funciones, add y multiply. Cada una debe tomar dos argumentos. La función add debe sumar sus argumentos y devolver el resultado. La funcion multiply debe multiplicar sus argumentos. Usando solamente estas dos funciones, resuelva este simple problema matemático: 36325 * (9824 + 777).

// // const add = (num1, num2) => {
// //     console.log(num1 + num2);
// // }

// // add(3, 4);


// // const multiply = (num_1, num_2) => {
// //     console.log(num_1 * num_2);
// // }

// // multiply(4, 5)


// // const ecuation = (multiply, num1, num2) => {
// //     console.log(multiply * (num1 + num2));
// // }

// // ecuation(36235, 9824, 777);



// // Crea una función que invierta el orden de los elementos de un array. Completa este reto de dos maneras: en una, el array invertido es un nuevo array; en la segunda, modifica el mismo array que se proporciona como argumento. Investiga sobre el método reverse. ¿Qué puedes concluir?

// // let vowels = ['a', 'e', 'i', 'o', 'u'];

// // let numbers = [1, 2, 3, 4, 5];

// // const reverse = (array) => {

// //     for (let i = 0; i < array.length; i++) {
// //         let item = array.pop();
// //         array.splice(i, 0, item);

// //     }

// //     return array;
// // }

// // console.log(reverse(vowels));
// // console.log(vowels);

// // console.log(reverse(numbers));
// // console.log(numbers);

// // Método reverse, retorna el mismo array, pero modificado y con sus elementos invertidos

// // console.log(vowels.reverse());
// // console.log(vowels);


// // Crea una función que busque un elemento en un array, devolviendo su posición (index) e imprima el valor de este índice en la consola. Tip: utiliza el algoritmo de linear search. 
// // Algoritmo lineal: Comparar el elemento que buscas con todos los elementos del array, itera los elementos del array hasta que encuentre el valor buscado, retorna el índice en el cual se encuentra el elemento.

// // const search = (array, element) => {

// //     for (let i = 0; i < array.length; i++) {

// //         if (array[i] === element) {
// //             return i;
// //         }

// //     }

// // }

// // console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 7));



// // Algoritmo de búsqueda binaria: Ordena los elementos del array de menor a mayor y ubica el elemento que se encuentra a la mitad y lo compara con el que se está buscando. Si el elemento buscado es menor que el elemento de la mitad, se trabajará con el array que se forme desde la mitad hacia la izquierda del array. Si es mayor, se trabajará con la parte izquierda.

// // Método map

// // var almuerzos = [
// //     { principal: 'arepa', postre: 'helado' },
// //     { principal: 'tacos', postre: 'torta' },
// //     { principal: 'pizza', postre: 'galletas' },
// //     { principal: 'sushi', postre: 'mousse' },
// //     { principal: 'arepa', postre: 'golfeados' },
// //     { principal: 'arepa', postre: 'churros' }

// // ];

// // obtener arreglo con plato principal usando ciclo for

// // var platosPrincipales = [];

// // for (var i = 0; i < almuerzos.length; i++) {
// //     platosPrincipales.push(almuerzos[i].principal);
// //     console.log(platosPrincipales);
// // } // Retorna arreglo ['arepa', 'tacos', 'pizza', 'sushi', 'arepa', 'arepa']

// // Con método map. El parámetro del método map es una función anónima, la cual recibe como parámetro un elemento del arreglo de objetos, en este caso 'almuerzo'. Este método no modifica el arreglo original, se crea un nuevo array.

// // var platosPrincipales = almuerzos.map(function(almuerzo) {
// //     return almuerzo.principal; // Le indico la propiedad a la que quiero acceder
// // })

// // console.log(platosPrincipales);
// // console.log(almuerzos);


// // Método FILTER: permite filtrar las entradas en un array. Crear una lista con los postres cuando el cliente pide una arepa. Se crea un nuevo array, el original queda intacto

// // con ciclo for

// // var postresArepas = [];

// // for (var i = 0; i < almuerzos.length; i++) {
// //     if (almuerzos[i].principal === 'arepa') {
// //         postresArepas.push(almuerzos[i].postre);
// //     }
// // }

// // Con método FILTER

// // var postresArepas = almuerzos
// //     .filter(function(almuerzo) {
// //         return almuerzo.principal === 'arepa'; // Retorna true, porque la condición pasa el filtro ( mostraría en consola los objetos que tienen el elemento 'arepa')
// //     })
// //     .map(function(almuerzo) {
// //         return almuerzo.postre;
// //     });



// // console.log(postresArepas);

// // // Queremos saber cuántas arepas han encargado los clientes
// // // var cantidadArepas = 0;
// // // for (var i = 0; i < almuerzos.length; i++) {
// // //     if (almuerzos[i].principal === 'arepa') {
// // //         cantidadArepas++;
// // //     }
// // // }

// // // console.log(cantidadArepas);

// // // Método reduce: simplifica el array en un solo resultado
// // var cantidadArepas = almuerzos.reduce(function(contador, almuerzo) {

// //     if (almuerzo.principal === 'arepa') {
// //         return contador + 1;
// //     } else {
// //         return contador;
// //     }

// // }, 0); // El 0 es el primer valor que le asignamos a la variable contador

// // console.log(cantidadArepas);


// // // Método FIND: retorna el primer elemento donde se cumpla con la condición que especifiquemos. Si el elemento no existe retorna undefined

// // const productos = [
// //     { nombre: 'OrdenadorPC', precio: 699, departamento: 'Tecnología' },
// //     { nombre: 'Sartenes verdes', precio: 39, departamento: 'Hogar' },
// //     { nombre: 'Reloj calculadora', precio: 25, departamento: 'Tecnología' },
// //     { nombre: 'Máquina palomitas', precio: 33, departamento: 'Hogar' },
// //     { nombre: 'Mueble TV', precio: 120, departamento: 'Hogar' },
// //     { nombre: 'Tuppers', precio: 10, departamento: 'Hogar' }

// // ]

// // const muebleTV = productos.find(item => {
// //     //return item.nombre === 'Mueble TV'
// //     return (/Mueble/g).test(item.nombre) // Método test, iguala una expresión regular con el nombre de elemento que estamos buscando
// // })

// // console.log(muebleTV);

// // // Método MAP

// // const productosIva = productos.map(item => {
// //     let newPrecio = item.precio + item.precio * 0.21
// //     return {...item, precio: newPrecio } // Se crea un nuevo objeto con el precio cambiado ...item => todos los elementos de item
// // })

// // console.log(productos);
// // console.log(productosIva);

// // // Método FILTER: filtrar departamentos que contengan 'Hogar'

// // const productosHogar = productos.filter(item => item.departamento === 'Hogar')

// // console.log(productosHogar);


// // Método EVERY return true si la condición se cumple en todos los elementos del array

// // const check = productos.every(item => item.precio >= 100)

// // console.log(check); // false


// // // Método SOME: si uno de los elementos cumple con la condición, devuelve true
// // const alguno = productos.some(item => item.precio >= 500)

// // console.log(alguno);

// // Método REDUCE: suma de elementos dentro del array

// // const precioTotal = productos.reduce((total, item) => {
// //     return total + item.precio
// // }, 0)

// // console.log(precioTotal);

// // // forEach: ejecuta la función para cada uno de los elementos del array. No se crea una variable

// // const arr = ['a', 'b', 'c', 'd', 'e'];

// // arr.forEach(function(elem) {
// //     if (elem === 'c') {
// //         console.log('Hola soy C');
// //     }
// // });

// // console.log(arr);

// // // For in: sirve para obtener datos de un array

// // var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// // for (var key in dias) {
// //     console.log(key); // Imprime en consola los índices correspondientes a cada elemento del array
// //     console.log(dias[key]); // Obtiene el dato que se almacenado en la posición [key] del arreglo dias

// // }

// // // forEach

// // dias.forEach(function(element, i) {
// //     console.log(i + " " + element);
// // }, this);


// // // OBJETOS


// // const michelle = {
// //     name: 'Michelle',
// //     points: 2000,
// //     isActive: true,
// //     courses: ['Intro JS', 'JS avanzado', 'JS master']
// // };

// // const alexandra = {
// //     name: 'Alexandra',
// //     points: 4100,
// //     isActive: true,
// //     courses: ['Intro JS', 'Intro UX', 'UX master']
// // };

// // const andrea = {
// //     name: 'Andrea',
// //     points: 800,
// //     isActive: false,
// //     courses: ['Intro JS', 'JS avanzado']
// // };

// // const students = [michelle, alexandra, andrea];

// // console.log(students);

// // Obtener:
// // Los nombres de todas las estudiantes activas
// // for (var i = 0; i < students.length; i++) {
// //     if (students[i].isActive) {
// //         console.log(students[i].name);
// //     }
// // }

// // Los puntos totales de la clase

// // var total = 0;

// // for (var i = 0; i < students.length; i++) {

// //     total += students[i].points;
// // }
// // console.log(total);


// // Los nombres de las estudiantes que han llevado el curso de 'JS avanzado'

// // for (var i = 0; i < students.length; i++) {
// //     var studentsCourses = students[i].courses;

// //     for (var j = 0; j < studentsCourses.length; j++) {
// //         if (studentsCourses[j] === 'JS avanzado') {
// //             console.log(students[i].name);
// //         }
// //     }
// // }

// // Ciclo for of

// // var animales = ["salamandra", "aye aye", "basilisco", "pangolín", "cougar"];

// // // for(var i = 0; i<animales.lenght; i++){
// // //    console.log(animales[i])
// // // }

// // for (let animal of animales) {
// //     console.log(animal);
// // }


// // Escribe una función que tome un array 2D y devuelva un objeto con cada par de elementos en el array como un par key-value. Por ejemplo:

// // Input:
// // [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

// // Output:
// // {
// //   make : 'Ford',
// //   model : 'Mustang',
// //   year : 1964
// // }


// // const car = [
// //     ['brand', 'Ford'],
// //     // (0,0)   (0,1)
// //     ['model', 'Mustang'],
// //     // (1,0)   (1,1)
// //     ['year', 1964]
// //     // (2,0)   (2,1)
// // ];

// // let obj = {};

// // Asignación de propiedades y valores usando los índices del array 2D
// // obj[car[0][0]] = car[0][1];
// // obj[car[1][0]] = car[1][1];
// // obj[car[2][0]] = car[2][1];


// // const arrayToObject = (array2d) => {

// //     let newObject = {};

// //     for (let i = 0; i < array2d.length; i++) {

// //         newObject[array2d[i][0]] = array2d[i][1];

// //     }

// //     return newObject;
// // }

// // console.log(arrayToObject(car));

// // Object to array
// // Método Object.keys: permite acceder sólo a las propiedades de un objeto:
// // var student = {
// //     name: 'teresa',
// //     age: 20
// // }
// // Object.keys(student)=['name','age']

// // const car = {
// //     brand: 'Ford',
// //     model: 'Mustang',
// //     year: 1964,
// //     color: 'red'
// // };


// // var properties = Object.keys(car);
// // console.log(properties); // ['brand', 'model', 'year', 'color']

// // var newArray = [
// //     ['brand', 'Ford'],
// //     // (0,0)   (0,1)
// //     ['model', 'Mustang'],
// //     // (1,0)   (1,1)
// //     ['year', 1964],
// //     // (2,0) (2,1)
// //     ['color', 'red']
// //     // (3,0)  (3,1)
// // ]

// // var newArray= [
// //     [properties[0], car[properties[0]]],
// //     [properties[1], car[properties[1]]],
// //     [properties[2], car[properties[2]]],
// //     [properties[3], car[properties[3]]]

// // ];

// // const objectToArray = (object) => {

// //     let newArray = [];
// //     let properties = Object.keys(object);

// //     for (let i = 0; i < Object.keys(car).length; i++) {

// //         newArray.push([properties[i], object[properties[i]]]);

// //     }

// //     return newArray;
// // }

// // console.log(objectToArray(car));





// // STRINGS

// // Implementa una función que capitalice la primera y última letra de un string.

// // Sigue los pasos a continuación para que completes el programa.

// // Seleccione la primera y ultima letra y utilice la función String.prototype.toUpperCase.
// // Componer la nueva cadena y retornarla.


// // const firstAndLastToUpper = (str) => {

// //     let string = '""';

// //     let firstIndex = str.charAt(0).toUpperCase();

// //     let lastIndex = str.charAt(str.length - 1).toUpperCase();

// //     let substring = str.slice(1, str.length - 1);

// //     if (str) {

// //         return `${firstIndex}${substring}${lastIndex}`;

// //     } else {

// //         return string;
// //     }

// // };

// // console.log(firstAndLastToUpper(''));

// // let arr = [10, 20, 30, 40, 50];
// // console.log(arr.indexOf(10));
// // console.log(arr.indexOf(20));
// // console.log(arr.indexOf(30));
// // console.log(arr.indexOf(40));


// // let mensaje = 'Aprendiendo Javascript, CSS, HTML, para ser Frontend';

// // console.log(mensaje.indexOf('Javascript')); // Retorna 12, ya que en el index numero 12 de la cadena de texto se encuentra esa palabra
// // console.log(mensaje.indexOf('PHP')); // Retorna -1, ya que esa palabra no se encuentra en esa cadena de texto

// // console.log(mensaje.substring(3, 21)); // endiendo Javascript

// // console.log(mensaje.slice(-30)); // Retorna t, CSS, HTML, para ser Frontend   ya que cuenta desde atrás hacia adelante

// // console.log(mensaje.slice(0, 11)); // Aprendiendo

// // console.log(mensaje.split(' ')); // Divide el mensaje en un arreglo y lo corta adonde encuentre un espacio

// // console.log(mensaje.split(', ')); // Divide el mensaje donde encuentre una coma

// // console.log(mensaje.replace('CSS', 'PHP')); // Reemplaza CSS por PHP

// // console.log(mensaje.includes('CSS')); // Regresa true si la palabra se encuentra dentro de la cadena de texto

// // let tecnologia = 'Javascript' + ' ';

// // console.log(tecnologia.repeat(19)); // Repite el string 10 veces


// // // NUMEROS

// // const numero1 = 30,
// //     numero2 = 20,
// //     numero3 = 20.20,
// //     numero4 = 0.1020,
// //     numero5 = -3;

// // let resultado;
// // // suma
// // resultado = numero1 + numero2;
// // // resta
// // resultado = numero1 - numero2;
// // // multiplicación
// // resultado = numero1 * numero2;
// // // división
// // resultado = numero1 / numero2;
// // // Modulo (residuo)
// // resultado = numero1 % numero2;
// // // Pi
// // resultado = Math.PI;

// // // redondeo
// // resultado = Math.round(2.5); // retorna 3

// // resultado = Math.floor(2.5); // Retorna 2, redondea hacia abajo

// // resultado = Math.ceil(2.5); // REtorna 3, redondea hacia arriba

// // // Número absoluto
// // resultado = Math.abs(numero5); // 3 = |-3|

// // // Potencia
// // resultado = Math.pow(8, 3); // regresa resultado de 8^3

// // // raíz cuadrada
// // resultado = Math.sqrt(144); // 12

// // // Mínimo
// // resultado = Math.min(3, 6, 5, 1, 9, 7, 8); // Retorna el número menor de la secuencia --> 1

// // // Máximo
// // resultado = Math.max(3, 6, 5, 1, 9, 7, 8); // 9

// // // Aleatorio
// // resultado = Math.random(); // Arroja números decimales de manera aleatoria


// // resultado = (10 + 20) * 5;


// // console.log(resultado);


// // // undefined vs null

// // let valor;

// // console.log(typeof valor); // retorna undefined ya que la variable está inicializada, pero no está declarada con un valor definido
// // console.log(valor); // undefined


// // let nombre = null;

// // console.log(typeof nombre); // retorna object
// // console.log(nombre); // Retorna null, ya que la variable está declarad con valor null

// // let arr1 = [1, 2, 3, 4, 5];
// // console.log(typeof arr); // object


// // let fecha = new Date();
// // console.log(typeof fecha); // object

// // // symbol

// // valor = Symbol('simbolo');


// // // OPERADORES DE COMPARACIÓN

// // const num1 = 20; // El simbolo = se usa para asignar un valor
// // const num2 = 50;
// // const num3 = '20';


// // console.log(num1 > num2); // false
// // console.log(num1 < num2); // true
// // console.log(20 == 20); // true 
// // console.log(20 == '20'); // true, el símbolo == sólo compara si el valor de ambos números es igual (comparador no muy estricto).
// // console.log(20 === '20'); // false, === compara el valor y el tipo de dato de ambos números (comparador estricto), deben ser idénticos para que retorne true
// // console.log(typeof 20); // number
// // console.log(typeof '20'); // string
// // console.log(2 == 3); // false
// // console.log(2 != 3); // true
// // console.log('hola' == ' hola'); // false
// // console.log('a' > 'b'); // false, A es la letra de menor valor y z es la que tiene mayor valor
// // console.log('Z' > 'a'); // false
// // console.log('z' > 'A'); // true
// // console.log(null == undefined); // true, ya que ambas no tienen valores
// // console.log(null === undefined); // false, ya que son tipo de dato distinto


// // // Convertir string a número

// // const number1 = "50";
// // number2 = 10;
// // number3 = 'tres';

// // console.log("Java" + "Script"); // JavaScript
// // console.log(number1 + number2); // 5010 --> concatena número y string
// // console.log(number1 - number2); // 40 --> con el signo de resta no concatena
// // console.log(Number(number1) + number2); // 60
// // console.log(parseInt(number1) + number2); // 60
// // console.log(typeof Number(number1)); // number

// // console.log(typeof Number(number3)); // number
// // console.log(Number(number1)); // NaN --> Not a Number


// // let dato;
// // dato = Number("20"); // 20
// // dato = Number('20.10931'); // 20.10931
// // dato = Number(true); // 1
// // dato = Number(false); // 0
// // dato = Number(null); // 0
// // dato = Number(undefined); // NaN
// // dato = Number('Hola mundo'); // NaN
// // dato = Number([1, 2, 3, 4, 5]); // NaN

// // dato = parseInt('100'); // 100
// // dato = parseInt('100.2030'); // 100 --> regresa sólo el entero

// // dato = parseFLoat('100'); // 100
// // dato = parseFLoat('100.2030'); // 100.203

// // let number4 = '1323546';

// // console.log(number4.toFixed()); // Error


// // let number5 = 1323546;
// // console.log(number5.toFixed()); // 1323546

// // let number6 = 1323546.9841265;
// // console.log(number6.toFixed()); // 1323547
// // console.log(number6.toFixed(3)); // 1323546.981 --> el número dentro del paréntesis indica cuántos decimales quiero mostrar, sólo sirve para números

// // let numero7 = '18965224';

// // console.log(parseFloat(numero7.toFixed(4))); // 18965224.0000



// // // Convertir número a string

// // let codigoPostal = '18035';
// // let codigoPostal1 = 18035;

// // console.log(codigoPostal.length); // 5
// // console.log(codigoPostal1.length); // undefined, método length sólo sirve para cadenas de texto

// // codigoPostal1 = String(codigoPostal1);
// // console.log(codigoPostal1); // 5


// // let dato1;

// // dato1 = true;

// // console.log(dato1.length); // undefined, ya que length sólo sirve para strings, no para booleanos

// // dato1 = String(dato1);

// // console.log(dato1); // true
// // console.log(dato1.length); // 4 --> 4 letras
// // console.log(typeof dato1); // string



// // // De arreglo a string

// // let arr2 = [1, 2, 3];

// // console.log(arr2); // (3) [1, 2, 3]
// // console.log(arr2.length); // 3
// // console.log(typeof arr2); // object


// // arr2 = String([1, 2, 3]);

// // console.log(arr2); // 1,2,3
// // console.log(arr2.length); // 5 --> cuenta los números y las comas
// // console.log(typeof arr2); // string


// // // toString();

// // dato = 20;
// // dato = dato.toString();

// // console.log(dato); // 20
// // console.log(dato.length); // 2
// // console.log(typeof dato); // string


// // dato = null;
// // dato = dato.toString();

// // console.log(dato); // Error, null no se puede convertir en string, ya que es un valor que no existe, lo mismo pasa con undefined.


// // String template

// const producto1 = 'Pizza',
//     precio1 = 30,
//     producto2 = 'Hamburguesa',
//     precio2 = 40;

// let html;

// // Forma antigua
// html = '<ul>' +
//     '<li>Orden: ' + producto1 + '</li>' +
//     '<li>Precio: ' + precio1 + '</li>' +
//     '<li>Orden: ' + producto2 + '</li>' +
//     '<li>Precio: ' + precio2 + '</li>' +
//     '<li>Total: ' + (precio1 + precio2) + '</li>' +
//     '</ul>';


// // Template literals, pueden tener funciones en sus templates
// html = `
//     <ul>
//         <li> Orden: ${producto1} </li>
//         <li> Precio: ${precio1}</li>
//         <li> Orden: ${producto2} </li>
//         <li> Precio: ${precio2}</li>
//         <li> Total: ${total(precio1, precio2)}</li>
//     </ul>`;

// function total(precio1, precio2) {
//     return precio1 + precio2;
// }

// document.getElementById('app').innerHTML = html;

// console.log(html);


// // ARREGLOS

// const numeros = [10, 20, 30, 40, 50];

// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril'); // new Array() es lo mismo que usar corchetes

// const mezclado = ['Hola', 20, true, null, false, undefined];

// console.log(meses.length); // 4

// console.log(Array.isArray(meses)); // true --> Comprueba si es un arreglo

// let nombre = 'Juan';

// console.log(Array.isArray(nombre)); // false

// console.log(meses[1]); // Febrero

// console.log(meses[4]); // undefined --> El índice n4 no existe


// // Agregando elemento al final del arreglo
// meses[4] = 'Mayo'; // Se puede modificar sólo un elemento del arreglo, no el arreglo completo (no se pueden reasignar sus valores cuando está con const, sólo se puede reescribir el arreglo completo si está declarado como let)
// meses.push('Junio');


// // Encontrar elemento en el arreglo
// console.log(meses.indexOf('Abril')); // 3 --> método indexOf devuelve posición donde se encuentra el elemento

// // Añadir elemento al inicio del arreglo
// meses.unshift('Mes 0');

// // Eliminar primer elemento del arreglo
// meses.shift();

// // Eliminar el ú,ltimo elemento del arreglo
// meses.pop();

// // Invertir orden de los elementos
// meses.reverse();

// // QUitar un rango del arreglo
// meses.splice(2, 1); // El 2 indica el índice a partir del cual quiero quitar, el 1 indica cuántos elementos quiero quitar

// // Unir un arreglo con otro
// let arreglo1 = [1, 2, 3],
//     arreglo2 = [9, 8, 7];

// console.log(arreglo1.concat(arreglo2)); // [1,2,3,9,8,7]


// // Ordenar un arreglo (con strings)
// const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];

// console.log(frutas.sort()); // ['Fresa', 'Manzana', 'Naranja', 'Platano']

// // Ordenar arreglo con números

// arreglo1 = [3, 9, 91, 92, 23, 45, 21, 56, 1, 100, 10];

// arreglo1.sort(function(x, y) {
//     return x - y;
// });

// console.log(arreglo1); // [1,3,9,10,21,23,45,56,91,92,100]


// // OBJETOS

// const persona = {
//     nombre: 'Miguel',
//     apellido: 'Martinez',
//     profesion: 'Diseñador gráfico',
//     email: 'correo@correo.com',
//     edad: 20,
//     musica: ['trance', 'rock', 'grunge'],
//     hogar: {
//         ciudad: 'Guadalajara',
//         pais: 'Mexico'
//     },
//     nacimiento: function() {
//         return new Date().getFullYear() - this.edad; // Función dentro de un objeto, se conoce como método. Para acceder a una propiedad dentro del objeto, se usa la palabra this, seguido de un punto y el nombre de la propiedad
//     }
// }

// console.log(persona.nombre); // Miguel
// console.log(persona.edad); // 20
// console.log(persona.musica); // (3) ["trance", "rock", "grunge"])

// console.log(persona.musica[0]); // trance

// persona.musica.push('alternativo');
// console.log(persona.musica); // (4) ["trance", "rock", "grunge", "alternativo"])

// console.log(persona.hogar); // {ciudad: "Guadalajara", pais: "Mexico"}
// console.log(persona.hogar.ciudad); // Guadalajara

// // Segunda forma para acceder a un objeto (no es muy usada)

// console.log(persona['nombre']); // Miguel
// console.log(persona['hogar']['pais']); // Mexico

// console.log(persona.nacimiento()); // 1998


// // ARREGLO DE OBJETOS

// const autos = [
//     { modelo: 'Mustang', motor: 6.2 },
//     { modelo: 'Camaro', motor: 6.1 },
//     { modelo: 'Challenger', motor: 6.3 }
// ]

// console.log(autos[0].modelo); // Mustang
// console.log(autos.length); // 3

// for (let i = 0; i < autos.length; i++) {
//     console.log(autos[i].modelo); // Mustang Camaro Challenger
//     console.log(autos[i].modelo); // 6.2 6.1 6.3
//     console.log(`${autos[i].modelo} ${autos[i].motor}`); // Mustang 6.2  Camaro 6.1  Challenger 6.3
// }


// autos[0].modelo = 'Audi';

// console.log(autos); //  0: { modelo: 'Audi', motor: 6.2 } 1: { modelo: 'Camaro', motor: 6.1 } 2: { modelo: 'Challenger', motor: 6.3 }


// // FUNCIONES
// // Function delaration
// // Creando función
// function saludar() {
//     console.log('Hola Miguel');
// }

// // Invocando función para que se muestre el mensaje en la consola
// saludar();


// function saludo(nombre) {
//     console.log(`Hola ${nombre}`);
// }

// saludo('Alma'); // Hola Alma



// function sumar(a, b) {
//     console.log(a + b);
// }

// sumar(1, 2); // 3
// sumar(4, 3); // 7


// // Usando return
// function sumar(a, b) {
//     return a + b;
// }

// let suma;

// suma = sumar(1, 2);

// console.log(suma); // 3

// suma = sumar(5);
// console.log(suma); // NaN, se deben poner los 2 parámetros



// function saludar(nombre) {
//     return `hola ${nombre}`;
// }

// let saludo1;

// saludo1 = saludar();
// console.log(saludo); // Hola undefined

// saludo1 = saludar('Andrea');
// console.log(saludo1); // Hola Andrea



// function saludar2(nombre = 'visitante') { // parámetro por defecto
//     // if(typeof nombre === 'undefined'){
//     //     nombre = 'visitante';
//     // }
//     return `hola ${nombre}`;

// }

// let saludo2;

// saludo2 = saludar2('Carolina');
// console.log(saludo); // Hola Carolina

// saludo2 = saludar2();
// console.log(saludar2); // Hola visitante


// // Function expression

// const suma3 = function(a, b) {
//     return a + b;
// }

// console.log(suma3(2, 3)); // 5
// console.log(suma3(6, 3)); // 9
// console.log(suma3(5)); // NaN
// console.log(suma3('coro')); // undefined

// const suma4 = function(a = 3, b = 4) {
//     return a + b;
// };

// console.log(suma4(1, 2)); // 3
// console.log(suma4(5)); // 9 --> El segundo parámetro está ausente, por lo tanto toma el valor de b, por defecto


// const saludar3 = function(nombre = 'Visitante', edad = 20, trabajo = 'Desarrollador web') {
//     return `hola, tienes ${edad} años, tu profesión es ${trabajo}, y te llamas ${nombre}.`;
// };

// console.log(saludar3('Juan')); // hola, tienes 20 años, tu profesión es Desarrollador web, y te llamas Juan.



// // Funciones IIFE, funciones que se declaran y se invocan inmediatamente

// (function(tecnologia) {
//     console.log(`Aprendiendo ${tecnologia}`); // Aprendiendo JavaScript
// })('JavaScript');


// // Métodos de propiedad: Las funciones que se crean dentro de un objeto se conocen como métodos, esto permite tener los métodos de un objeto agrupados

// const musica = {
//     reproducir: function(id) {
//         console.log(`Reproduciendo Canción con el ID: ${id}`);
//     },
//     pausar: function() {
//         console.log(`Pause a la Música`);
//     }
// }


// musica.reproducir(30);
// musica.pausar();

// // Los métodos también pueden guardarse/crearse fuera del objeto  --> nombreObjeto.metodo = function(){ codigoAEjecutar}
// musica.borrar = function(id) {
//     console.log(`Borrando la canción con el ID: ${id}`);
// }

// musica.borrar(2);


// // Manejando errores con Try Catch, se usa para probar funciones que van a traer datos, no se recomienda para agregar una clase o para insertar algo en el Html

// // Función que no existe
// try {
//     algo(); // Si existe la función, se ejecuta
// } catch (error) {
//     console.log(error); // Si no existe la función, va marcar error... --> ReferenceError: algo is not defined
// } finally {
//     console.log('No le importa, ejecútalo de todos modos'); // Exista o no la función, se va a ejecutar igual
// }

// obtenerClientes(); // ...Pero la siguiente función se seguirá ejecutando


// // La función se puede llamar antes de ser creada, o después, da lo mismo el orden
// obtenerClientes();

// function obtenerClientes() {
//     console.log('Descargando...');

//     setTimeout(function() {
//         console.log('Completo');
//     }, 3000);
// }


// // En Javascript existe un objeto llamado Date

// const diaHoy = new Date(); // La palabra new es para instanciar el objeto Date(); new Date siempre va a regresar la fecha actual.

// console.log(diaHoy); // Thu Dec 19 2019 8:39:00....

// // Fecha específica Mes, Día, Año

// let navidad2017 = new Date('12-25-2017');

// console.log(navidad2017); // Mon Dec 25 2017 00:00:00 GMT-0600


// // Al crear el objeto new Date() tenemos acceso a estos métodos
// // Obtener el mes de la fecha actual

// let valor;

// valor = diaHoy.getMonth(); // Comienza a contar los meses desde 0, como un arreglo--> December = 11

// // Obtener día actual, no empieza desde 0
// valor = diaHoy.getDate(); // 19
// valor = diaHoy.getDay(); // 19


// // Obtener año actual
// valor = diaHoy.getFullYear(); // 2019


// // Minutos 
// valor = diaHoy.getMinutes(); // 39

// // Hora
// valor = diaHoy.getHours(); // 8

// // Milisegundos desde 1970
// valor = diaHoy.getTime();

// // Modificar el año con método set
// valor = diaHoy.setFullYear(2016);
// valor = diaHoy.getFullYear(); // 2016


// console.log(valor);


// // ESTRUCTURAS DE CONTROL

// const edad = 18;

// if (edad != 18) {
//     console.log('Si puedes entrar al sitio');
// } else {
//     console.log('No puedes entrar al sitio');
// }


// let puntaje;

// if (puntaje) {
//     console.log(`El puntaje fue de ${puntaje}`);
// } else {
//     console.log(`No hay puntaje`); // Se ejecuta este bloque
// }

// console.log(puntaje); // udefined (variable no está inicializada)


// if (typeof puntaje != 'undefined') {
//     console.log(`El puntaje fue de ${puntaje}`);
// } else {
//     console.log(`No hay puntaje`); // Se ejecuta este bloque
// }


// let efectivo = 500;
// let totalCarrito = 300;

// if (efectivo > totalCarrito) {
//     console.log('Pago correcto');
// } else {
//     console.log('Fondos insuficientes');
// }


// // ELSE IF, para más de 2 condiciones

// let horaActual = 20;

// if (horaActual > 0 && horaActual <= 11) {
//     console.log('Buenos días');
// } else if (horaActual > 11 && horaActual <= 20) {
//     console.log('Buenas tardes');
// } else if (horaActual > 20 && horaActual <= 24) {
//     console.log('Buenas noches');
// } else {
//     console.log('Hora no válida');
// }


// let puntaje1 = 100;

// if (puntaje1 < 150) {
//     console.log('Puntaje < 150');
// } else if (puntaje1 < 200) {
//     console.log('Puntaje < 200');
// } // Ambas condiciones se cumplen, pero se ejecuta la primera


// // Usando operador or ||
// let efectivo1 = 300,
//     credito = 700,
//     disponible = efectivo1 + credito,
//     totalCarrito1 = 500;


// if (totalCarrito1 < efectivo1 || totalCarrito1 < credito) { // Chequea si se cumple uno u otra condición
//     console.log('Puedo pagar');
// } else if (totalCarrito1 < disponible) {
//     console.log('Pagué con ambos');
// } else {
//     console.log('No puedo pagar');
// }


// // Ternario

// const logueado = true;

// console.log(logueado === true ? 'Sí se logueó' : 'No se logueó')
//     //          condición        if(si se cumple)  else(si no se cumple)



// // SWITCH CASE: permite tener una mejor estructura para chequear múltiples condiciones

// const metodoPago = 'efectivo';

// switch (metodoPago) {
//     case 'efectivo': // Condición que quiero comprobar
//         console.log(`El usuario agó con ${metodoPago}`);
//         break;

//     case 'cheque':
//         console.log(`El usuario agó con ${metodoPago}`);
//         break;

//     case 'tarjeta':
//         console.log(`El usuario agó con ${metodoPago}`);
//         break;

//     default: // En caso de que ninguna de las tres condiciones se cumpla
//         console.log('Método de pago no soportado');
//         break;
// }


// let mes;

// switch (new Date().getMonth()) {
//     case 0:
//         mes = 'Enero';
//         break;

//     case 1:
//         mes = 'Febrero';
//         break;

//     case 2:
//         mes = 'Marzo';
//         break;

//     case 3:
//         mes = 'Abril';
//         break;

//     case 4:
//         mes = 'Mayo';
//         break;

//     case 5:
//         mes = 'Junio';
//         break;

//     case 6:
//         mes = 'Julio';
//         break;

//     case 7:
//         mes = 'Agosto';
//         break;

//     case 8:
//         mes = 'Septiembre';
//         break;

//     case 9:
//         mes = 'Octubre';
//         break;

//     case 10:
//         mes = 'Noviembre';
//         break;

//     case 11:
//         mes = 'Diciembre';
//         break;
// }

// console.log(`El mes actual es ${mes}`);


// // ITERACIONES, CICLO FOR

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log('Voy en el 5');
//         continue; // Para que se improma la frase en lugar del 5, y no se vuelva a imprimir el 5
//         // break; // detiene la ejecución del coódigo, por lo que se imprimiría hasta el 5 
//     }

//     console.log(`Número: ${i}`);
// }



// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`El número ${i} es par`);
//     } else {
//         console.log(`El núemro ${i} es impar`);
//     }
// }


// const arregloProductos = ['Camisa', 'Boleto', 'Guitarra', 'Dicso'];

// for (i = 0; i < arregloProductos.length; i++) {
//     console.log(`Tu producto ${arregloProductos[i]} fue agregado`);
// }


// // WHILE Y  DO WHILE

// i = 0; // Indice i se inicializa fuera del ciclo

// while (i < 10) { // Condición

//     if (i == 5) {
//         console.log('Cinco');
//         i++; // Se pone el incermento dentro del if, para que el contiue no corte el código, y se siga ejecutando.
//         continue; // Si se quisiera llegar hasta cinco, en vez de continue se escribe break;
//     }

//     console.log(`Número ${i}`);

//     i++; // Incremento
// }


// const music = ['Canción 1', 'Canción 2', 'Canción 3'];

// while (i < music.length) { // ciclo while revisa la condición antes de ejecutar el código
//     console.log(`Reproduciendo la canción ${music[i]}`);
//     i++;
// }

// i = 1000;

// do { // Ejecuta el código al menos una vez antes de verificar la condición
//     console.log(`Número: ${i}`); // Imprime 1000 y luego se corta la ejecución
//     i++;
// } while (i < 10);


// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender Javascript'];

// for (let i = 0; i < pendientes.length; i++) {
//     console.log(pendientes[i]);
// }

// // Recorrer el arreglo con forEach

// pendientes.forEach(function(pendiente, index) {
//     console.log(`${index}: ${pendiente}`);
// });


// // map para recorrer un arreglo de objetos

// const carrito = [
//     { id: 1, producto: 'Libro' },
//     { id: 2, producto: 'Camisa' },
//     { id: 3, producto: 'Guitarra' },
//     { id: 4, producto: 'Disco' }
// ];

// const nombreProducto = carrito.map(function(carrito) {
//     return carrito.producto;
// });

// console.log(nombreProducto); // Imprime un arreglo con los productos --> (4) ["Libro", "Camisa", "Guitarra", "Disco"]


// const automovil = {
//     modelo: 'Camaro',
//     motor: 6.2,
//     anio: 1969,
//     marca: 'Chevrolet'
// }

// // For in, imprimir un objeto

// for (let auto in automovil) { // auto se refiere a las llaves (propiedades) del objeto
//     console.log(`${auto} : ${automovil[auto]}`); // automovil[auto] se refiere a los valores
// }

// console.log(automovil);


// // Iteradores en JavaScript

// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

// // Set --> Conjuntos que van a definir listas de elementos, pero que no se repiten
// let ordenes = new Set();
// ordenes.add(123);
// ordenes.add(231);
// ordenes.add(131);
// ordenes.add(102);

// console.log(ordenes);
// console.log(ordenes.has(131)); // true --> comprueba si el valor existe
// console.log(ordenes.has(233)); // false
// console.log(ordenes.size); // 4 --> Indica cantidad de elementos que tiene el objeto
// console.log(ordenes.delete(123)); // --> Elimina un elemento

// ordenes.forEach(
//     (numero) => console.log(numero) // Lista todos los elementos presentes en el objeto 
// )

// // Otra forma 
// // let ordenes = new Set([123, 231, 131, 102]);


// // Los Map son estructuras de datos creados a través de una clave y un valor (clave-valor)
// const datos = new Map();
// datos.set('nombre', 'Juan'); // datos.set('clave', 'valor')
// datos.set('profesion', 'desarrollador web');

// // console.log(ciudades); // (4) ["Londres", "New York", "Madrid", "Paris"]
// // console.log(ordenes); // Set(4) {123, 231, 131, 102}

// // console.log(datos); // Map(2) {"nombre" => "Juan", "profesion" => "desarrollador web"}
// // console.log(datos.get('nombre')); // Juan
// // console.log(datos.has('nombre')); // true --> Verifica si la clave existe
// // console.log(datos.delete('nombre'));
// // console.log(datos); // Map {"profesion" => "desarrollador web"} --> Se borró la llave 'nombre'


// // Entries iterador --> Regresa llave y valor de objetos y arreglos
// // for of

// // // entries para las ciudades
// // for (let entrada of ciudades.entries()) {
// //     console.log(entrada);
// // }

// // // entries para las ordenes
// // for (let entradas of ordenes.entries()) {
// //     console.log(entradas);
// // }

// // // entries para el MAP
// // for (let entrada of datos.entries()) {
// //     console.log(entrada);
// // }


// // Values iterador --> Accede sólo a los valores de los objetos y arreglos

// // values a las ciudades
// for (let entrada of ciudades) {
//     console.log(entrada);
// }

// // values para las ordenes 
// for (let entradas of ordenes.values()) {
//     console.log(entradas);
// }

// // values para el MAP --> Accede a los valores del objeto
// for (let entrada of datos.values()) {
//     console.log(entrada);
// }


// // Keys iterador --> Regresa las llaves de cada uno de los arreglos (en los arreglos regresa el index)

// // keys para las ciudades
// for (let entrada of ciudades.keys()) {
//     console.log(entrada); // 0 1 2 3
// }

// // keys para las ordenes
// for (let entrada of ordenes.keys()) {
//     console.log(entrada); // 123 231 131 102
// }

// // keys para el MAP
// for (let entrada of datos.keys()) {
//     console.log(entrada); // nombre profesion
// }


// // Iteradores para un string

// const mensaje = 'Aprendiendo JavaScript';

// // forma antigua
// for (let i = 0; i < mensaje.length; i++) {
//     console.log(mensaje[i]);
// }

// // forma nueva
// for (let letra of mensaje) {
//     console.log(letra);
// }


// const enlaces = document.getElementsByTagName('a');

// for (let enlace of enlaces) {
//     console.log(enlace.href); // Accede a todos los enlaces puestos en el html
// }


// // Window Object --> ventana de navegación
// // Escribir en la consola 
// // window.console.log('hola');
// // window.alert('hola');

// // prompt
// // const nombre2 = prompt("¿Cuál es tu nombre?");
// // console.log(`Bienvenido ${nombre2}`);

// // confirm
// if (confirm('Eliminar?')) {
//     console.log('Eliminado'); // Aceptar
// } else {
//     console.log('Nada pasó'); // Cancelar
// }


// let altura,
//     anchura;

// altura = window.outerHeight; // altura del navegador
// anchura = window.outerWidth; // ancho del navegador

// console.log(altura);
// console.log(anchura);

// altura = window.innerHeight; // altura de la ventana
// anchura = window.innerWidth; // ancho de la ventana


// let ubicacion;

// ubicacion = window.location;
// ubicacion = window.location.host;
// ubicacion = window.location.port;
// ubicacion = window.location.hostname;
// ubicacion = window.location.search;
// // window.location.href = 'http://twitter.com'; // Redirecciona

// // history Object
// // Abrir navegador en modo incógnito
// // Abrir en este orden: twitter.com  google.com y facebook.com

// // window.history.go(-2); // Google
// // window.history.go(-3); // Twitter

// // Navigator
// ubicacion = window.navigator;
// ubicacion = window.navigator.appName; // Netscape
// ubicacion = window.navigator.appVersion; // versión del navegador
// ubicacion = window.navigator.userAgent; // versión
// ubicacion = window.navigator.language; // idioma configurado en el pc

// console.log(ubicacion);


// // Scope en JavaScript --> visibilidad que tiene un valor dentro de una función o un bloque

// // Variables globales, pueden ser accedidas en cualquier lugar dle programa
// var a = 'a';
// let b = 'b';
// const c = 'c';

// console.log('GLOBALES: ' + a, b, c); // GLOBALES: a b c

// // scope de una función
// function functionScope() {
//     // Las variables globales pueden volver a sobreescribirse dentro de una función, pero estas variables sólo van a existir dentro de una función
//     var a = 'A';
//     let b = 'B';
//     const c = 'C';
//     console.log('FUNCION: ' + a, b, c); // FUNCION: A B C 

// }
// functionScope();


// // scope de bloque {}
// if (true) {
//     var a = 'AA';
//     let b = 'BB';
//     const c = 'CC';
//     console.log('BLOQUE: ' + a, b, c); // FUNCION: A B C 

// }

// // Las variables (var) al ser sobreescribidas dentro de una función, cambian también su valor global, esto no pasa con let y const

// //
// for (var a = 0; a < 10; a++) {
//     console.log(a);
// }