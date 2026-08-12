function simulateAsync(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${name} failed`));
      } else {
        resolve(`${name} completed in ${delay}`);
      }
    }, delay);
  });
}

async function test() {
  const result = await simulateAsync("FileRead", 1000);
  console.log(result);
}

// test();

async function demoAll_sucess() {
  console.log("---Promise.all succeess variation");
  console.log("starting all operations");

  const results = await Promise.all([
    simulateAsync("CPU Log", 2000),
    simulateAsync("Memory Log", 1000),
    simulateAsync("Network Log", 1500),
  ]);

  console.log("all done");
  console.log(results);
}

// demoAll_sucess();

async function demoAll_failed() {
  try {
    console.log("---Promise.all failed variation");
    console.log("starting all operations");

    const results = await Promise.myall([
      simulateAsync("CPU Log", 2000),
      simulateAsync("Memory Log", 1000, true),
      simulateAsync("Network Log", 1500),
    ]);

    console.log("all done");
    console.log(results);
  } catch (error) {
    console.log(error.message);
  }
}

// demoAll_failed();

async function demoAllSettled() {
  console.log("---Promise.allSettled");
  console.log("starting all operations");

  const results = await Promise.allSettled([
    simulateAsync("CPU Log", 2000),
    simulateAsync("Memory Log", 1000, true), // fails
    simulateAsync("Network Log", 1500),
    simulateAsync("Disk Log", 500, true), // fails
  ]);

  console.log("all settled");
  //   console.log(results);
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(` [${index}] SUCCESS: ${result.value}`);
    } else {
      console.log(`[${index}] FAILED: ${result.reason.message}`);
    }
  });
}

// demoAllSettled();

async function demoRace_fastestWins() {
  try {
    console.log("---Promise.race success variation");
    console.log("starting all operations");

    const results = await Promise.race([
      simulateAsync("slow server", 3000),
      simulateAsync("medium server", 2000, true),
      simulateAsync("fast server", 1000),
    ]);

    console.log("all done");
    console.log(results);
  } catch (error) {
    console.log(error.message);
  }
}

// demoRace_fastestWins();

async function demoRace_fastestFail() {
  try {
    console.log("---Promise.race failed variation");
    console.log("starting all operations");

    const results = await Promise.race([
      simulateAsync("slow server", 3000),
      simulateAsync("medium server", 2000, true),
      simulateAsync("brokeb server", 500, true),
    ]);

    console.log("all done");
    console.log(results);
  } catch (error) {
    console.log(error.message);
  }
}

// demoRace_fastestFail();

async function demoAny_firstSuccess() {
  try {
    console.log("---Promise.any success variation");
    console.log("starting all operations");

    const result = await Promise.any([
      simulateAsync("server A", 3000),
      simulateAsync("server B", 1000, true), // fails
      simulateAsync("server C", 500, true), // fails
      simulateAsync("server D", 2000),
    ]);

    console.log("all done");
    console.log("first success", result);
  } catch (error) {
    console.log(error.message);
  }
}

// demoAny_firstSuccess();

async function demoAny_AllFail() {
  try {
    console.log("---Promise.any failed variation");
    console.log("starting all operations");

    const result = await Promise.any([
      simulateAsync("server A", 3000, true),
      simulateAsync("server B", 1000, true), // fails
      simulateAsync("server C", 500, true), // fails
      simulateAsync("server D", 2000, true),
    ]);

    console.log("all done");
    console.log("first success", result);
  } catch (error) {
    debugger;
    console.log(error.message);
    console.log(
      "Individual errors",
      error.errors.map((e) => e.message),
    );
  }
}

demoAny_AllFail();
