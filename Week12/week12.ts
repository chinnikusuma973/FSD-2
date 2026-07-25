let value: any = 10;
value = "Hello";
value = true;

console.log(value);

let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}
function greet(): void {
    console.log("Welcome");
}

greet();