"use strict";

let reg = new RegExp("[aeiou]", "ig");
let str = "Hello world!. Are you ok?";
console.log(str.match(reg)); // ['e', 'o', 'o', 'A', 'e', 'o', 'u', 'o']

let reg2 = /[aeiou]/ig;
console.log(str.match(reg2)); // ['e', 'o', 'o', 'A', 'e', 'o', 'u', 'o']

let str3 = "Hello, I'm using regular expressions";
let reg3 = /reg/;
console.log(reg3.test(str3)); // Prints true


let str4 = "84573454T";
let reg4 = /[0-9]/;
let reg5 = /..../;
console.log(reg4.test(str4)); // true (contains a number)
console.log(reg5.test(str4)); // true (contains at least 4 characters)

// \w === [a-zA-Z0-9_]
// \d === [0-9]

let str5 = "There's a cat on the carpet";
let reg6 = /\bcar\b/; // "car" word! 
console.log(reg6.test(str5)); // false --> Palabra car, no carpet

let reg7 = /[0-9]{8}[a-z]?/i; // contains 8 numbers and a letter (optional)
console.log(reg7.test(str4)); // true

let dni = "My DNI is 43564534G"
let dni2 = "43564534G"

let regDni = /^[0-9]{8}[a-z]$/i; // ONLY contains a DNI!
console.log(regDni.test(dni)); // False
console.log(regDni.test(dni2)); // True

let regDate = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/; // 00/00/00 ó 00/00/0000
let regDate2 = new RegExp("^[0-9]{2}/[0-9]{2}/([0-9]{2}|[0-9]{4})$");

let form = document.getElementById("form");
let pResult = document.getElementById("result");

form.addEventListener("submit", e => {
    e.preventDefault();
    let date = form.date.value;
    if(regDate.test(date)) { // OK
        pResult.innerText = `${date} is a valid date`;
    } else {
        pResult.innerText = `${date} is NOT a valid date`;
    }
});
