class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name} (${this.age})`;
    }
}

/* let p1 = new Person("Peter", 23);
let p2 = p1;
p2.name = "John";
p2.age = 77;

console.log(p1.toString()); // John (77)
console.log(p2.toString()); // John (77) */

//----------------------------------

let mary = new Person("Mary", 25);
let joe = new Person("Joe", 16);
let leonard = new Person("Leonard", 55);

let people = [mary, joe, leonard];

console.log(people.indexOf(joe)); // 1

let p = new Person("Joe", 16);
console.log(people.indexOf(p)); // -1

console.log(people.findIndex(p => p.age === 16 && p.name === "Joe")); // 1
console.log(people.findIndex(p => p.age < 18)); // 1
console.log(people.find(p => p.age < 18).toString()); // 1

