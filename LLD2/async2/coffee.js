function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("order placed for coffee");
    } else {
      reject("Sorry, we only serve coffee");
    }
  });
}

function processOrder(orderMessage) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("processed and served", orderMessage);
    }, 1500);
  });
}

function generateBill(processMessage) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("bill geneeated");
    }, 1000);
  });
}

placeOrder("coffee")
  .then(function (order) {
    console.log(order);
    return processOrder(order);
  })
  .then(function (processed) {
    console.log(processed);
    return generateBill(processOrder);
  })
  .then(function (bill) {
    console.log(bill);
  })
  .catch(function (err) {
    console.log(err);
  });

async function serveCoffee() {
  try {
    const order = await placeOrder("tea");
    console.log(order);
    const processed = await processOrder(order);
    console.log(processed);
    const bill = await generateBill(processed);
    console.log(bill);
  } catch (err) {
    console.log("catching ", err);
  } finally {
    console.log("finally block executed");
  }
}

serveCoffee();
