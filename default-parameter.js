function add(num1, num2 = 33) {
    // Option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    // Option 2
    // num2 = num2 || 0;

    const total = num1 + num2;
    return total;
};
const result = add(15, 0);
// console.log(result);

function fullName(first, last) {
    const name = first + " " + last;
    return name;
};
const names = fullName("md");
console.log(names);