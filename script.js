var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); //the inputs here will be colors
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

/*body.style.background = "red"; //how to change background using css property .style*/

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";"; 
	//we are adding semicolors or werd strings like those above because we import these commands from CSS 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Alernate solution
/*color1.addEventListener("input", function(){
	//console.log(color1.value)
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})

color2.addEventListener("input", function(){
	//console.log(color2.value)
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})*/
