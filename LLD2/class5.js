// // // // const prices = [200, 450, 130, 870, 55];

// // // // const discounted = [];

// // // // for (let i = 0; i < prices.length; i++) {
// // // //   discounted.push(prices[i] * 0.9);
// // // // }

// // // // console.log(discounted);

// // // // // scenario 2 - filter price above 200

// // // // const expensive = [];

// // // // for (let i = 0; i < prices.length; i++) {
// // // //   if (prices[i] > 200) {
// // // //     expensive.push(prices[i]);
// // // //   }
// // // // }

// // // // console.log(expensive);

// // // // // scenario - 3

// // // // let total = 0;

// // // // for (let i = 0; i < prices.length; i++) {
// // // //   total = total + prices[i];
// // // // }

// // // // console.log(total);

// // // // function add(a, b) {
// // // //   return a + b;
// // // // }

// // // // function multiply(a, b) {
// // // //   return a * b; // return 15
// // // // }

// // // function compute(operation, x, y) {
// // //   // operation = multiply
// // //   // operation = add
// // //   // return add(x, y);
// // //   // some other operations happening before the call
// // //   return operation(x, y);
// // // }

// // // console.log(compute(add, 5, 3)); // 1st - 8
// // // console.log(compute(multiply, 5, 3));

// // // // /**
// // // //  * First class citizens
// // // //  */

// // function processArray(array, action) {
// //   // action - shout
// //   for (let i = 0; i < array.length; i++) {
// //     action(array[i]); // shout(apple) , shout(banana) , shout(cherry)
// //   }
// // }

// // const fruits = ["apple", "banana", "cherry"];

// // // const print = function (fruit) {
// // //   console.log(" i like ", fruit);
// // // };
// // processArray(fruits, function (fruit) {
// //   // anonymous functions as callbacks
// //   console.log(" i like ", fruit);
// // });

// // function shout(item) {
// //   console.log(item.toUpperCase() + "!!!");
// // }

// // console.log(shout("soham"));

// // processArray(fruits, shout);

// const radii = [2, 4, 6, 8];

// /**
//  *
//  * diameter = 2r
//  * circumference - 2 pi r
//  * area = pi r^2
//  */

// const diameters = [];

// for (let i = 0; i < radii.length; i++) {
//   diameters.push(radii[i] * 2);
// }

// const circumference = [];
// for (let i = 0; i < radii.length; i++) {
//   circumference.push(2 * Math.PI * radii[i]);
// }

// const areas = [];
// for (let i = 0; i < radii.length; i++) {
//   areas.push(Math.PI * radii[i] * radii[i]);
// }

// function calculate(radii, logic) {
//   const result = [];

//   for (let i = 0; i < radii.length; i++) {
//     result.push(logic(radii[i]));
//   }
//   return result;
// }

// function getDiameter(radius) {
//   // pure function
//   return 2 * radius;
// }

// function getCircumference(radius) {
//   return 2 * Math.PI * radius;
// }

// function getArea(radius) {
//   return Math.PI * radius * radius;
// }

// console.log(calculate(radii, getDiameter));
// console.log(calculate(radii, getArea));
// console.log(calculate(radii, getCircumference));

// let taxRate = 0.25;
// function calculateTax(price) {
//   // impure
//   console.log(taxRate);
//   return price * taxRate;
// }

const prices = [200, 450, 130, 870, 55];

const discounted = [];

for (let i = 0; i < prices.length; i++) {
  discounted.push(prices[i] * 0.9);
}

// console.log(discounted);

const discounted2 = prices.map(function (price) {
  return price * 0.9;
});

// console.log(discounted);
// console.log(discounted2);

// FILTER

const products = [
  { name: "Ipad", price: 120000, inStock: true },
  { name: "Iphone", price: 80000, inStock: false },
  { name: "Monitor", price: 30000, inStock: true },
  { name: "Magic Mouse", price: 9000, inStock: true },
];

const productNames = products.map(function (product) {
  return product.name;
});

// // // // const expensive = [];

// // // // for (let i = 0; i < prices.length; i++) {
// // // //   if (prices[i] > 200) {
// // // //     expensive.push(prices[i]);
// // // //   }
// // // // }

const prices2 = [200, 500, 150, 50, 80];

const expensive = prices2.filter(function (price) {
  return price >= 200;
});

// console.log(productNames);
// console.log(expensive);

const available = products.filter(function (product) {
  return product.inStock;
});

// console.log(available);

// Reduce
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

// console.log(total);

const total2 = prices.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// console.log(total2);

/**
 *
 * sum of all products that are in stocl
 *
 * 1. filter
 * 2. map -> array of prices
 * 3. reduce
 */

const totalInStock = products
  .filter(function (product) {
    return product.inStock;
  })
  .map(function (product) {
    return product.price;
  })
  .reduce(function (total, price) {
    return total + price;
  }, 0);

console.log(totalInStock);

const fns = [];
for (let i = 1; i <= 3; i++) {
  fns.push(function () {
    return i;
  });
}
// i = 4
console.log(fns0); //4
/**
 * function () {
    return i;
  }
 */
console.log(fns1); //4
/**
 * function () {
    return i;
  }
 */
console.log(fns2); //4
/**
 * function () {
    return i;
  }
 */
