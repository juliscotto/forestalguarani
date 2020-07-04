(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');

window.onscroll = function() {scrollFunction()};


function toggle(){
  $( ".dropdown-content" ).toggle();
}

function scrollFunction() {
	console.log("documentElement "+document.documentElement.scrollTop)
	console.log("body "+document.body.scrollTop )
  if ( document.documentElement.scrollTop > 0 &&  document.documentElement.scrollTop<740) {
    document.getElementById("header").style.top = "-100px";
  }
  var x = document.getElementById("header");
  if(document.documentElement.scrollTop == 0 && x.className === "header"){
  	document.getElementById("header").style.top = "0px";
  	document.getElementById("logotop").src="assets/images/logonombreblanco.png";
  	document.getElementById("header").style.backgroundColor = "transparent";
  	document.getElementById("header").style.opacity = "1";
  	var x = document.getElementsByClassName("links");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.color = "white";
	}
	$('#header').css({
        "-webkit-box-shadow": "none", 
        "-moz-box-shadow": "none", 
        "box-shadow": "none"
	})
	document.getElementById("baricon").style.color = "white";
  }
  if(document.documentElement.scrollTop == 0 && x.className === "header responsive"){
  	document.getElementById("header").style.top = "0px";
  	document.getElementById("baricon").style.color = "black";
  	document.getElementById("baricon").style.zIndex = "60";
  }
  if(document.documentElement.scrollTop > 740 ) {
    document.getElementById("header").style.top = "0px";
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("logotop").src="assets/images/logonombre.png";
    var x = document.getElementsByClassName("links");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.color = "black";
	}
	$('#header').css({
        "-webkit-box-shadow": "0 5px #9c984d", 
        "-moz-box-shadow": "0 5px #9c984d", 
        "box-shadow": "0 5px #9c984d"
	})
	document.getElementById("baricon").style.color = "black";
  }
  
}



function checkResponsive() {
  var x = document.getElementById("header");
  if (x.className === "header responsive") {
    x.className = "header";
  }else {
    x.className = "header";
  }
  var y = document.getElementById("dropdown");
  if (y.className === "links dropdown responsive") {
    y.className = "links dropdown";
  }else {
    x.className = "header";
  }
  
}

function myFunction() {

  var x = document.getElementById("header");
  var y = document.getElementById("dropdown");
  if (y.className === "links dropdown") {
    y.className += " responsive";
  }
  if (x.className === "header") {
    x.className += " responsive";
    document.getElementById("header").style.top = "0px";
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("logotop").src="assets/images/logonombre.png";
    var x = document.getElementsByClassName("links");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.color = "black";
	}
	$('#header').css({
        "-webkit-box-shadow": "0 5px #9c984d", 
        "-moz-box-shadow": "0 5px #9c984d", 
        "box-shadow": "0 5px #9c984d"
	})
	document.getElementById("baricon").style.color = "black";
  
  } else if(document.documentElement.scrollTop === 0 && x.className === "header responsive"){
  	console.log("aca");
  	console.log(document.documentElement.scrollTop);
    x.className = "header";
    y.className = "links dropdown";
    document.getElementById("header").style.top = "0px";
  	document.getElementById("logotop").src="assets/images/logonombreblanco.png";
  	document.getElementById("header").style.backgroundColor = "transparent";
  	document.getElementById("header").style.opacity = "1";
  	var x = document.getElementsByClassName("links");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.color = "white";
	}
	$('#header').css({
        "-webkit-box-shadow": "none", 
        "-moz-box-shadow": "none", 
        "box-shadow": "none"
	})
	document.getElementById("baricon").style.color = "white";
  }else{
  	x.className = "header";
    y.className = "links dropdown";
  	document.getElementById("logotop").src="assets/images/logonombre.png";
  	document.getElementById("baricon").style.color = "black";

  }
}

(function($) {
    var $window = $(window)
        

    function resize() {
    	if ($window.width() > 650) {
        		$('.grow').removeClass('col-sm-6');
        		$('.grow').addClass('col-md-4 col-sm-6 col-xl-4 my-4');
           
            	$('.last').addClass('col-sm-6');
            	$('.last').removeClass('col-xl-2 col-md-1 col-xl-1 my-1');

            	$('.card').removeClass('border-left-0');
				$('.card').removeClass('border-bottom-0');
				$('.card').removeClass('border-top-0');
				$('.card').removeClass('border-right-0');
				$('.par').addClass('border-left-0 border-bottom-0 border-top-0');
				$('.impar').addClass('border-left-0 border-bottom-0 border-top-0');
				$('.impar-3').addClass('border-right-0');
				$('.impar-last').addClass('border-right-0');
            
            
        }

        if ($window.width() < 770) {
        	
        		$('.grow').removeClass('col-md-4 col-sm-6 col-xl-4 my-4');
            	$('.grow').addClass('col-sm-6');
            	$('.last').removeClass('col-sm-6');
            	$('.last').removeClass('col-md-2 col-md-1 col-xl-1 my-1 col-1 col-4');
            	$('.last').addClass('col-xl-1 col-xl-5 ');

				$('.card').removeClass('border-left-0');
				$('.card').removeClass('border-bottom-0');
				$('.card').removeClass('border-top-0');
				$('.card').removeClass('border-right-0');
				$('.par').addClass('border-right-0 border-bottom-0 border-top-0');
				$('.impar').addClass('border-left-0  border-bottom-0 border-top-0');
				$('.impar-last').addClass('border-right-0');
            	
            
            
        }

        if ($window.width() < 600) {
        	
        		$('.grow').removeClass('col-md-4 col-sm-6 col-xl-4 my-4');
            	$('.grow').addClass('col-1 col-4 ');
            	$('.last').removeClass('col-sm-6');
            	$('.last').addClass('col-md-2 col-md-1 col-xl-1 my-1');

            	$('.card').removeClass('border-left-0');
				$('.card').removeClass('border-bottom-0');
				$('.card').removeClass('border-top-0');
				$('.card').removeClass('border-right-0');
				$('.par').addClass('border-left-0 border-bottom-0 border-top-0');
				$('.impar').addClass('border-left-0 border-bottom-0 border-top-0');
				$('.impar-3').addClass('border-right-0');
				$('.impar-last').addClass('border-right-0');
            
            
        }

         if ($window.width() < 430) {
        	
        		$('.grow').removeClass('col-md-4 col-sm-6 col-xl-4 my-4');
        		$('.grow').removeClass('col-md-2 col-md-1 col-xl-1 my-1');
        		$('.last').removeClass('col-sm-6');
        		$('.last').removeClass('col-md-2 col-md-1 col-xl-1 my-1');
        		$('.grow').removeClass('col-1 col-4');

            	$('.grow').addClass('col-6 col-5 ');
            	$('.last').removeClass('col-6 col-5 ');
            	$('.last').addClass('col-xl-3 col-xl-5');

            	$('.card').removeClass('border-left-0');
				$('.card').removeClass('border-bottom-0');
				$('.card').removeClass('border-top-0');
				$('.card').removeClass('border-right-0');
				$('.par').addClass('border-right-0 border-bottom-0 border-top-0');
				$('.impar').addClass('border-left-0 border-right-0 border-bottom-0 border-top-0');
				$('.impar-last').addClass('border-right-0');
            
            
        }

        
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);




