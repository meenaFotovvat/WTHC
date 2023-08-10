function submit(event) {
  event.preventDefault();
  let userCity = document.querySelector("#user-searched");
  let city = document.querySelector("#search-input").value;
  userCity.innerHTML = city;
}

function formatDate(date) {
  let hours = date.getHours()
  if (hours < 10) {
    hours = `0${hours}`
  }
  let minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
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

//1
let date = document.querySelector("#date");
date.innerHTML = formatDate(new Date());

//2
let searchCity = document.querySelector("#search");
searchCity.addEventListener("submit", submit);

function convertToFarenheit(event) {
  let tempValue = document.querySelector("#temp-value").innerHTML;
  if (event.target.innerHTML !== "°C") {
  const farenheit = Math.round((tempValue * 9) / 5 + 32);
  console.log("farenheit", farenheit);
  } else {
    console.log("herectf");
    return;
  }
}

function convertToCentigrade(event) {
  // if (event.target.innerHTML === "°F") {
  let tempValue = document.querySelector("#temp-value").innerHTML;
  const centigrade = Math.round(((tempValue - 32) * 5) / 9);
  console.log("centigrade", centigrade);
  // } else {
  //   console.log("hereftc");
  //   return;
  // }
}

//3
let centigrade = document.querySelector("#centigrade");
centigrade.addEventListener("click", convertToCentigrade);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToFarenheit);
