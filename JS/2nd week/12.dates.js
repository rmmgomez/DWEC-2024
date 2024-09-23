let date = new Date(1363754739620); // Nueva fecha 20/03/2013 05:45:39 (milisegundos desde Epoch)
console.log(date);

let now = new Date();
console.log(now);

// How many days from 16 March 2020 until now
let nowMs = Date.now(); // // Momento actual en ms
let beforeMs = Date.parse("2020-03-16"); // 16 Marzo 2020 en ms
console.log(nowMs, beforeMs);
let diffDays = (nowMs - beforeMs)/1000/60/60/24;
console.log(`${diffDays.toFixed(0)} days from the start of COVID`); 
// Ahora hacemos lo mismo,pero usando el método setHours
now.setHours(now.getHours() + 24);
console.log(now);

console.log(now.toLocaleDateString()); // DD/MM/YYYY

function showDate(date) {
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    console.log(`${days[date.getDay()]}, ${(String(date.getDate()).padStart(2, "0"))} de ${months[date.getMonth()]} de ${date.getFullYear()}`);
}

showDate(now); // Lunes, 25 de Septiembre de XXXX
