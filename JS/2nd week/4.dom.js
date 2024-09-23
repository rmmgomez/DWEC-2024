"use strict";

let list = document.getElementById("list");
// Array.from(list.childNodes).forEach(e => console.log(e)); //  todos los elementos HTML incluidos nodos de texto y comentarios
Array.from(list.children).forEach(e => console.log(e.innerText)); //  todos los elementos HTML 

// console.log(list.parentElement); //<body>

let li = list.firstElementChild;
while(li) {
    console.log(li.innerText);
    li = li.nextElementSibling;
} 