let datespan = document.querySelector("#currentYear")
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified

let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () =>{    
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")){
        document.documentElement.style.setProperty('--text-color', 'white');        
        document.documentElement.style.setProperty('--inv-text-color', 'black');        
        document.documentElement.style.setProperty('--body-color', '#1f1f1d');    
        document.documentElement.style.setProperty('--card-color', '#4F4341');        
        document.documentElement.style.setProperty('--header-color', '#4F4341');    
        document.documentElement.style.setProperty('--nav-color', '#4F4341');                
    }
    else{
        document.documentElement.style.setProperty('--text-color', 'black');        
        document.documentElement.style.setProperty('--inv-text-color', 'white');        
        document.documentElement.style.setProperty('--body-color', '#EDCFC8');    
        document.documentElement.style.setProperty('--card-color', '#4F4341');        
        document.documentElement.style.setProperty('--header-color', 'red');    
        document.documentElement.style.setProperty('--nav-color', 'red');                
    }

})


const LAT = 51.152898;
const LON = -2.5721891;
const APIKEY = "fecd679bd337483755d0c38920a89788";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000;

function showCurrentTimeForecast(forecasts){
  const weatherElt = document.querySelector("#forecast");

  const timenow = forecasts[0].dt_txt.slice(11, 19);

  let temps = forecasts.filter(x => x.dt_txt.indexOf(timenow) != -1);

  for (let i = 1; i <= 3; i++){
    let newsection = document.createElement("section");    
    let mydate = temps[i].dt_txt.slice(5, 10);
    let icon = temps[i].weather[0].icon;
    newsection.innerHTML = `<p>${mydate}</p>
    <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather"></p>
    <p>${temps[i].main.temp.toFixed(0)}&deg;F</p>`;
    weatherElt.append(newsection);
  }
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