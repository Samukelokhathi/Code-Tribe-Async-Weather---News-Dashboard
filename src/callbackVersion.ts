const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=-29.86&longitude=31.02&current_weather=`;
const newsUrl = `https://dummyjson.com/posts/1`;

function fetchData(url: string, callback: (data: any) => void): void {
  console.log(`Fetching data..`);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => console.error("Error:", error));
}

fetchData(weatherUrl, (weatherData) => {
  console.log("Displaying weather response.. \n", weatherData);

  fetchData(newsUrl, (newsData) => {
    console.log("\n Displaying news response.. \n", newsData);
  });
});
