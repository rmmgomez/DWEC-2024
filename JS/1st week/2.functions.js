'use strict';
/* 
function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Peter"); // Hello Peter
sayHello(); // Hello undefined
sayHello("Alex", "John", "Lisa"); // Hello Alex
console.log(typeof sayHello); // function
 */
/* let sayHello2 = function(name) {
    console.log(`Hello ${name}`);
}

sayHello2("Jim"); // Hello Jim

let sayHello3 = name => console.log(`Hello ${name}`); // Función flecha
sayHello3("Jane");

function totalPrice(priceUnit, units) {
    return priceUnit * units;
}
let total = totalPrice(5.95, 6); // Returns 35.7
console.log(total); // Prints 35.7

let sum = (n1, n2) => n1 + n2; 
console.log(sum(4, 7)); // 11 */

function stringOp(str, fn) {
    console.log(`${str} -> ${fn(str)}`);
}
stringOp("hola", str => str.toLocaleUpperCase()); // hola -> HOLA
stringOp("hola", str => str.length); // hola -> 4

function firstLetter(str) {
    return str[0];
}

stringOp("hola", firstLetter); // hola -> h

function sayHelloDefault(name = "Anonymous") {
    console.log("Hello " + name);
}
sayHelloDefault(); // Hello Anonymous
sayHelloDefault("Somebody"); // Hello Somebody

function suma (n1, n2) {
    return n1 + n2;
}

function operar(n1, n2, operacion) {
    return operacion(n1, n2);
}

console.log(operar(4, 5, suma)); // 9
console.log(operar(6, 4, function(n1, n2) {
    return n1 - n2;
})); // 2
console.log(operar(3, 5, (n1, n2) => n1 * n2)); // 15

let saluda = (nombre = 'Anónimo') => console.log(`Hola ${nombre}`);
console.log(suma(3, 4, 5, 6, 7, 8, 9)); // 7 (3+4)
console.log(suma()); // NaN
saluda(); // Hola Anónimo
saluda("Pepito"); // Hola Pepito
