let dayofweek = new Date().getDay();

if (dayofweek >= 1 && dayofweek <= 4){
    document.querySelector(".meet-greet").classList.add("show")
}

document.querySelector(".meet-greet button").addEventListener("click", () => {
    document.querySelector(".meet-greet").classList.remove("show")
})

function openJoinPage(){
    window.open("join.html")
}

document.querySelector(".hero button").addEventListener("click", openJoinPage)