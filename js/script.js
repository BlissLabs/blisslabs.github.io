var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}

$(document).ready(function() {
  
  $(window).scroll(function() {
    var x = $(window).scrollTop();

    if (x >= 42) {
      $("#navbar").fadeIn(300);
    } else {
      $("#navbar").fadeOut(300);
    }

  });
});




(function () {
   'use strict';
	
	// WAIT FOR ALL TO BE LOADED
	window.onload = function() {
		
		// add loaded class to html
		var root = document.documentElement;
		root.className += ' loaded';

		// TYPING EFFECT
		Typed.new('#typed', {
            stringsElement: document.getElementById('typed-strings'),
			loop: true,
			typeSpeed: 7,
			backSpeed: 2,
			startDelay: 1000,
			backDelay: 1200
        });
	}; // all loaded
	
	  
}());





/*
	PLUGINS
*/

