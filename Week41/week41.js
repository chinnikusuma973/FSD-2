"use strict";
var StudentInfo;
(function (StudentInfo) {
    class Student {
        name;
        constructor(name) {
            this.name = name;
        }
        display() {
            console.log("Student Name:", this.name);
        }
    }
    StudentInfo.Student = Student;
})(StudentInfo || (StudentInfo = {}));
let s1 = new StudentInfo.Student("Kusuma");
s1.display();
