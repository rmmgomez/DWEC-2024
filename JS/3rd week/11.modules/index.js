import { sum, multiply, PI } from "./functions.js";
import { Person } from './person.class.js';

let result = sum(3, 6);
console.log(result);

let radius = 5;
let area = multiply(PI, multiply(radius, radius));
console.log(`CIRCLE. Radius: ${radius}. Area: ${area}`);

let p = new Person("peter", 23);
console.log(p);
