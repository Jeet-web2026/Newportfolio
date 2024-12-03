$(document).ready(function () {

	$('.select-content .button').eq(1).css({
		'background-color': '#ff014f',
		'color': '#e2e8ec'
	});

	$('.select-content .button').on('click', function () {
		$(this).css({
			'background-color': '#ff014f',
			'color': '#e2e8ec'
		});
		$(this).siblings().css({
			'background-color': '#e2e8ec',
			'color': '#ff014f'
		});
	});

	$('#19').click(function () {
		$('#2').fadeIn(1000);
		$('#active, #3').hide();
	});
	$('#all').click(function () {
		$('#active').fadeIn(1000);
		$('#2, #3').hide();
	});
	$('#91').click(function () {
		$('#3').fadeIn(1000);
		$('#2, #active').hide();
	});

	$('.navbar-collapse i').on('click', function () {
		$(this).toggleClass('text-light');
		$('.navbar, .navbar .navbar-brand, .navbar-nav .nav-link').toggleClass('dark-mode');
		$('#home, #skills, #education, #resume, #prt, #cer, #contact').toggleClass('dark-mode');
		$('#home .card, #home .img-fluid, #education .card, #resume .card, #prt .card, #cer .card, #contact .w')
			.toggleClass('dark-mode-two');
		$('#resume .card, #cer .card').toggleClass('hover-mode');
		$('.navbar-toggler').toggleClass('dark-mode');
	});

	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		slidesPerView: 3,
		freeMode: true,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	$('.flex-column a').on('click', function () {
		$(this).closest('li').css({
			'background-color': '#ecf0f391',
		}).siblings().css({
			'background-color': ''
		});
	});

	$('#display .view').show().siblings().hide();

	$('.flex-column .design-view').on('click', function () {
		$('#display .view').fadeIn().siblings().hide();
	});

	$('.flex-column .code-view').on('click', function () {
		$('#display .code').fadeIn().siblings().hide();
	});

});