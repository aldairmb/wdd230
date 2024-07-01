const url = 'https://api.openweathermap.org/data/2.5/weather?lat=51.152898&lon=-2.5721891&appid=fecd679bd337483755d0c38920a89788&units=metric';

const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    captionDesc.innerHTML = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();