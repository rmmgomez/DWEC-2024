"use strict";

class Person {
    #name;
    #age;

    constructor(name = "Nobody", age = 0) {
        this.#name = name;
        this.#age = age;
    }

    get name() { // Getter y setter estilo c# o python
        console.log('Calling name getter');
        return this.#name;
    }

    set name(name) {
        console.log('Calling name setter');
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
p.name = "Peter"; // Llamada implícita al setter
console.log(p.name);
p.sayHello();