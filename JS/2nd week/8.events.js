"use strict";

function oneClick() {
    console.log("This function is only executed once");
    button.removeEventListener('click', oneClick);
}

let button = document.getElementById("button");
button.addEventListener('click', e => {
    console.log("Click!");
});
button.addEventListener('click', oneClick);

function toggleGreen(e) {
    e.target.classList.toggle("green");
}

document.querySelectorAll("td").forEach(td => td.addEventListener('click', toggleGreen));

let brokenLink = document.getElementById("brokenLink");
brokenLink.addEventListener('click', e => {
    e.preventDefault();
    console.log("Google link clicked!: " + e.target.href);
});
