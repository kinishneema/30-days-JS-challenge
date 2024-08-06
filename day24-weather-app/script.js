document.getElementById("search-button").addEventListener("click", function () {
  const city = document.getElementById("search-input").value;
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        displayWeather(data);
      } else {
        throw new Error("City not found");
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayWeather(data) {
  const weatherContainer = document.getElementById("weather-container");
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherContainer.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${iconUrl}" alt="${data.weather[0].description}">
      <p>${data.weather[0].description}</p>
      <p>${Math.round(data.main.temp)} &deg;C</p>
  `;
}
