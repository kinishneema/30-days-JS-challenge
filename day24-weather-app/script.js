document.getElementById("search-button").addEventListener("click", function () {
  const city = document.getElementById("search-input").value;
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `${proxy}https://www.metaweather.com/api/location/search/?query=${city}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const woeid = data[0].woeid;
        return fetch(
          `${proxy}https://www.metaweather.com/api/location/${woeid}/`
        );
      } else {
        throw new Error("City not found");
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the response data to the console
      displayWeather(data);
      displayForecast(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayWeather(data) {
  const weatherContainer = document.getElementById("weather-container");
  const today = data.consolidated_weather[0];
  const iconUrl = `https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg`;
  weatherContainer.innerHTML = `
      <h2>${data.title}</h2>
      <img src="${iconUrl}" alt="${today.weather_state_name}">
      <p>${today.weather_state_name}</p>
      <p>${Math.round(today.the_temp)} &deg;C</p>
  `;
}

function displayForecast(data) {
  const weatherContainer = document.getElementById("weather-container");
  const forecastHTML = data.consolidated_weather
    .slice(1)
    .map((day) => {
      const iconUrl = `https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`;
      return `
          <div>
              <p>${new Date(day.applicable_date).toDateString()}</p>
              <img src="${iconUrl}" alt="${day.weather_state_name}">
              <p>${day.weather_state_name}</p>
              <p>${Math.round(day.the_temp)} &deg;C</p>
          </div>
      `;
    })
    .join("");

  weatherContainer.innerHTML += `
      <h3>5-Day Forecast</h3>
      ${forecastHTML}
  `;
}
