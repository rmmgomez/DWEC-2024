let person = new Object();
person.name = "Peter";
person["age"] = 34;
person.sayHello = function() {
  console.log(`Hello! I'm ${this.name} (${this.age} years old)`);
}
console.log(person);
person.sayHello();

let person2 = {
    name: "Peter",
    age: 34,
    phones: ["645745345", "954693454"],
    addresses: [ // Dirección es un array de objetos json
        {street: "Nothing Av.", number: 23},
        {street: "Danger Street", number: 13},
    ],
    sayHello() {
        console.log(`Hello! I'm ${this.name} (${this.age} years old)`);
    }
};

console.log(person2);
person2.sayHello();
