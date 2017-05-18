$('.hamburger-icon').on("click", function() {
	console.log('clickt');
	$('.navigation__links').toggleClass('invisible .from-right');

	var hamburgerBars = document.querySelectorAll(".hamburger-bars--single");

	for (var i = 0; i < hamburgerBars.length; i++) {
		$(hamburgerBars[0]).toggleClass('tilt-positive');
		$(hamburgerBars[1]).toggleClass('disappear');
		$(hamburgerBars[2]).toggleClass('tilt-negative');
	}

	$('.navigation__links').toggleClass('animate-from-right');
	
});

$('.parallax-window').parallax({imageSrc: 'assets/img/burrito.jpg'});
