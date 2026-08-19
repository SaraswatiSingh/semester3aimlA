console.log("===== Variables =====");

var text = "something";
console.log(text);

let name = "saraswati";
let surname = "singh";
console.log(name + " " + surname);


console.log("\n===== If Else =====");

var a = 40;
var b = 30;

if (a > b) {
    console.log("A is greater, value of A =", a);
}
else {
    console.log("B is greater, value of B =", b);
}


console.log("\n===== Function =====");

function abes() {
    console.log("Welcome students");
    console.log("Welcome to Node.js");
}

abes();


console.log("\n===== Function with Parameters =====");

function greet(fname, lname) {
    console.log("Hello", fname, lname);
}

greet("saraswati", "singh");


console.log("\n===== Function Return =====");

function add(x, y) {
    return x + y;
}

var result = add(20, 30);
console.log("Sum =", result);


console.log("\n===== Default Arguments =====");

function fullName(fname = "ABES", lname = "Engineering College") {
    return fname + " " + lname;
}

let fullname = fullName();
console.log(fullname);

console.log(fullName("Saraswati", "Singh"));


console.log("\n===== Percentage =====");

function totalMarks(maths, english, physics) {
    return maths + english + physics;
}

function percentage(total) {
    return (total / 300) * 100;
}

var total = totalMarks(80, 75, 90);

console.log("Total Marks =", total);
console.log("Percentage =", percentage(total) + "%");


console.log("\n===== Global Variable =====");

var college = "ABES Engineering College";
console.log(college);


console.log("\n===== Local Variable =====");

function test() {
    let message = "This is a local variable";
    console.log(message);
}

test();


console.log("\n===== While Loop =====");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


console.log("\n===== Do While Loop =====");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


console.log("\n===== Object =====");

let student = {
    studentid: 2345,
    name: "Saraswati Singh",
    section: "A"
};

console.log(student);


var total2 = totalMarks(95, 98, 92);

console.log("Total Marks =", total2);
console.log("Percentage =", percentage(total2) + "%");


console.log("\n===== Array =====");

let arr = [1, 2, 3];

var sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum of array =", sum);


console.log("\n===== 2D Array =====");

let list = [
    ["saraswati", "aiml", "btech"],
    ["saraswati", "aiml", "btech"]
];

console.log(list);


console.log("\n===== Student Object =====");

let studentt = {
    name: "saraswati",
    id: 45,
    branch: "aiml"
};

console.log(studentt);
console.log(studentt.name);


console.log("\n===== String Methods =====");

let message = "javascript is easy. javascript is powerful";

console.log(
    "Last index =",
    message.lastIndexOf("javascript")
);
let studentname = "saraswati";


console.log(studentname.toUpperCase());
console.log(studentname.toLowerCase());


let fname = "Saraswati";
let lname = "Singh";

let fName = fname.concat(" ", lname);

console.log(fullName);

// accessing array elements
let array = ["10", "20", "30", "40"];

console.log([0]);  
console.log([1]);  
console.log([2]);  
console.log([3]);  
 /// array methods
arr.push(50);

console.log(arr);

// get date
let date=new Date();
console.log(date);
console.log(date.getDay()); 
   


console.log(Math.pow(2,4));
console.log(Math.floor(2.4));
console.log(Math.max(2,4));
console.log(Math.min(2,4));


let math = [35, 67, 48];

console.log(Math.max(...math));