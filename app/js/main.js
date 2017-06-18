$(document).ready(function($) {

	// - mobile menu
	$body = $("body");

	$("#menu__trigger, .header__menu-list a").on("click", function() {
		if ($body.hasClass("menu__open")) {
			$body.removeClass("menu__open");
			$("#menu__trigger").removeClass("active__mod");
		} else {
			$body.addClass("menu__open");
			$("#menu__trigger").addClass("active__mod");
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

	// - request button
	$(".request").click(function() {
		$("#modal_request").addClass("modal--show");
		$(".modal-bg").css("display", "block");
	});

	$(".modal__close, .modal-bg").click(function() {
		$("#modal_request").removeClass("modal--show");
		$(".modal-bg").css("display", "none");
	});

	// date by w2ui
	$(function() {
		var month = (new Date()).getMonth() + 1;
		var year = (new Date()).getFullYear();

		$("input[type=eu-date]").w2field("date", {
			format: "d.m.yyyy"
		});
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

	// fancybox
	$("#details-click").fancybox({
		autoSize: true,
		closeClick: true,
		openEffect: "fade",
		closeEffect: "fade-out"
	});

	// fancy gallery
	var galleryTop = new Swiper(".gallery-top", {
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
		spaceBetween: 0,
		slidesPerView: 1
	});

	var galleryThumbs = new Swiper(".gallery-thumbs", {
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
		spaceBetween: 10,
		centeredSlides: true,
		slidesPerView: "8",
		touchRatio: 0.2,
		slideToClickedSlide: true
	});

	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;

});
