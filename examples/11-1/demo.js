windows.onload = function() {
	let button = document.querySelector('button');
	button.addEventListener('click', function() {
		alert('button clicked!');
	});
	let div = document.querySelector('div');
	div.addEventListener('click', function() {
		this.style.backgroundColor = 'red';
	});	
};