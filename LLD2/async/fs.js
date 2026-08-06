const fs = require("fs");

// console.log("1. before reading");

// // const data = fs.readFileSync("f1.txt", "utf-8");
// // console.log("file content", data);

// fs.readFile("f1.txt", "utf-8", function (err, data) {
//   console.log(err);
//   if (err) {
//     console.log("something went wrong", err.message);
//     return;
//   }
//   console.log("2. file content", data);
// });

// console.log("3. after reading");

// let content; // undefined
// fs.readFile("f1.txt", "utf-8", function (error, data) {
//   content = data;
// });
// console.log(content);

fs.readFile("f1.txt", "utf-8", function (err, data) {
  console.log("File 1: ", data);

  fs.readFile("f2.txt", "utf-8", function (err, data) {
    console.log("File 2: ", data);

    fs.readFile("f3.txt", "utf-8", function (err, data) {
      console.log("File 3: ", data);
      console.log("all reads started");
    });
  });
});
