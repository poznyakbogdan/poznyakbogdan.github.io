var ButtonSize = document.getElementById("btn-size");
var ButtonHost = document.getElementById("btn-host");

ButtonSize.addEventListener("click", getSize);
ButtonHost.addEventListener("click", getHost);

function getSize (event) {
	var width = window.screen.availWidth;
	var height = window.screen.availHeight;
	var text = document.createTextNode("width: " + width + " ; " + "height: " + height);
	createFrame(text);	
}

function createFrame (text) {
	var output = document.getElementById("output");
	var p = document.createElement("p");
	p.appendChild(text);
	output.appendChild(p);
	addDelBtn(p);		
}

function addDelBtn (parent) {
	var delBtn = document.createElement("button");
	var btnText = document.createTextNode("X");
	delBtn.appendChild(btnText);
	parent.appendChild(delBtn);
	delBtn.addEventListener("click", deleteElement);
}
function getHost(event){
	var protocol = window.location.protocol;
	var hostName = window.location.href;
	var text = document.createTextNode("protocol: " + protocol + " ; " + "hostName: " + hostName);
	createFrame(text);
}

function deleteElement () {
	this.parentNode.parentNode.removeChild(this.parentNode);
}