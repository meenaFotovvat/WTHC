let weather = {
    paris: {
      temp: 19.7,
      humidity: 80,
    },
    tokyo: {
      temp: 17.3,
      humidity: 50,
    },
    lisbon: {
      temp: 30.2,
      humidity: 20,
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100,
    },
    oslo: {
      temp: -5,
      humidity: 20,
    },
  };
  
  function convertToF(centigrade) {
    let fahrenheit = (centigrade * 9) / 5 + 32;
    return Math.round(fahrenheit);
  }
  
  function convertToC(fahrenheit){
    
  }
  // let userCity = prompt("Enter a city?").toLowerCase();
  
  // if (userCity in weather) {
  //   alert(
  //     `It is currently ${Math.round(weather[userCity].temp)}°C (${convertToF(
  //       weather[userCity].temp
  //     )}°F) in ${userCity} with a humidity of ${
  //       weather[userCity].humidity
  //     }%.`
  //   );
  // } else {
  //   alert(
  //     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${userCity}`
  //   );
  // }