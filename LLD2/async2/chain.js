function makeChai() {
  return new Promise(function (resolve, reject) {
    console.log("making chai");
    setTimeout(function () {
      resolve("chai is ready");
    }, 2000);
  });
}
function toastBread(message) {
  // message -> chai success result
  return new Promise(function (resolve, reject) {
    console.log("received ", message);
    console.log("toasting bread ");
    setTimeout(function () {
      reject("bread is toasted");
    }, 1000);
  });
}
function serveBreakfast(message) {
  return new Promise(function (resolve, reject) {
    console.log("received ", message);
    console.log("serving breakfast ");
    setTimeout(function () {
      resolve("breakfast is served");
    }, 500);
  });
}

makeChai() // returns a promise
  .then(function (chaiResult) {
    console.log(chaiResult);
    return toastBread(chaiResult);
    // return undefined;
  })
  .then(
    function (breadResult) {
      console.log(breadResult); // undefined
      return serveBreakfast(breadResult);
    },
    // function (err) {
    //   console.log("i caught this", err);
    //   throw err;
    // },
  )
  .then(function (breakfastResult) {
    console.log(breakfastResult);
  })
  .catch(function (error) {
    console.log("Something went wrong", error);
  });
