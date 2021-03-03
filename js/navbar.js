$(document).ready(function(){
	$(window).scroll(function(){
		$windowScroll = $(window).scrollTop();
		$outterHeightNav = $('.bg-nav').outerHeight();

		if ($windowScroll > $outterHeightNav) {
			$('.bg-nav').addClass('bg-nav-fixed');
			$('.bg-nav').css({'top' : '0px'});
		}
		else{
			$('.bg-nav').removeClass('bg-nav-fixed');
			$('.bg-nav').css({'top' : '-70px'});
		}
	});
});