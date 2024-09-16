function sumAll(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

/* console.log(sumAll(2, 4));
console.log(sumAll(2, 4, 8, 12, 15));
console.log(sumAll()); */

let nums = [12, 32, 6, 8, 23];
/* console.log(Math.max(nums)); // Prints NaN (array is not valid)
console.log(Math.max(...nums)); // Prints 32 -> equivalent to Math.max(12, 32, 6 ,8 ,23) */

let nums2 = [...nums];
/* console.log(nums2);
nums2[0] = 0;
console.log(nums);
console.log(nums2); */

/* 
console.log("----- Desestructuración de arrays -----");

let n1 = nums[0];
let n2 = nums[1];
let [numm1, numm2] = nums;

let array = [150, 400, 780, 1500, 200];
let [v1, v2, v3] = array; // Asigna los tres primeros elementos del array
console.log(v3); // Imprime 780

*/

/* console.log(`${n1}, ${n2}`); // 12, 32 */

/* function printUserData([id, name, email], otherInfo = "None") {
    console.log("ID: " + id);
    console.log("Name: " + name);
    console.log("Email: " + email );
    console.log("Other info: " + otherInfo );
}
let userData = [3, "Peter", "peter@gmail.com"];
printUserData(userData, "He's not too smart");



console.log("----- REST -----");
function suma(...numeros) {
    console.log(`He recibido ${numeros.length} valores: ${numeros}`);
    return numeros.reduce((t,n) => t + n, 0);
} */

/* console.log(suma());
console.log(suma(3, 5));
console.log(suma(3, 5, 7, 8, 4)); */

console.log("----- SPREAD -----");

/* let ns = [23, 14, 6, 14, 37, 23, 17];
console.log(Math.max(...ns)); */

/* let num1 = [1,2,3];
let num2 = [4,5,6];
let num3 = [...num1, ...num2, 7, 8];
console.log(num3); */

console.log("----- ARRAY DESTRUCTURING -----");

/* function suma2Primeros([n1 = 0, n2 = 0]) {
    return n1 + n2;
}

console.log(suma2Primeros([3, 5, 2, 7]));
console.log(suma2Primeros([3]));
console.log(suma2Primeros([]));  */