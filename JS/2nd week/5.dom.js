"use strict";

console.log(document.querySelector("#div1 a").title); // Prints "hello world", elementos a dentro de los elementos con el id div1
// console.log(document.querySelector("#div1 > a").title); // Cannot read properties of null (reading 'title'), elementos a que son hijos inmediatos de div1
console.log(document.querySelector("#div1 > p > a").title); // Prints "hello world", elementos a que son hijos inmediatos de p que son hijos inmediatos de div1
console.log(document.querySelector(".normalLink[title^='bye']").title); // Prints "bye world", clase normalLink cuyo atributo title empieza por bye
console.log(document.querySelector(".normalLink[title^='bye'] + a").title); // Prints "hello again", elementos a que van después de un elemento que tiene la clase normalLink y el title empiece por bye

console.log("******** querySelectorAll ********");
let elems = document.querySelectorAll(".normalLink"); // Todos los que tengan la clase .normalLink
// Prints "hello world" and "bye world"
elems.forEach(elem => console.log(elem.title));

let elems2 = document.querySelectorAll("a[title^='hello']"); // Todos los elementos cuyo title comience por hello
// Prints "hello world" and "hello again"
elems2.forEach(elem => console.log(elem.title));

let elems3 = document.querySelectorAll("a[title='hello world'] ~ a"); // Todos los enlaces del enlace con title hello world
// Prints "bye world" and "hello again"
elems3.forEach(elem => console.log(elem.title));

