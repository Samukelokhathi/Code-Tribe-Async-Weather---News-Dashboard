import https from "node:https";

const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=-29.86&longitude=31.02&current_weather=true`;
const newsUrl = `https://dummyjson.com/posts/1`;

function getData(url: string, typeData: string): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log(`Fetching ${typeData} data...`);
    https
      .get(url, (response) => {
        let data = "";

        response.on("data", (chuck) => {
          data += chuck;
        });

        response.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(new Error("Failed to parse JSON response"));
          }
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

Promise.all([getData(weatherUrl, "weather"), getData(newsUrl, "news")]).then(
  ([weatherData, newsData]) => {
    console.log("\n================ Promise all ==================");
    console.log("\nAll data received successfully!");

    console.log("\n Weather data :");
    console.log(weatherData.current_weather);

    console.log("\nNews data:");
    console.log(newsData.title);
    console.log(newsData.body);
  },
);

getData(weatherUrl, "weather")
  .then((data) => {
    console.log("\n================ promiseVersion chaining =============");
    console.log("\nWeather data received successfully:");
    console.log(data.current_weather);

    return getData(newsUrl, "news");
  })
  .then((newsData) => {
    console.log("\nNews data:");
    console.log(newsData.title);
    console.log(newsData.body);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error.message);
  });

Promise.race([getData(weatherUrl, "weather"), getData(newsUrl, "news")])
  .then((winnerData) => {
    console.log("\n================ Promise Race ==================");
    console.log("\nFastest data received successfully!");

    if (winnerData.current_weather) {
      console.log("\n Weather data won the race");
      console.log(winnerData.current_weather);
    } else if (winnerData.title) {
      console.log("\nNews data won the race:");
      console.log(winnerData.title);
      console.log(winnerData.body);
    }
  })
  .catch((error) => console.error("The fastest request failed:", error));
