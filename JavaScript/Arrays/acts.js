//------ Uso de Array ------//
// Array


//const frutas = ["banana", "frutilla"]
//const nuevaFruta = ["pera"]


//console.log(frutas)


//frutas.push(nuevaFruta)


//console.log(frutas)


// Metodo shift


//const frutaEliminada = frutas.shift();
//console.log(frutaEliminada);


//----------- Actividades -----------//


//Ejercicio 2//


const array = ["Tomy Huisa", "Sandwich", "papas"];


function procesarPedido(pedidos) {
 const cliente = pedidos.shift();
 const bebida = "pepsi";
 pedidos.unshift(bebida);
 pedidos.push(cliente);
 return pedidos;
}


console.log(procesarPedido(array));


//Ejercicio 3//


//---While---//


let contador = 0;


while (contador < array.length) {
 console.log(array[contador]);
 contador++;
}


//---For---//


for (let i = 0; i < array.length; i++) {
 console.log([i], array[i]);
}


//---For Each---//


array.forEach((Element) => {
 console.log(Element);
});

//----------- Actividades -----------//


//Ejercicio 1//


const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers);


//Respuesta el la columna 0 de la tupla es remplazado por un 10 al igual que la 2 el cual es remplazado por un 30


//Ejercicio 2//


const pedido = ["Tomy Huisa", "Sandwich", "papas"];


function procesarPedido(pedidos) {
 const cliente = pedidos.shift();
 const bebida = "pepsi";
 pedidos.unshift(bebida);
 pedidos.push(cliente);
 return pedidos;
}


console.log(procesarPedido(pedido));


//Ejercicio 3//


const lista = [1, 2, 4, 5, 5, 6, 6, 7];
let resultado = 0;


function sumarPares(numeros) {
 for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] % 2 === 0) {
     //numeros[i] = numeros[i] + i;
     resultado += numeros[i];
   }
 }
 return resultado;
}


console.log(sumarPares(lista));


//Ejercicio 4//


const listaA = [
 "audio",
 "vaca",
 "tarta",
 "teclado",
 "papa",
 "auricular",
 "terminal",
 "suma",
];




//console.log(
//  "|----------------------| Etapa de Ejemplos |----------------------|"
//);
////arrays
//
//const exampleArray = [1, 2, 3];
//console.log(exampleArray[1]);
//
////Objects
//
//const persona = {
//  //clave : valor
//  name: "Tomy",
//  age: 26,
//  isWorking: true,
//  items: ["Gun", "Sandwich", "Chocolate"],
//  walk: function () {
//    return "I'm walking"; // si la funcion retorna void es que no devuelve nada, si no, aclara el tipo de dato//
//  },
//};
//
//console.log(persona.name);
//console.log(persona["name"]);
//console.log(persona.items[2]);
////si cuando estan mostrando/ejecutando una funcion no le ponen los parentesis esta no funcionara
//console.log(persona.walk());
////si la funcion no devuelve ningun valor, va a devolver un undefined por default
//
////Reasignamos el valor de edad
//persona.age = 29;
//
//console.log(persona.age);
//
////Delete: Elimina las propiedades de un objeto seleccionado
//delete persona.age;
//
console.log(
 "|----------------------| Etapa de Actividades |----------------------|"
);


//--------------------------------------------------------------------------\\


//ACT1\\


function createObject(name, subs) {
 const objecto = {
   name: name,
   subscribers: subs,
   hash: name * subs,
   getStatus: `Mi nombre es ${name} tengo ${subs} subcriptores`,
 };
 return objecto;
}


console.log(createObject("Tomioka", "100M"));


//ACT2\\


//Pregunta 1º\\
//¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que?\\
//Al ejecutarlo se imprimiria lo que esta en el segundo const dado a que dichos parametros dentro del console.log
//estan en dicho const.


//const person = {
//    name: 'John',
//    age: 30,
//    hobbies: ['reading', 'music', 'sports']
//  }
//
//  const {
//    weight = 70,
//    height = 180,
//    } = person
//  console.log(weight, height)


//Pregunta 2º\\
//¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?\\
//La variable no esta definada por esa razon al ejecutar el codigo termina en un error la cual indica que no
//esta definida\\


//const person = {
//  name: "John",
//  age: 30,
//  hobbies: ["reading", "music", "sports"],
//};
//
//const { age: personAge } = person;
//console.log(age);


//Pregunta 3º\\
//¿Cómo se llama el atajo que nos permite recuperar el valor de una propiedad de un objeto?\\
//Se lo llama la Destructuración\\


//ACT3\\


const object = { a: true, b: 42, c: false };


function getBooleanos(objecto) {
 const arr = [];


 return arr;
}


console.log(getBooleanos());
