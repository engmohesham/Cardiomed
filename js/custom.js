(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    
    // Back To Top
    $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn(700);
    } else {
      $('.back-to-top').fadeOut(100);
    }
    });
    $("#btop").click(function(){
	$("html, body").animate({
		scrollTop: $("#home").offset().top
	}, 1000);
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // ABOUT SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);


// Select Landing Page Element
let landingpage = document.querySelector("#home");
let imgchange = document.querySelector("#f-img");

// Get Array Of Imgs
let imgsarray = ["home-bg-1.png", "home-bg-3.png", "home-bg-4.png"];

setInterval(() => {
	
	// Get Random Number
	let randomnumber = Math.floor(Math.random() * imgsarray.length);
	
	// Change Background Image Url
	landingpage.style.backgroundImage = 'url("images/' + imgsarray[randomnumber] + '")';
	
	
}, 8000);



// Get Array Of Imgs
let txtarray = ["We aim to make Our products are exported to countries and regions around the world.", "Our products are pumped to the Egyptian market"];

setInterval(() => {
	
	// Get Random Number
	let randomnumber = Math.floor(Math.random() * txtarray.length);
	
	// Change Background Image Url
	document.getElementById("hhh").innerHTML = '' + txtarray[randomnumber] + '';
	
}, 8000);


// Change Logo
$('.navbar-brand').mouseenter(function(){
    $('#logo-brand').hide(0);
    $('#logo-brand-2').fadeIn(0);
});

$('.navbar-brand').mouseleave(function(){
    $('#logo-brand-2').fadeOut(0);
    $('#logo-brand').fadeIn(0);
});

//================================

var txtar0 = "<img src='images/Products/2.png' class='img-responsive' id='img2' alt='Andrew Orange'></div>";

var txtar01 = "<img src='images/Products/3.png' class='img-responsive' id='img2' alt='Andrew Orange'></div>";

var txtar1 = "<img src='images/Products/g1.png' class='img-responsive' id='img2' alt='Andrew Orange'></div>";

var txtar2 = "<img src='images/Products/g2.png' class='img-responsive' id='img2' alt='Andrew Orange'></div>";

var txtar3 = "<img src='images/Products/g3.png' class='img-responsive' id='img2' alt='Andrew Orange'></div>";

var txtar4 = "<img src='images/Products/g4.png' class='img-responsive' id='img2' alt='Andrew Orange'></div>";

var txtar5 = "<img src='images/Products/g5.png' class='img-responsive' id='img2' alt='Andrew Orange'></div>";

var txtar6 = "<img src='images/Products/g6.png' class='img-responsive' id='img2' alt='Andrew Orange'></div>";

$('.min').click(function(){
    $('#img2').replaceWith(txtar0);
});

$('.min2').click(function(){
    $('#img2').replaceWith(txtar01);
});

$('.g1').click(function(){
    $('#img2').replaceWith(txtar1);
});

$('.g2').click(function(){
    $('#img2').replaceWith(txtar2);
});

$('.g3').click(function(){
    $('#img2').replaceWith(txtar3);
});

$('.g4').click(function(){
    $('#img2').replaceWith(txtar4);
});

$('.g5').click(function(){
    $('#img2').replaceWith(txtar5);
});

$('.g6').click(function(){
    $('#img2').replaceWith(txtar6);
});








// Contact us //
