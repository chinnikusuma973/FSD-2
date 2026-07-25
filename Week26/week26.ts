// Normal Function
function subtract(a: number, b: number): number {
    return a - b;
}

console.log("Normal Function:", subtract(15, 5));

// Arrow Function
const subtractArrow = (a: number, b: number): number => a - b;

console.log("Arrow Function:", subtractArrow(15, 5));