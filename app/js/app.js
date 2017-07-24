;(function(){
	$(function(){
		var body=$('body'),
			menuToggle=$('.menu-toggle');

		menuToggle.click(function(event){
			event.preventDefault();
			body.toggleClass('menu-opened');
		});
	});
})(jQuery);