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

async function retry(fn, retries = 3, delay = 1000) {
  //retry = 3 delay = 500
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt}`);
      const result = await fn();
      console.log(`succeeded on attempt ${attempt}`);
      return result;
    } catch (error) {
      console.log(`Attemp ${attempt} failed: ${error.message}`);
      if (attempt === retries) {
        throw new Error(`Failed after ${retries} `);
      }
      console.log(`Waiting for ${delay} ms before retry ...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// simulate an operation that fails for the first 2 times, then succeeds
function createFlakyOperation() {
  let callCount = 0;
  return function () {
    callCount++;
    if (callCount <= 2) {
      return simulateAsync(`Call-${callCount}`, 300, true); // fail
    }
    return simulateAsync(`Call-${callCount}`, 300, false); // success
  };
}

async function demoRetry() {
  console.log("retyr pattern");

  const flaky = createFlakyOperation();
  try {
    const result = await retry(flaky, 2, 500);
    console.log("final result", result);
  } catch (error) {
    console.log("gave up", error.message);
  }
}

demoRetry();
