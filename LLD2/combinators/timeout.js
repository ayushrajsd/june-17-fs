function simulateAsync(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${name} failed`));
      } else {
        resolve(`${name} completed in ${delay}`);
      }
    }, delay); //. 2s
  });
}

function withTimeout(promise, ms) {
  const timeout = new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Operation timed out after ${ms} ms`));
    }, ms);
  });
  return Promise.race([promise, timeout]);
}

async function demoTimeout() {
  // case 1: operation is fast
  //   try {
  //     const result = await withTimeout(simulateAsync("fast read", 1000), 2000); // 2 sec deadLine
  //     console.log(result);
  //   } catch (err) {}

  // case 2: operation is slow

  try {
    const result = await withTimeout(simulateAsync("slow read", 5000), 2000); // 2 sec deadLine
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

demoTimeout();
