"use strict";

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

function divClick(event) {
    // 1. Captura (parámetro a true), 2: Target o elemento que recibe el evento, 3: Bubble (por defecto)
    // eventPhase: 1 -> capture, 2 -> target (clicked), 3 -> bubble
    console.log("you have clicked " + this.id + ". Phase: " + event.eventPhase);
};

/* div1.addEventListener('click', divClick);
div2.addEventListener('click', divClick);
div3.addEventListener('click', divClick); */

    
/* div1.addEventListener('click', divClick, true);
div2.addEventListener('click', divClick, true);
div3.addEventListener('click', divClick, true); */

