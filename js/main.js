$(function () {
	$('.brought__wor').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 541,
				settings:
				{
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
		]
	});
});