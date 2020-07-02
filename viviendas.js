window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  console.log("documentElement "+document.documentElement.scrollTop)
  console.log("body "+document.body.scrollTop )
  if ( document.documentElement.scrollTop > 0 &&  document.documentElement.scrollTop<487) {
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
  if(document.documentElement.scrollTop > 487 ) {
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
  
}

function myFunction() {

  var x = document.getElementById("header");
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
    document.getElementById("logotop").src="assets/images/logonombre.png";
    document.getElementById("baricon").style.color = "black";

  }
}

(function($) {
    var $window = $(window)
        

    function resize() {

     
     

      if ($window.width() < 900) {
        $('.grow').removeClass('col-md-4 col-sm-6 col-xl-4 my-2');
        $('.grow').removeClass('col-md-2');
        $('.grow').addClass('col-6 my-1');
        console.log('hola');
            
            
        }

        if ($window.width() < 711) {
          $('.grow').removeClass('col-md-4 col-sm-6 col-xl-4 my-2');
          $('.grow').removeClass('col-6');
          $('.grow').removeClass('my-1');
          $('.grow').addClass('col-md-2');
          console.log('hola');
            
            
        }

        if ($window.width() < 550) {
          $('.productos__top-nav').removeClass('col-xl-8');
          $('.productos__top-nav').addClass('col-xl p-0');
          $('.productos__top-nav').addClass('');
          console.log('hola');
            
            
        }
        
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);


