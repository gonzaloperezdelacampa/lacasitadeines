$(window).load(function() {
	$('#slider').nivoSlider({
		effect: 'random',               // Specify sets like: 'fold,fade,sliceDown'
		slices: 15,                     // For slice animations
		boxCols: 8,                     // For box animations
		boxRows: 4,                     // For box animations
		animSpeed: 1000,                 // Slide transition speed
		pauseTime: 6000,                // How long each slide will show
		startSlide: 0,                  // Set starting Slide (0 index)
		directionNav: true,             // Next & Prev navigation
		controlNav: false,               // 1,2,3... navigation
		controlNavThumbs: false,        // Use thumbnails for Control Nav
		pauseOnHover: false,             // Stop animation while hovering
		manualAdvance: false,           // Force manual transitions
		prevText: 'Prev',               // Prev directionNav text
		nextText: 'Next',               // Next directionNav text
		randomStart: false,             // Start on a random slide
		beforeChange: function(){},     // Triggers before a slide transition
		afterChange: function(){},      // Triggers after a slide transition
		slideshowEnd: function(){},     // Triggers after all slides have been shown
		lastSlide: function(){},        // Triggers when last slide is shown
		afterLoad: function(){}         // Triggers when slider has loaded
	});

	$(function(){
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				 var $target = $(this.hash);
				 $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				 if ($target.length) {
					 var targetOffset = $target.offset().top;
					 $('html,body').animate({scrollTop: targetOffset}, 1000);
					 return false;
				}
			}
		});
	});
});

$(document).ready(function(){
	$(".menu").click(function () {	
		$('ul', $('#main-nav2')).toggle(1000);
	});
});