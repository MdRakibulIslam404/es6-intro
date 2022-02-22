const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopnow charini`;

const multiline = 'this is my first line \n' +
    'this is my second line \n' +
    'third line txt \n' +
    'fourth line txt';
// console.log(multiline);

const multilineNew = `this is first line
this is second line
this is third line
this is fourth line`

const friends = ["abul", "babul", "kabul", "sabul"];
const first = "mamum";
const second = "cfhaowdhory";

const count = 5;
const old = '<h3 class="friend-name">friend-4</h3>';
const old2 = '<h3 class="friend-name">friend-' + count + '</h3>';
// const new1 = `<h3 class="friend-name">friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">friend-${friends.length}</h3>`;
console.log(new1);

const fullOld = "This person is" + first + " " + second;
const fullNew = `This person is ${first} ${second}. Has money ${friends.length * 500}`;
console.log(fullNew);