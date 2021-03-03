$(document).ready(function(){
	$icon = $('#cart');
	$close = $('#close2');
	$cart = $('.bg-cart');

	$icon.click(function(){
		$cart.addClass("bg-cart-show");
	});

	$close.click(function(){
		$cart.removeClass("bg-cart-show");
	});
});