// function submit(event) {
//   event.preventDefault();
//   let userCity = document.querySelector("#user-searched");
//   let city = document.querySelector("#search-input").value;
//   userCity.innerHTML = city;
// }

// function formatDate(date) {
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   return `${days[date.getDay()]} ${date.getHours()}:${date.getMinutes()} PM`;
// }

// let searchCity = document.querySelector("#search");
// searchCity.addEventListener("submit", submit);
// let date = document.querySelector("#date");
// date.innerHTML = formatDate(new Date());

function convertToFarenheit(event) {
  let tempValue = document.querySelector("#temp-value").innerHTML;
  // if (event.target.innerHTML !== "°C") {
  const farenheit = Math.round((tempValue * 9) / 5 + 32);
  console.log("farenheit", farenheit);
  // } else {
  //   console.log("herectf");
  //   return;
  // }
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

let centigrade = document.querySelector("#centigrade");
centigrade.addEventListener("click", convertToCentigrade);
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToFarenheit);
