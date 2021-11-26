window.onload = function() {
	let button = document.querySelector('button');
	// the 'event' information is passed over by the browser
	button.addEventListener('click', function(event) {
		event.stopPropagation(); // In the 'event' object, there's a stopPropagation function
		alert('button clicked!');
	});
	let div = document.querySelector('div');
	div.addEventListener('click', function() {
		this.style.backgroundColor = 'red';
	});	
};