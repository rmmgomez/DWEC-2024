"use strict";

function sumPromise(n1, n2) {
    if(n1 < 0 || n2 < 0) {
        return Promise.reject("Cannot add negative numbers");
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), 2000);
    });
}

function power2Promise(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n ** 2), 3000);
    });
}

// Don't NEST promises!!!
// sumPromise(4,7).then(res => { 
//     power2Promise(res).then(res2 => {
//         console.log(res2);
//     });
// });

sumPromise(4,7)
.then(res =>  power2Promise(res))
.then(res2 => {
    console.log(res2);
});

sumPromise(-3, 5)
.then(res => console.log(res))
.catch(error => console.error("ERROR: " + error));

