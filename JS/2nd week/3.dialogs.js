"use strict";

let alertBtn = document.getElementById("alert");
let confirmBtn = document.getElementById("confirm");
let promptBtn = document.getElementById("prompt");

let confirmResult = document.getElementById("confirmResult");
let promptResult = document.getElementById("promptResult");

alertBtn.addEventListener("click", e => alert("This is a message"));
confirmBtn.addEventListener("click", e => {
    let like = confirm("Do you like pizza");
    confirmResult.innerText = like ? "You like pizza" : "You don't like pizza??!!";
});
promptBtn.addEventListener("click", e => {
    let name = prompt("What's your name?", "Anonimous");
    promptResult.innerText = "Your name is " + name;   
});
