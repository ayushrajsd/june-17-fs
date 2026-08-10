// const chaiResult = await makeChai();
// console.log(chaiResult)

// const breadResult = await toastBread(chaiResult)
// console.log(breadResult)

// const serveBreakFastResult = await serveBreakfast(breadResult)
// // some processing

// async function fetchData() {
//   return "data";// Promise.resolve("data")
// }

// const result = fetchData();
// console.log(result);

// async function getNumber() {
// await ...
//   return 43;
//   // return Promise.resolve("already a Promise");
// }
// console.log(getNumber());

// getNumber().then(function (val) {
//   console.log(val);
// });

// const p = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve("4. Promise resolved");
//   }, 2000);
// });

// async function handlePromise() {
//   console.log("1. before await");
//   const value = await p;
//   console.log("2 after await");
//   console.log(value);
// }

// handlePromise();
// console.log("3. outside the async function");

// const p1 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve("first Promise resolved");
//   }, 3000);
// });
// const p2 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve("second Promise resolved");
//   }, 1000);
// });

// p1 - 3s
// p2 - 1s // settled

// async function test() {
//   console.log("1 start");

//   const val1 = await p1; // 1s ( p1 wip, p2 - settled) , 2s( p1 wip , p2 settled) , (3s p1 settled)
//   console.log("2", val1);

//   const val2 = await p2; // no additional wait here
//   console.log("3", val2);

//   console.log("4. end");
// }

// test();

// async function foo() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }
// foo();
// console.log("3");
