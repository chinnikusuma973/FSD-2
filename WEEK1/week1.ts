let Name: string = "Kusuma";
let age: number = 20;
let isStudent: boolean = true;

console.log("Data type of Name is-->" + typeof Name);
console.log("Data type of number is-->" + typeof age);
console.log("Data type of isStudent is-->" + typeof isStudent);

function displayUserProfile(
    Name: string,
    age: number,
    isStudent: boolean
): void {

    console.log('User:${Name}');
    console.log('User:${age}');
    console.log('User:${isStudent}');
}