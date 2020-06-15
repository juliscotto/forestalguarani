window.onscroll = function() {scrollFunction()};



function scrollFunction() {
	console.log("documentElement "+document.documentElement.scrollTop)
	console.log("body "+document.body.scrollTop )
  if ( document.documentElement.scrollTop > 0 &&  document.documentElement.scrollTop<740) {
    document.getElementById("navbar").style.top = "-100px";
  }
  if(document.documentElement.scrollTop == 0){
  	document.getElementById("navbar").style.top = "0px";
  	document.getElementById("logotop").src="assets/images/logonombreblanco.png";
  	document.getElementById("navbar").style.backgroundColor = "transparent";
  	document.getElementById("navbar").style.opacity = "1";
  	var x = document.getElementsByClassName("links");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.color = "white";
	}
	$('#navbar').css({
        "-webkit-box-shadow": "none", 
        "-moz-box-shadow": "none", 
        "box-shadow": "none"
	})
  }
  if(document.documentElement.scrollTop > 740 ) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("logotop").src="assets/images/logonombre.png";
    var x = document.getElementsByClassName("links");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.color = "black";
	}
	$('#navbar').css({
        "-webkit-box-shadow": "0 5px #9c984d", 
        "-moz-box-shadow": "0 5px #9c984d", 
        "box-shadow": "0 5px #9c984d"
	})
  }
}

