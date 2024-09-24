"use strict";

class Person {
    
    constructor(name = "Nobody", age = 0) {
        this.name = name; // No necesito declarar los atributos de la clase fuera del constructor, basta con asignarlos
        this.age = age;
    }

    sayHello(name) {
        console.log(`Hello! I'm ${this.name} (${this.age} years old)`); // Usamos el this!!
    }
}

let p = new Person("John", 12);
let p2 = new Person();

console.log(p);
console.log(p2);
p.sayHello();