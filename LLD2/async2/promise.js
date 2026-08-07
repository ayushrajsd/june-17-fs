// const chaiPromise = new Promise(function (resolve, reject) {
//   // param -> executor function
//   console.log("Chai making started");
//   setTimeout(function () {
//     resolve("Chai is ready");
//   }, 3000);
// });

// console.log(chaiPromise);

// const chaiPromise = new Promise(function (resolve, reject) {
//   // param -> executor function
//   console.log("Chai making started");
//   setTimeout(function () {
//     let chaiReady = false;
//     if (chaiReady) {
//       resolve("chai is ready");
//     } else {
//       reject("Sorry, cannot be made today");
//     }
//     // resolve("Chai is ready");
//   }, 3000);
// });

// console.log(chaiPromise);

const chaiPromise = new Promise(function (resolve, reject) {
  // param -> executor function
  console.log("Chai making started");
  setTimeout(function () {
    // if (chaiReady) {
    //   resolve("chai is ready");
    // } else {
    //   reject("Sorry, cannot be made today");
    // }
    // resolve("Chai is ready");
    reject("Sorry, cant make chai");
  }, 3000);
});

console.log("befire then");
console.log(chaiPromise);

chaiPromise
  .then(function (value) {
    console.log("fulfilled", value);
  })
  .catch(function (err) {
    console.log("rejected", err);
  })
  .finally(function () {
    console.log("chai matter closed");
  });

console.log("after then");
