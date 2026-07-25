"use strict";
class College {
    static collegeName = "SVECW";
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student Name:", this.name);
        console.log("College:", College.collegeName);
    }
}
let s1 = new College("Kusuma");
s1.display();
