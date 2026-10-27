const API_KEY = "fa7c8047237217edcebb0034f259ddeb";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export function fetchWeatherData(lat = 41.4856, lon = 2.0327) {
  const url = BASE_URL + "?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + API_KEY + "&lang=es";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather API Error: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return {
        name: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        description: data.weather[0].description,
        iconUrl: "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      };
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      throw error;
    });
}