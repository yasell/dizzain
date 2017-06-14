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

	// - call button
	$("#call").click(function() {
		$("#modal_window").addClass("modal--show");
		$(".modal-bg").css("display", "block");
	});

	$(".modal__close, .modal-bg").click(function() {
		$("#modal_window").removeClass("modal--show");
		$(".modal-bg").css("display", "none");
	});

	// slider`s
	var slider1 = new Swiper(".swiper-container", {
		pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
		loop: true
	});

	// var slider2 = new Swiper(".swiper-reviews", {
	// 	pagination: ".swiper-pagination",
  //   paginationClickable: true,
  //   nextButton: ".review-button-next",
  //   prevButton: ".review-button-prev",
	// 	loop: true,
	// 	slidesPerView: 2,
  //   spaceBetween: 90
	// });

});
