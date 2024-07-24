const LAT = 43.8224;
const LON = -111.7884;
const APIKEY = "fecd679bd337483755d0c38920a89788";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000;

function showCurrentTimeForecast(forecasts) {
  const weatherElt = document.querySelector("#forecast");

  // Filter forecasts to get only those at 9:00 AM
  const forecastAt9AM = forecasts.filter(forecast => {
    const time = forecast.dt_txt.slice(11, 16);
    return time === "09:00";
  });

  // Get unique dates from the filtered forecasts
  const dates = new Set(forecastAt9AM.map(forecast => forecast.dt_txt.slice(0, 10)));

  // Get the next three days' forecasts, excluding today
  const today = new Date().toISOString().slice(0, 10);
  const nextThreeDaysForecasts = Array.from(dates)
    .filter(date => date > today)
    .slice(0, 3)
    .map(date => forecastAt9AM.filter(forecast => forecast.dt_txt.slice(0, 10) === date));

  // Display the next three days' forecasts
  nextThreeDaysForecasts.forEach(dayForecasts => {
    if (dayForecasts.length) {
      let forecast = dayForecasts[0];
      let newsection = document.createElement("section");
      let mydate = forecast.dt_txt.slice(5, 10);
      let icon = forecast.weather[0].icon;
      newsection.innerHTML = `<p>${mydate}</p>
      <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather"></p>
      <p>${forecast.main.temp.toFixed(0)}&deg;F</p>`;
      weatherElt.append(newsection);
    }
  });
}

async function fetchForecast() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      showCurrentTimeForecast(data.list);

      // Update current temperature
      const currentTemp = data.list[0].main.temp.toFixed(0);
      document.getElementById("temperature").textContent = currentTemp;
      document.getElementById("current-conditions").textContent = data.list[0].weather[0].description;
      document.getElementById("windspeed").textContent = data.list[0].wind.speed.toFixed(0);

      // Update current weather icon
      const currentIcon = data.list[0].weather[0].icon;
      document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchForecast();
