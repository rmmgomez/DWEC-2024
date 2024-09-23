"use strict";

const form = document.getElementById("form");
form.addEventListener("submit", e => {
    e.preventDefault(); // Impedimos que se recargue la página
    const description = form.description.value;
    console.log(description);
    form.reset(); // Borro todo el contenido de mi formulario
});

