// // // console.log(greeting)
// // // var greeting = "Hello"; // redeclaration, reassignment

// // // // var greeting = "asdasd"
// // // let name = "Abhishek";
// // // // greeting = "asdasd";
// // // const age = 25;
// // // sayHello();

// // // function sayHello() {
// // //   console.log(greeting + " , " + name);
// // // }

// // // console.log(x);
// // // var x = 10;

// // debugger;
// // let y = 10;
// // console.log(y);

// // // sayHi();

// // // function sayHi() {
// // //   console.log("Hi ");
// // // }

// greet("World");

// function greet(name) {
//   // function declaration
//   console.log(`Hello ${name}`);
// }

// sayBye(); // udenfined
// var sayBye = function () {
//   // function expression
//   console.log("Bye");
// };

// SCOPE

// function calculateTax(amount) {
//   var taxRate = 0.2;
//   var tax = amount * taxRate;
//   return tax;
// }

// var totalTax = calculateTax(100);
// console.log(totalTax);
// console.log(taxRate);

/**
 * 3 types of scope
 * 1. Global
 * 2. Function
 * 3. Block scope
 */

// var globalVar = "I am global";
// let globalLet = "I am also global";

// function showGlobal() {
//   console.log(globalVar);
//   console.log(globalLet);
// }

// showGlobal();

// console.log(globalLet);

// function myFunction() {
//   console.log(secret);
//   var secret = "You cant see me outside";
//   let alsoSecret = "Me neither";
//   console.log(secret); // fine
//   console.log(alsoSecret); // fine
// }

// myFunction();
// // console.log(secret); //
// console.log(alsoSecret); // fine

// if (true) {
//   var varVariable = "I escape blocks";
//   let letVariable = "I stay in block";
//   const constVariable = "I also stay";
// }

// console.log(varVariable);
// // console.log(letVariable);

// for (let i = 0; i < 3; i++) {
//   // loop
// }

// console.log(i);

// one -way
var outer = "outer";

function myFunc() {
  var middle = "middle";

  if (true) {
    let inner = "inner";
    console.log(outer);
    console.log(middle);
    // console.log(inner);
  }
  console.log(outer);
  console.log(middle);
  //   console.log(inner);
}
myFunc();
console.log(outer);

/**
 * inner scope overrides variables names from outer scope - variable shadowing
 *
 * SCOPE CHAIN
 * a. current scope
 * b. parent scope
 * c. global scope
 * d. reference error
 */

/**
 *
 * IMP: scope is determined at write time, not call time
 */

let name = "Global";

function greet() {
  console.log(`Hello, ${name}`); // lexical scoping
}

function wrapper() {
  let name = "Wrapper";
  greet();
}

wrapper();
