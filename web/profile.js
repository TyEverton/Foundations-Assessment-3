const favColorBtn = document.querySelector("#color")
const favPlaceBtn = document.querySelector("#place")
const myRitual = document.querySelector("#ritual")


favColorBtn.addEventListener("click", colorBtn)

favPlaceBtn.addEventListener("click", placeBtn)

myRitual.addEventListener("click", ritualBtn)



function colorBtn(e) {
  alert ("Turqoise!")
  e.preventDefault()
}

function placeBtn(e) {
  alert ("In the mountains")
  e.preventDefault()
}

function ritualBtn(e) {
  alert ("Reading a book on the porch each morning with my dog next to me, and a cup of coffee")
  e.preventDefault()
}
