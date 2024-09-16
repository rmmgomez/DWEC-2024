class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name} (${this.age})`;
    }
}

let person1 = new Person("Peter", 21);
let person2 = new Person("Mary", 34);
let person3 = new Person("Louise", 17);

let hobbies = new Map();
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
hobbies.set(person2, ["Music", "Walking"]);
hobbies.set(person3, ["Boxing", "Eating", "Sleeping"]);

console.log(hobbies);
console.log(hobbies.get(person1)); // ["Tennis", "Computers", "Movies"
console.log(hobbies.get(person1)[0]); // Tennis

hobbies.forEach((hob, person) => {
    console.log(person.toString());
    hob.forEach(h => console.log("\t" + h));
});
