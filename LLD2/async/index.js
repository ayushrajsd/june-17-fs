// console.log("first");
// console.log("second");
// console.log("third");

console.log("script starts");

setTimeout(function timerOne() {
  console.log("timer 1 runs");
}, 0);

setTimeout(function timerTwo() {
  console.log("timer 2 runs");
}, 0);

function firstFunction() {
  console.log("first function starts");
  secondFunction();
  console.log("first fn ends");
}

function secondFunction() {
  console.log("second functions");
}

firstFunction();

console.log("script ends");
