class Person {
    public name: string;
    private age: number;
    protected city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    public showPerson(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
    }
}

class Student extends Person {
    display(): void {
        console.log("Name:", this.name);
        console.log("City:", this.city);
    }
}

let s1 = new Student("Kusuma", 20, "Hyderabad");

s1.showPerson();
s1.display();