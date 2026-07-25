namespace StudentInfo {
    export class Student {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        display(): void {
            console.log("Student Name:", this.name);
        }
    }
}

let s1 = new StudentInfo.Student("Kusuma");
s1.display();