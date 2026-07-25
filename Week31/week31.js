"use strict";
class Student {
    name;
    age;
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let s1 = new Student();
s1.name = "Kusuma";
s1.age = 20;
s1.display();
s1.display();
