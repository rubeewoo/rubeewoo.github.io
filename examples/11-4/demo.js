window.onload = function() {
	//Add an event listener using on() to all matched elements
	/*$('body > button')eq(1).on('click', function() {
		alert('Button clicked!');
	});*/

	//Add an event listener using on() to the second matched element
	$('body > button')eq(1).on('click', function() {
		alert('Button clicked!');
	});
};