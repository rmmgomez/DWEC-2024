"use strict";

/* for(var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(i); // 11 (global variable!!) */

// Try also with var i!!
for(let i = 1; i <= 10; i++) {
    const p = document.createElement("p");
    p.append(`Paragraph ${i}`);
    p.addEventListener('click', e => {
        console.log(`Click on paragraph ${i}`);
    });
    document.body.append(p);
}