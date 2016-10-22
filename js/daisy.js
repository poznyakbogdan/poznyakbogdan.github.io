
$(document).ready(function () {
    $("#aboutLink, #portfolioLink, #serviceLink, #contactLink").click(function(){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;		
        $('html, body').animate({ scrollTop: destination }, 1100); 
    });
});

var Logo = document.getElementById("HeaderNavbarLogoContent");
Logo.onmouseover = function () {
	var red = parseInt(Math.random()*255);
	var green = parseInt(Math.random()*255);
	var blue = parseInt(Math.random()*255);
	Logo.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}
$(".PageDownLink").click(function(){
	var destination = $(this).offset().top;
	$('html, body').animate({ scrollTop: destination + 100}, 1100);
});
$("#topSlideButton").click(function () {
	$('html, body').animate({ scrollTop: 0}, 1100);
});


var menu = document.getElementById("widgetMenu");
var openButton = document.getElementById("OpenButton");

function openButtonHandler (event){
    menu.style.right = "0px";
	openButton.style.display = "none";
	menu.onmouseover = function(){
		openButton.style.display = "none";
	    menu.style.right = "0px";
	}
	menu.onmouseout = function(){
	}
	$("#topSlideButton").css("display", "none");

}
		
$("#ExitButton").click(function () {
	$("#widgetMenu").css("right", "-300px");
	$("#OpenButton").css("display", "block");
	$("#topSlideButton").css("display", "block");
});


openButton.addEventListener("click", openButtonHandler);

      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'fiEMWm2W97k',
          events: {}
        });
      }

var YTPlayButton = document.getElementById("YTplayButton");
YTPlayButton.onclick = function(){
	$("#player").css("display","block");
	player.playVideo();	
}

var supportButton = document.getElementById("supportButton");
function supportButtonHandler (event) {
	var widgetNavMenu = document.getElementById("widgetNavMenu");
	var consultantWidget = document.getElementById("consultantWidget");
	if (consultantWidget.style.display == "block"){
		consultantWidget.style.display = "none"
	}else{
		consultantWidget.style.display = "block"
	};	
	if (widgetNavMenu.style.height == "0px"){
		widgetNavMenu.style.height = "auto";
	}else{
		widgetNavMenu.style.height = "0px";	
	}
	if ($("#ExitButton").css("display") == "block") {
		$("#ExitButton").css("display", "none")
	}else {
		$("#ExitButton").css("display", "block");	
	}
}
supportButton.addEventListener("click", supportButtonHandler);

var widgetCloseButton = document.getElementById("widgetCloseButton");
widgetCloseButton.addEventListener("click", supportButtonHandler);

var widgetSendButton = document.getElementById("widgetSendButton");

function createMessageForm(){
	var widgetTextInput = document.createTextNode(document.getElementById("widgetTextInput").value);
	var form = document.createElement("div");
	form.classList.add("comment_bubble");
	form.appendChild(widgetTextInput);
	document.getElementById("widgetTextInput").value = "";
	return form;
}

function displayMessage () {
	if (document.getElementById("widgetTextInput").value !== "") {
		var widgetMessageOutput = document.getElementById("widgetMessageOutput");
		widgetMessageOutput.appendChild(createMessageForm());
	}else{
		alert("We are don't send null message!");
	}
}

widgetSendButton.addEventListener("click", displayMessage);

var checkBowman = document.getElementById("checkBowman");
var checkTracy = document.getElementById("checkTracy");
var checkHelen = document.getElementById("checkHelen");
var changeAvatarButton = document.getElementById("changeAvatarButton");

var newAvatarFoto;

function selectFoto (event) {
	var elem = document.getElementsByClassName("ChangeAvatarFoto");
	for (var i = 0; i <= elem.length - 1; i++) {
		if (elem[i].childNodes[1].checked == true){
			elem[i].style.boxShadow = "0 0 100px rgba(0,0,0,0.5) inset";
			newAvatarFoto = getComputedStyle(elem[i]).backgroundPosition;
			console.log(newAvatarFoto);
		}else{
			elem[i].style.boxShadow = "0 0 0px rgba(0,0,0,0) inset";
		}
	}
}

function changeAvatarFoto () {
	var avatarFoto = document.getElementById("avatarFoto");
	avatarFoto.style.backgroundPosition = newAvatarFoto;

}

checkBowman.addEventListener("change", selectFoto);
checkTracy.addEventListener("change", selectFoto);
checkHelen.addEventListener("change", selectFoto);
changeAvatarButton.addEventListener("click", changeAvatarFoto);

var portfolioCloseButton = document.getElementById("portfolioCloseButton");

function  portfolioCloseButtonHandler () {
	 $(".PortfolioContainer").css("display", "none"); 
}

portfolioCloseButton.addEventListener("click", portfolioCloseButtonHandler);

$("#portfolioButton").click(function(){
	$(".PortfolioContainer").css("display", "block");	
});

$("#settingsButton").click(function(){
	$(".ChangeAvatarConteiner").css("display", "block")
});
$(".closeButon").click(function () {
	$(".ChangeAvatarConteiner").css("display", "none")
});

var user = {};	
var registerButton = document.getElementById("registerButton");

function registerInfo () {
	user.name = document.getElementById("userName").value;
	user.sername = document.getElementById("userSername").value;
	user.day = document.getElementById("userDay").value;
	user.month = document.getElementById("userMonth").value;
	user.year = document.getElementById("userYear").value;
	user.otherInfo = document.getElementById("userOtherInfo").value;
	$(".RegisterContainer").css("display", "none");
}
function outUserInfo () {
	registerInfo();
	$("#userNameOut").append(user.name);
	$("#userSernameOut").append(user.sername);
	$("#userBornOut").append(user.day + "." + user.month + "." + user.year);
	$("#userInfoOut").append(user.otherInfo);
	alert("Регистрация прошла успешно!");

}

registerButton.addEventListener("click", outUserInfo);

$("#profileCloseButton").click(function () {
	$(".MenuProfileContainer").css("display", "none");
});

$("#profileButton").click(function () {
	$(".MenuProfileContainer").css("display", "block");
});