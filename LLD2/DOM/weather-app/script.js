const temperaturField = document.querySelector(".temp");
const cityField = document.querySelector(".city");
const timeField = document.querySelector(".localtime");
const conditionIcon = document.querySelector(".weather-icon");
const conditionField = document.querySelector(".condition");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");

/**
 *
 * async / await
 *
 */

// async function fetchData(){
//     // const data = await call api
//     // process further
// }

const API_KEY = "5d9564dfb4cc4b00bbe104259242003";

async function fetchWeatherData(city) {
  try {
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    console.log("fetched data", data);
    updateDOM(data);
  } catch (error) {
    console.error("Error fetching data", error.message);
    alert("error fetching data");
  }
}

fetchWeatherData("Mumbai");

function formatTime(localTime) {
  console.log(localTime);
  const [date, time] = localTime.split(" "); // array detructuring
  //   console.log(date);
  //   console.log(time);
  //   const date = arr[0];
  //   const time = arr[1];
  const day = getDay(date);
  return `${time} ${day}, ${date}`;
}

function getDay(dateString) {
  // 27 july 2026
  const dayIndex = new Date(dateString).getDay();
  const days = ["Sunday", "Monday", "Tuesday"];
  return days[dayIndex];
}

function updateDOM(data) {
  console.log(data);
  //   const current = data.current;
  //   const location = data.location;
  const { current, location } = data;
  temperaturField.textContent = current.temp_c;
  cityField.textContent = location.name;
  timeField.textContent = formatTime(location.localtime);
  conditionField.textContent = current.condition.text;
  conditionIcon.src = `https:${current.condition.icon}`;
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const city = searchInput.value.trim();
  if (city === "") {
    alert("Please enter city name");
    return;
  }
  fetchWeatherData(city);
  searchInput.value = "";
});
