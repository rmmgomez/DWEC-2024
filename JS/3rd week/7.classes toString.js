"use strict";

class Person {
    constructor(name = "Nobody", age = 0) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello! I'm ${this.name} (${this.age} years old)`);
    }

    toString() {
        return `${this.name} (${this.age})`;
    }

    valueOf() {
        return this.age; // Los objetos de la clase persona se compararán por su edad
    }     
}

let p = new Person("Alice", 35);
console.log("Person: " + p); // Person: Alice (35)

let p2 = new Person("Peter", 23);

console.log(p > p2);

let p3 = new Person("Johanna", 18);

let people = [p, p2, p3];
people.sort(); // Uses toString() to sort!! (by name)
console.log(people.toString()); 

