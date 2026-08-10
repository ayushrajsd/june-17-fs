console.log("1");

async function test() {
  console.log("2");
  await Promise.resolve();
  console.log("3");
}

test();

setTimeout(function () {
  console.log("4");
}, 0);

console.log("5");
