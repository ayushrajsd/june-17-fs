// "use strict";

// console.log("scenario 1");
// console.log(this); // module exort object module.exports = {}

// // console.log(globalThis); // global keyword similar to window in browser
// // console.log(globalThis === this);

// console.log("scenario 2");
// function fn() {
//   console.log(this); // global object and undef in strict mode
// }
// fn();

// console.log("scenario 3");
// const obj = {
//   name: "asd",

//   fn: function () {
//     console.log(this);
//   },
// };

// // obj.fn();

// console.log("scenarion 4");
// const obj2 = {
//   name: "asd",

//   fn: function () {
//     console.log("1", this);
//     const nestedFn = function () {
//       console.log("2", this);
//     };
//     nestedFn();
//   },
// };

// // obj2.fn();

// var car = {
//   brand: "Tesla",
//   describe: function () {
//     console.log(this); // car
//     function inner() {
//       console.log(this.brand); // this -> globalThis undef
//     }
//     inner();
//   },
// };
// // car.describe();
"use strict";
function greet() {
  console.log(this.name); // this -> undefined.name
}
const p1 = { name: "Maya", hello: greet };
p1.hello(); // Maya
const fn = p1.hello; // fn -> greet()
fn();
