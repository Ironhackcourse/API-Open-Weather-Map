export function renderWeather(data) {
  const cityElement = document.getElementById("cityName");
  const tempElement = document.getElementById("currentTemp");
  const conditionElement = document.getElementById("conditionText");
  const iconElement = document.getElementById("weatherIcon");

  if (cityElement) {
    cityElement.textContent = data.name + ", " + data.country;
  }

  if (tempElement) {
    tempElement.textContent = data.temperature + "°C";
  }

  if (conditionElement) {
    conditionElement.textContent = data.description;
  }

  if (iconElement) {
    iconElement.src = data.iconUrl;
    iconElement.alt = data.description;
  }
}