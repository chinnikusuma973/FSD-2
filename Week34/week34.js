"use strict";
class Employee {
    empId;
    name;
    constructor(empId, name) {
        this.empId = empId;
        this.name = name;
    }
    display() {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.name);
    }
}
let emp = new Employee(101, "Kusuma");
emp.display();
