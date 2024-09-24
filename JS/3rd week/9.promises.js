"use strict";

let promiseResult;

// Operación que tardará un tiempo y para no bloquear --> Promesa
// --> Resolve para cuando la acción acaba correctamiente
// --> Reject cuando se produce un error
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(6), 2000);
});

promise.then(result => console.log(result));

console.log("This is the main program code");

let promise2 = promise.then(result => {
    return result * 10;
}).then(result => console.log(result)); // 60

