const favchap = document.querySelector("#favchap")
const submitbutton = document.querySelector("#addbutton")
const mylist = document.querySelector("#list")

submitbutton.addEventListener("click", () =>{
    if(favchap.vaue == ""){
        console.log("You didn't type anything")
        favchap.focus;
        return;
    }

    let newitem = document.createElement("li")

    let deletebutton = document.createElement("button")

    newitem.innerText = favchap.value

    deletebutton.innerText = "X"

    newitem.append(deletebutton)

    mylist.append(newitem)

    deletebutton.addEventListener("click", () => {
        newitem.remove()
        favchap.focus()
    })

    favchap.value = ""

})