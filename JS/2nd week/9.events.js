"use strict";

let div = document.getElementById("div1");
div.addEventListener("click", e => {
    console.log(`Click!. Coordinates: ${e.clientX}, ${e.clientY}, // Coordenadas ratón ventana navegador diferente de pageX screenX
    Number of clicks: ${e.detail}`); // Número de veces que ha sido pulsado
});

div.addEventListener("mouseenter", e => {
    e.target.classList.replace("blue", "green");
});

div.addEventListener("mouseleave", e => {
    e.target.classList.replace("green", "blue");
});

div.addEventListener("mousemove", e => {
    e.target.innerText = `${e.clientX - e.target.offsetLeft}, ${e.clientY- e.target.offsetTop}`; // Desplazam del elem respecto al documn
});1

let input = document.getElementById("input");
input.addEventListener("keypress", e => {
    console.log(`${e.key} pressed: ${e.target.value}`);
    if(!e.key.match(/[0-9]/)) {
        console.log("Only numbers!");
        e.preventDefault();
    } 
});

input.addEventListener("paste", e => {
    let text = e.clipboardData.getData('Text');
    if(!text.match(/^[0-9]+$/)) {
        console.log("You can't copy letters or symbols. Only numbers! -> " + text);
        e.preventDefault();
    }
});
