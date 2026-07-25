function total(...numbers: number[]): number {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log("Total:", total(10, 20, 30, 40));