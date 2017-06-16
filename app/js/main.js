$(document).ready(function($) {

	// - mobile menu
	$body = $("body");
	$menuTrigger = $("#menu__trigger");

	$menuTrigger.on("click", function() {
		if ($body.hasClass("menu__open")) {
			$body.removeClass("menu__open");
			$(this).removeClass("active__mod");
		} else {
			$body.addClass("menu__open");
			$(this).addClass("active__mod");
		}
	});

	// - smooth scroll
	$(".header__menu-list").on("click", "a", function(event) {
		event.preventDefault();

		var el = $(this).attr("href");
		$("body,html").animate({
			scrollTop: $(el).offset().top
		}, 2000);
		return false;
	});

	// fixed header
	$(window).scroll(function() {
			var sticky = $(".header"),
				scroll = $(window).scrollTop();

			if (scroll >= 40) sticky.addClass("header--fixed");
			else sticky.removeClass("header--fixed");
		});

		// slider`s
		var slider1 = new Swiper(".swiper-hero", {
			pagination: ".swiper-pagination",
			nextButton: ".swiper-button-next",
			prevButton: ".swiper-button-prev",
			paginationClickable: true,
			loop: true
		});

	var slider2 = new Swiper(".swiper-reviews", {
		pagination: ".swiper-pagination",
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
		paginationClickable: true,
		loop: true,
		slidesPerView: 2,
		spaceBetween: 75,
		breakpoints: {
			992: {
				spaceBetween: 70
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 30,
				pagination: ".swiper-pagination",
				paginationClickable: true
			}
		}
	});

});
