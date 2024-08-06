document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-input").value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the response data to the console
      displayResults(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayResults(results) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Clear previous results

  results.forEach((item) => {
    const show = item.show;
    const showElement = document.createElement("div");
    showElement.classList.add("movie");
    showElement.innerHTML = `
            <img src="${
              show.image ? show.image.medium : "placeholder.jpg"
            }" alt="${show.name}">
            <h2>${show.name}</h2>
            <p>${show.premiered ? show.premiered.split("-")[0] : "N/A"}</p>
            <button onclick="fetchShowDetails(${show.id})">More Info</button>
        `;
    resultsContainer.appendChild(showElement);
  });
}

function fetchShowDetails(showID) {
  const url = `https://api.tvmaze.com/shows/${showID}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the response data to the console
      displayShowDetails(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function displayShowDetails(show) {
  const resultsContainer = document.getElementById("results-container");
  const showDetailElement = document.createElement("div");
  showDetailElement.classList.add("movie-detail");
  showDetailElement.innerHTML = `
        <img src="${show.image ? show.image.medium : "placeholder.jpg"}" alt="${
    show.name
  }">
        <h2>${show.name}</h2>
        <p><strong>Year:</strong> ${
          show.premiered ? show.premiered.split("-")[0] : "N/A"
        }</p>
        <p><strong>Rated:</strong> ${
          show.rating.average ? show.rating.average : "N/A"
        }</p>
        <p><strong>Released:</strong> ${
          show.premiered ? show.premiered : "N/A"
        }</p>
        <p><strong>Runtime:</strong> ${
          show.runtime ? show.runtime + " minutes" : "N/A"
        }</p>
        <p><strong>Genre:</strong> ${
          show.genres.length ? show.genres.join(", ") : "N/A"
        }</p>
        <p><strong>Summary:</strong> ${show.summary ? show.summary : "N/A"}</p>
    `;
  resultsContainer.innerHTML = ""; // Clear previous results
  resultsContainer.appendChild(showDetailElement);
}
