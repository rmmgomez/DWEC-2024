"use strict";

// Destructuring Arrays
console.log("Destructuring Arrays");
let a = [23, 43, 15, 65];
let [n1, n2] = a;
console.log(`${n1} - ${n2}`); // 23, 43

// Destructuring Objects
console.log("Destructuring Objects");
function showUser({id = 0, name = 'Nobody', email = 'none'}) {
    console.log(`${id} - ${name} (${email})`);
}

let user = {
    id: 3,
    name: "Peter",
    email: "peter@gmail.com"
}

let {id: userId, name: userName} = user;
console.log(userId + " " + userName);

showUser(user); // 3 - Peter (peter@gmail.com)
showUser({}); //0 - Nobody (none)

// Copy array

let a2 = [...a];
a2[0] = 999;
console.log(a); // [23, 43, 15, 65]
console.log(a2); // [999, 43, 15, 65]

// Copy object

let user2 = {...user};
user2.id = 99;
console.log(user.id + " - " + user2.id); // 3 - 99

// Concat arrays

let nums1 = [1,2,3,4];
let nums2 = [5,6,7,8];
let nums3 = [...nums1, ...nums2, 9, 10];

// Combine objects

let credentials = {
    user: 'admin123',
    pass: '123456'
}

let userWithCredentials = {...user, ...credentials, admin: true};
console.log(userWithCredentials);
