"use strict";
class Person {
    name;
    age;
    city;
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    showPerson() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
    }
}
class Student extends Person {
    display() {
        console.log("Name:", this.name);
        console.log("City:", this.city);
    }
}
let s1 = new Student("Kusuma", 20, "Hyderabad");
s1.showPerson();
s1.display();
