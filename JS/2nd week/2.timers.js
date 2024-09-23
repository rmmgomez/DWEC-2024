'use strict';

function suma(n1, n2) {
    console.log(n1 + n2);
}

setTimeout(() => console.log("Hello world!"), 3000);
setTimeout(suma, 2000, 4, 6);
console.log("Hello again");

let num = 1;
// Prints a number and increments it every second
let interval = setInterval(() => {
    console.log(num++);
    if(num > 10) {
        clearInterval(interval);
    }
}, 1000);

let buttonGoogle = document.getElementById("google");
buttonGoogle.addEventListener("click", e => {
    location.assign("https://google.es");
});

