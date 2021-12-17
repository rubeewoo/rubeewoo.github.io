window.onload = function () {
	$('nav > a:first-of-type').on('click',, function(event) {
		event.preventDefault(); //Stop the navigating default action of a hyperlink.
		//Take all the non-first <a> elements under <nav> and apply 
		$('nav > a:not(first-of-type)').toggle();
	});
};