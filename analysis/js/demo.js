var menuOpen = false; // The default state of the floating menu
window.onload = function () {
	$('nav > a:first-of-type').on('click',, function(event) {
		event.preventDefault(); //Stop the navigating default action of a hyperlink.
		//Take all the non-first <a> elements under <nav> and apply 
		let menuItems = $('nav > a:not(:first-of-type');
		let delay = 0;
		if(menuOpen) {

		}
		//When menuOpen is false, try to show the entire menu.
		else {
			menuItems.each(function(index) {
				//Use setTimeout to delay an animation for every single menuItem
				setTimeout(function() {
					menuItems.eq(index).css({'display' : 'inline'});
					menuItems.eq(index).animate({opacity : 0.6}, 300);
				}, delay + (50 * index));

			});
			//Add the class name 'close' to the clicked first <a> under <nav>
			$(this).addClass('close');
		}
		
	});
};