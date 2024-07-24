// Sets the current year
let year = new Date().getFullYear()
let currentYearSpam = document.querySelector("#currentYear")
currentYearSpam.innerHTML = `${year}`

// Sets the last modified date
let lastModifiedParagraph = document.getElementById("lastModified")
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`