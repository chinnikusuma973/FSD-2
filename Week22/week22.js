"use strict";
function greet(name, message) {
    if (message) {
        console.log(message + ", " + name);
    }
    else {
        console.log("Hello, " + name);
    }
}
greet("Kusuma");
greet("Kusuma", "Good Morning");
