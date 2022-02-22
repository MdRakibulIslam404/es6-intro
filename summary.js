let priyoPerson = "kulsum begum";
priyoPerson = "Momotaj begumS";
const hubby = "Akbar the great";

// default param
function getName(first, last = "chowdhory") {
    return `${first} ${last}`;
};

// template String
const myPeople = `My lovely person is are ${hubby} and his fullName is ${getName("Akbar")}. My name is ${priyoPerson}`;
console.log(myPeople);

// arrow function
const getName2 = (first, last) => `${first} ${last}`;
const fiveTimes = x => x * 5;
const bihArrowFunc = (x, y, z) => {
    const first = x + y;
    const sec = first + z;
    return sec;
};

const nums = [2, 4, 67, 54];
const min = Math.min(...nums);
console.log(min);