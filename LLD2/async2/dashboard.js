function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("user data fetched");
    }, 2000);
  });
}
function fetchAnalytics() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("analytics data loaded");
    }, 3000);
  });
}
function fetchActivity() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("activity summary raeady");
    }, 1500);
  });
}

async function loadDashBoard() {
  console.time("dashboard");
  try {
    console.log("loading dashboard ...");
    const user = await fetchUser();
    console.log(user);

    const analytics = await fetchAnalytics();
    console.log(analytics);

    const activity = await fetchActivity();
    console.log(activity);

    console.log("dashboard loaded successfull");
  } catch (err) {
    console.log(err);
  }
  console.timeEnd("dashboard");
}
loadDashBoard();

async function loadDashBoard2() {
  console.time("dashboard2");
  try {
    console.log("loading dashboard ...");
    const user = await fetchUser();
    console.log(user);

    const analyticsPromise = fetchAnalytics();
    const activityPromise = fetchActivity();

    const analytics = await analyticsPromise;
    const activity = await activityPromise;

    console.log(activity);
    console.log(analytics);

    console.log("dashboard loaded successfull");
  } catch (err) {
    console.log(err);
  }
  console.timeEnd("dashboard2");
}
loadDashBoard2();

async function loadDashBoard3() {
  console.time("dashboard3");
  try {
    console.log("loading dashboard ...");
    const user = await fetchUser();
    console.log(user);

    const analyticsPromise = fetchAnalytics();
    const activityPromise = fetchActivity();

    // step to wait for both promises to resolve
    const [analytics, activity] = await Promise.all([
      analyticsPromise,
      activityPromise,
    ]);

    console.log(activity);
    console.log(analytics);

    console.log("dashboard loaded successfull");
  } catch (err) {
    console.log(err);
  }
  console.timeEnd("dashboard3");
}
loadDashBoard3();
