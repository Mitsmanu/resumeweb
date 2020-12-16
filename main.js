
!(function($) {
	"use strict";

	$(window).on('load', function(){
		if($('preloader').length {
			$('preloader').delay(100).fadeOut('slow', function() {
				$(this).remove();
			})
		})

			})





	if ($('.typed').length) {
		var typed_strings = $(".typed").data('typed-items');
		typed_strings = typed_strings.split(',')
		new Typed('typed', {
			strings: typed_strings;
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000

		});

	}


	$(document).on('click', '.nav-menu a, .scrollto', function(e) {
		if(location.pathname.replace(/^\//, '')== this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
			var target = $(this.hash);
			if (target.length) {
				e.preventDefault();

				var scrllto = target.offset().top;

				$('html, body').animate({
					scrollto: scrollto
				}, 1500, 'easeInOutExpo');



				if ($(this).parents('.nav-menu, mobile-nav').length){
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if($hash('body').hasClass( 'mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('iconfont-navigation-menu iconfont-close');

				}
				return false;

			}
		}
	})


	$(document).ready(function() {
		if (window.location.hash) {
			var initial_nav = window.location.hash;
			if($(initial_nav).length){
				var scrollto = $(initial_nav).offset().top;
				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');

			}
		}
	})

	$(document).on('click', '.mobile-nav-toggle', function(e) {
  	  $('body').toggleClass('mobile-nav-active');
    	$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  	});

  	$(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }

  });



  	
  




})