const fs = require("fs");

// const p1 = fs.promises.readFile("f1.txt", "utf-8");
// console.log(p1);

// p1.then(function (data) {
//   console.log(data);
//   return fs.promises.readFile("f2.txt", "utf-8");
// })
//   .then(function (data2) {
//     console.log(data2);
//     return fs.promises.readFile("f3.txt", "utf-8");
//   })
//   .then(function (data3) {
//     console.log(data3);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const p1 = fs.promises.readFile("f1.txt", "utf-8");
const p2 = fs.promises.readFile("f2.txt", "utf-8");
const p3 = fs.promises.readFile("f3.txt", "utf-8");

p1.then(function (data) {
  console.log(data); // file 1 data - 5 s
});

p2.then(function (data) {
  console.log(data);
});

p3.then(function (data) {
  console.log(data);
});

console.log("A");

setTimeout(function () {
  console.log("B");
}, 0);

Promise.resolve().then(function () {
  console.log("C");
});

console.log("D");

Promise.resolve("X")
  .then(function (val) {
    // val -x
    console.log(val);
    return "Y";
  })
  .then(function (val) {
    // val -y
    console.log(val);
  });

console.log("1");
setTimeout(function () {
  console.log("2");
}, 0);
setTimeout(function () {
  console.log("21");
}, 0);
Promise.resolve().then(function () {
  console.log("3");
});
console.log("4");

// p1 - 3s
// p2 - 2s
// p3- 1s

// serially - 3+2+1 = 6s
// concurrently = 3s
