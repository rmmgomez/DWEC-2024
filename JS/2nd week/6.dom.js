"use strict";

let list = document.querySelector("#list");
let li1 = document.createElement("li");
li1.append("New item"); 

list.append(li1);

// Add one element to the beginning of the list ("I'm the *first* element")
let li2 = document.createElement("li");
let strong = document.createElement("strong");
strong.append("first");
li2.append("I'm the ", strong, " element");

list.prepend(li2); // Al inicio del todo



// Insert new element "Hello world!" after the second element
let li3 = document.createElement("li");
li3.append("Hello world!");

list.children[1].after(li3); // Tras el "primer" elemento

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", e => list.replaceChildren()); // Clears list items (todos)
 