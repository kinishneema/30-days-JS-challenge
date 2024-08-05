document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "YOUR_API_KEY";
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
      fetchWeather(city, apiKey);
      fetchForecast(city, apiKey);
    } else {
      alert("Please enter a city name");
    }
  });

  function fetchWeather(city, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        displayWeather(data);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }

  function displayWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${iconUrl}" alt="Weather icon">
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "YOUR_API_KEY";
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
      fetchWeather(city, apiKey);
      fetchForecast(city, apiKey);
    } else {
      alert("Please enter a city name");
    }
  });

  function fetchWeather(city, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        displayWeather(data);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }

  function fetchForecast(city, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        displayForecast(data);
      })
      .catch((error) => console.error("Error fetching forecast data:", error));
  }

  function displayWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${iconUrl}" alt="Weather icon">
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
  }

  function displayForecast(data) {
    const forecastInfo = document.getElementById("forecast-info");
    forecastInfo.innerHTML = ""; // Clear previous forecast data

    for (let i = 0; i < data.list.length; i += 8) {
      const dayData = data.list[i];
      const date = new Date(dayData.dt_txt).toDateString();
      const temp = (dayData.main.temp - 273.15).toFixed(2);
      const condition = dayData.weather[0].description;
      const iconUrl = `http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`;

      const forecastItem = document.createElement("div");
      forecastItem.className = "forecast-item";
      forecastItem.innerHTML = `
                <h3>${date}</h3>
                <img src="${iconUrl}" alt="Weather icon">
                <p>Temperature: ${temp}°C</p>
                <p>Condition: ${condition}</p>
            `;
      forecastInfo.appendChild(forecastItem);
    }
  }
});
function displayForecast(data) {
  const forecastInfo = document.getElementById("forecast-info");
  forecastInfo.innerHTML = "";
}
