class College {
    static collegeName: string = "SVECW";
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Student Name:", this.name);
        console.log("College:", College.collegeName);
    }
}

let s1 = new College("Kusuma");
s1.display();