/* let map = new Map();
map
  .set("24362462H", "Pedro")
  .set("35463634Y", "Marta")
  .set("23423523T", "Paco");

console.log(map);

map.set("24362462H", "Juan");

console.log(map);
console.log(map.has("35463634Y")); // true
console.log(map.get("35463634Y")); // Marta
map.delete("35463634Y");
console.log(map); */

/* console.log("------FOR..OF-----");
for(let [dni, name] of map) {
    console.log(`${dni} - ${name}`);
}

console.log("------FOR..OF with only keys-----");
for(let dni of map.keys()) {
    console.log(`${dni} - ${map.get(dni)}`);
}

console.log("------.forEach-----");
map.forEach((name, dni) => console.log(`${dni} - ${name}`)); */


/* let set = new Set();
set.add("tree");
set.add("car");
set.add("horse");
set.add("tree");

console.log(set);
console.log(set.has("horse"));
console.log(set.delete("horse"));

set.forEach(v => console.log(v)); */

// Delete repeated values from an array
let a = [1,2,3,4,5,2,3,1,4,3,2];
let set2 = new Set(a);
set2.forEach(v => console.log(v));
a = new Array(set2);
console.log(a);
