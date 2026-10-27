import { fetchWeatherData } from "./weatherService.js";
import { renderWeather } from "./ui.js";

document.addEventListener("DOMContentLoaded", function () {
  fetchWeatherData(41.4856, 2.0327)
    .then((data) => {
      renderWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
    });
});