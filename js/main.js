jQuery(function($) {
	"use strict";
	// Author Code Here

	
	var ratio = 2;

		$(".typed").typewriter({
			speed: 60
		});

	// Onepage Nav
		$('.navbar.navbar-fixed-top .navbar-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 400,
			filter: ':not(.btn)'
		});
	

	});
