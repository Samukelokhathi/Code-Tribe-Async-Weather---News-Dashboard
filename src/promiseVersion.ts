const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=-29.86&longitude=31.02&current_weather=true`;
const newsUrl = `https://dummyjson.com/posts/1`;

function fetchWeatherData(): Promise<any> {
  console.log("🌦️ Fetching weather data");

  return fetch(weatherUrl).then((res) => {
    if (!res.ok) throw new Error("Weather fetch failed");
    console.log(res.json());
  });
}

fetchWeatherData();
