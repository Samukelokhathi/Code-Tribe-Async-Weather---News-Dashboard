import * as dotenv from "dotenv";

dotenv.config();

const weatherUrl = process.env.WEATHER_URL!;
const newsUrl = process.env.NEWS_URL!;

function fetchData(
  url: string,
  data: string,
  callback: (data: any) => void,
): void {
  console.log(`Fetching ${data} data..`);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => console.error("Error:", error));
}

fetchData(weatherUrl, "weather", (weatherData) => {
  console.log("Displaying weather response.. \n", weatherData);

  fetchData(newsUrl, "news", (newsData) => {
    console.log("\n Displaying news response.. \n", newsData);
  });
});
