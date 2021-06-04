console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted!")
}


let form = document.querySelector('form#contact')

form.addEventListener('submit', handleSubmit)

let image = document.querySelector("img")

function complimentImage(e) {
	e.preventDefault();

	alert("You are a wonderful person!")
}

image.addEventListener("mouseover", complimentImage)
