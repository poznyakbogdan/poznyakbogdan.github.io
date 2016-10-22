var Logo = document.getElementById("MyLogo");
Logo.onmouseover = function () {
	var red = parseInt(Math.random()*255);
	var green = parseInt(Math.random()*255);
	var blue = parseInt(Math.random()*255);
	Logo.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}
		