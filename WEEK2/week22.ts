function greet(name: string, message?: string): void {
    if (message) {
        console.log(message + ", " + name);
    } else {
        console.log("Hello, " + name);
    }
}

greet("Kusuma");
greet("Kusuma", "Good Morning");