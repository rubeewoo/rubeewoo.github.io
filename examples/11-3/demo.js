window.onload = function() {
	//Mixing jQuery codes with JavaScript codes:Bad!
	let ps = $('body > p');
	//console.log(ps[0]);

	//Get the last element in JavaScript and jQuery
	//Plain JavaScript
	let psJS= document.querySelectorAll('body > p')
	let emLengthJS = psJS.length;
	let lastPosJS = emLengthJS - 1;
	console.log(psJS[lastPosJS]);

	//jQuery
	let psJQ = $('body > p');
	console.log(psJQ. eq(-1));
};