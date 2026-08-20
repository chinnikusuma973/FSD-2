class Employee {
    readonly empId: number;
    name: string;

    constructor(empId: number, name: string) {
        this.empId = empId;
        this.name = name;
    }

    display(): void {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.name);
    }
}

let emp = new Employee(101, "Kusuma");

emp.display();