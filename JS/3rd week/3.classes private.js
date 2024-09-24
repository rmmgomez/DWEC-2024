"use strict";

class Person {
    #name; // Atributos privados, creamos getter y setter estilo java
    #age; // Siempre declarados fuera del constructor

    constructor(name = "Nobody", age = 0) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    sayHello() {
        console.log(`Hello! I'm ${this.#name} (${this.#age} years old)`);
    }

    #privateMethod() {
        console.log("You can't call me from outside the class");
    }
}

let p = new Person("John", 12);
let p2 = new Person();

console.log(p);
console.log(p2);
p.setName("Peter");
console.log(p.getName());
p.sayHello();