"use strict";

let changeLink = document.getElementById("changeLink");
let changeColor = document.getElementById("changeColor");

changeLink.addEventListener("click", e => {
    let a = document.querySelector("a");
    a.innerText = "Go to iessanvicente.com";
    a.href = "https://iessanvicente.com";
    // a.setAttribute("href", "https://iessanvicente.com"); // Same as before
});

changeColor.addEventListener("click", e => {
    let p = document.querySelector("p.red");
    // p.style.color = "green"; // Manipulate CSS style directly
    // p.style.backgroundColor = "yellow";

    // p.classList.remove("red");
    // p.classList.add("green");

    p.classList.replace("red", "green"); // Quita el rojo por verde
});

let div = document.getElementById("normalDiv");
div.style.boxSizing = "border-box";
div.style.maxWidth = "200px";
div.style.padding = "50px";
div.style.color = "white";
div.style.backgroundColor = "red";
