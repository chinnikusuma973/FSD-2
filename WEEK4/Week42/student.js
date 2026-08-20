"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student Name:", this.name);
    }
}
exports.Student = Student;
