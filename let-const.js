// break up with var
let balance = 1240;
balance = 1340;
const userName = "janpakhi potas potas";
const weTogether = "ami" + userName;
console.log(weTogether);
// userName = "moyna pakhi";

const numbers = [34, 46, 78, 88];
// numbers = [45, 57, 90]; // re-assign not allowed
numbers.push(87);
numbers[1] = 333;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

const student = {
    roll: 3454,
    name: "ajelnika",
    job: "doctor",
};
student.name = "ghumkumari";
/* student = {
    name: "ghumkumari";
}; */ // re-assign not allowed