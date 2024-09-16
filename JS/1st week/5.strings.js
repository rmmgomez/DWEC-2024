let nombre = "Alice";
let age = 23;

console.log(`Hello!
My name is ${nombre}
    age ${age}`);

function timesChar(string, substr) {
    let pos = 0;
    let times = 0;
    while((pos = string.indexOf(substr, pos)) !== -1) {
        times++;
        pos++;
    }

    console.log(`"${substr}" appears ${times} times in "${string}"`);
}

timesChar("My house is big and there is a tree nearby", "e");
timesChar("My house is big and there is a tree nearby", "is");
timesChar("My house is big and there is a tree nearby", "dog");

function timesChar2(string, substr) {
    let times = string.match(new RegExp(substr, "ig")).length;
    console.log(`"${substr}" appears ${times} times in "${string}"`);

}

timesChar2("My house is big and there is a tree nearby", "e");
timesChar2("Is my house big and is there a tree nearby?", "is");

console.log("Niño".toUpperCase()); // No funciona con carac especiales
console.log("Niño".toLocaleUpperCase());

let day = "3";
let month = "7";
let year = "2022";

console.log(`${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`);

let uString = "Unicode astral plane: \u{1f3c4}";
console.log(uString);
console.log("😀🍔");
console.log("\u{1F600}\u{1F354}");