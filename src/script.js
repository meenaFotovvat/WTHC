const apiKey = "4cb19564dd73dc91dfd4d18e353a244b";
let unit = "metric";

function displayWeatherInfo(response) {
  console.log(response.data);
  let temp = Math.round(response.data.main.temp);
  let city = response.data.name;
  let humidity = response.data.main.humidity;
  let wind = Math.round(response.data.wind.speed);
  let description = response.data.weather[0].description;

  let userCity = document.querySelector("#user-searched");
  userCity.innerHTML = city;

  let tempValue = document.querySelector("#temp-value");
  tempValue.innerHTML = temp;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = wind;

  let descElement = document.querySelector("#description");
  descElement.innerHTML = description;
}

function search(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(displayWeatherInfo);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  search(city);
}

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[date.getDay()]} ${hours}:${minutes}`;
}

function positionInfo(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log("lat", lat);
  console.log("lon", lon);
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(displayWeatherInfo);
}

function navigatorInfo(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(positionInfo);
}

let date = document.querySelector("#date");
date.innerHTML = formatDate(new Date());

let searchCity = document.querySelector("#search");
searchCity.addEventListener("submit", handleSubmit);

let currentBtn = document.querySelector("#current-weather");
currentBtn.addEventListener("click", navigatorInfo);

search("New York");

// function convertToFarenheit(event) {
//   event.preventDefault();
//   let tempValue = document.querySelector("#temp-value");
//   tempValue.innerHTML = 90;
// }

// function convertToCentigrade(event) {
//   event.preventDefault();
//   let tempValue = document.querySelector("#temp-value");
//   tempValue.innerHTML = 32;
// }

// let centigrade = document.querySelector("#centigrade");
// centigrade.addEventListener("click", convertToCentigrade);

// let fahrenheit = document.querySelector("#fahrenheit");
// fahrenheit.addEventListener("click", convertToFarenheit);
