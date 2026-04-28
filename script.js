const apiKey = "ff23ba4b0cb3c26b2600b066e1b696da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");

const weather = document.querySelector(".weather");
const error = document.querySelector(".error");
const defaultBox = document.querySelector(".default");

async function checkWeather(city) {
  if (city === "") return;

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (!response.ok) {
    error.style.display = "block";
    weather.style.display = "none";
    defaultBox.style.display = "block";
    return;
  }

  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°C";

  document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%";

  document.querySelector(".wind").innerHTML =
    data.wind.speed + " km/h";
    // roshan

  document.querySelector(".desc").innerHTML =
    data.weather[0].description;

  const icon = document.querySelector(".weather-icon");

  const main = data.weather[0].main;

  if (main === "Clouds") icon.src = "images/clouds.png";
  else if (main === "Clear") icon.src = "images/clear.png";
  else if (main === "Rain") icon.src = "images/rain.png";
  else if (main === "Drizzle") icon.src = "images/drizzle.png";
  else if (main === "Mist") icon.src = "images/mist.png";

  /* 🔥 SWITCH UI */
  weather.style.display = "block";
  defaultBox.style.display = "none";
  error.style.display = "none";
}

/* CLICK */
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
  // ritesh
});

/* ENTER */
searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value.trim());
  }
});

// ------------------------------------------------------------
 
getForecast(city);