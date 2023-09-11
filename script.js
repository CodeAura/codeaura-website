var myVar;
var delBlur;

var element = document.getElementsByClassName("background-blur")[0];

function myFunction() {
	document.getElementById("loader").style.display = "block";
	element.style.display = "block";
	myVar = setTimeout(showPage, 3000);
	delBlur = setTimeout(DelBlur, 3000);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("myDiv").style.display = "block";
}
  
function DelBlur() {
  element.style.display = "none"
}


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n() {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s() {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	// TypeWriter

	new Typed('.input', {
		strings: ["Web Developer.", "Gamer.", "Developer.", "Photographer.", "Designer.", "Gym Guy."],
		typeSpeed: 110,
		backSpeed: 75,
		loop:true,
	});
	

	

	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
		myFunction();
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
		myFunction();
	});

	
	//Travel portfolio page
	
	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
			
		
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
		myFunction();
	});

	
	//Wildlife portfolio page
	
	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
		myFunction();
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
		myFunction();
	});
	

	// skillbars
	$(".travel").on('click', function () {
	jQuery(document.getElementById(".travel")).ready(function() {
		jQuery('.skillbar').each(function() {
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},5000);
		});
		$(".travel").on('click', function () {
	});
});
});

	// Slider
	$(".nature").on('click', function () {
			var width = 720;
			var animationSpeed = 2000;
			var pause = 3000;
			var currentSlide = 1;
			// try and configure all the variables so that you can change it at any point( things of the same type at the same place)
		  
			var $slider = $("#slider");
			var $slideContainer = $slider.find('.slides');
			var $slides = $slideContainer.find('.slide');
		  
			//the jQuery selector is used only once and the code is very efficient as you are CACHING THE DOM
			var interval;
			//have to define the variable outside startSlider() to have it in the scope of a function call
		  
			function startSlider() {
			interval =  setInterval(function() {
				$($slideContainer).animate({
				  "margin-left": "-=" + width
				}, animationSpeed, firstSlide);
			  }, pause);
		  
			  function firstSlide() {
				currentSlide++;
				if (currentSlide === $slides.length) {
				  currentSlide = 1;
				  $slideContainer.css("margin-left", 0);
				}
			  }
			}
			
			function stopSlider(){
			  clearInterval(interval);
			}
			$slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);
		  
			startSlider();
	});
	
})(jQuery);

let toggle = document.querySelector('.toggle');
  let menu = document.querySelector('.menu');
  toggle.onclick= () => menu.classList.toggle('active')


