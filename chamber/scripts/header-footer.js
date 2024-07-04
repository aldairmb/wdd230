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



document.getElementById('join').addEventListener('click', function() {
        window.location.href = 'join.html';
    });