import { rejects } from "node:assert";
import { error } from "node:console";
import https from "node:https";
import { resolve } from "node:path";

const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=-29.86&longitude=31.02&current_weather=true`;
const newsUrl = `https://dummyjson.com/posts/1`;

function getData(url: string, typeData: string): Promise<any> {
  console.log(`Fetching ${typeData} data...`);

  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";

        response.on("data", (chuck) => {
          data += chuck;
        });

        response.on("end", () => {
          try {
            console.log("Data parsed successfully...");
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

getData(weatherUrl, "weather")
  .then((data) => {
    console.log("Weather data received successfully:");
    console.log(data.current_weather);

    return getData(newsUrl, "news");
  })
  .then((newsData) => {
    console.log("News data received successfully");
    console.log(newsData);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error.message);
  });
