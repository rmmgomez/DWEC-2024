'use strict';
// Window's full width and height (excludes Window Manager’s upper decoration bar)
console.log(window.outerWidth + " - " + window.outerHeight);

// Opens a new window (returns a reference to that window so you can close it from here).
// window.open("https://www.google.com");

// screen object properties
console.log(screen.width + " - " + screen.height); // Screen width and height (screen resolution)
console.log(screen.availWidth + " - " + screen.availHeight); // Excludes Operating System bars

// navigator object properties
console.log(navigator.userAgent); // Prints browser information

navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
});
    