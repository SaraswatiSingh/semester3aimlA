// console.log("=====variables=====")
// var text ="something";
// console.log(text);
//  let name="saraswati";
//  let surname="singh";
//  console.log(name+ " " +surname);

// console.log("\n=====if else=====");
// var a=40;
// var b=30;

// if (a>b){
//     console.log("A is greater ,value of A =",a);

// }
// else{
//      console.log("B is greater ,value of B=",a);
// 


console.log("\n=====function=====");

function abes(){
    console.log("Welcome students");
    console.log("welcome to Node.js");

}
abes();

console.log("\n=====function with parameters=====");
function greet(fname,lname){
    console.log("hello",fname,lname);

}
greet("saraswati","singh");

console.log("\n=====function Return=====");

function add(x,y){
    return x+y;

}
var result=add(20,30);
console.log("sum",result);


console.log("\n=====Default arguments=====");
function fullName(fname ="ABES",lname = "Engineering College"){
    return fname +" " +lname;

}
let a=fullName;
console.log(a);
console.log(fullName("Saraswati ,singh"));

console.log("\n=====percentage=====");
function totalMarks(maths,english,physics){
    return maths + english + physics;

}
function percentage(total){
    return (total/300)*100;
}
var total =totalMarks(80,75,90);
console.log("Total Marks =" ,total);
console.log("percentage =",percentage(total) +"%")

console.log("\n=====Global variable=====");

var college ="saraswati singh"


console.log("\n=====local variable=====");


console.log("\n=====while loop=====");


onsole.log("\n=====Do while loop=====");
