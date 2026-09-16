import * as dotenv from "dotenv";

dotenv.config();

const weatherUrl = process.env.WEATHER_URL!;
const newsUrl = process.env.NEWS_URL!;

async function fetchWeatherData() {
  try {
    const response = await fetch(weatherUrl);
    console.log("Fetching weather data...");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Displaying weather data...");
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

async function fetchNewsData() {
  try {
    const response = await fetch(newsUrl);
    console.log("Fetching news data...");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Displaying news data...");
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

fetchNewsData();
fetchWeatherData();
