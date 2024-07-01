let datespan = document.querySelector("#currentYear")
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified

// dark mode stuff
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

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=51.152898&lon=-2.5721891&appid=fecd679bd337483755d0c38920a89788&units=metric';

// select HTML elements in the document
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

