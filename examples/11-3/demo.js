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

	//jQuery, eq()= equal or equivalent
	let psJQ = $('body > p');
	//console.log(psJQ. eq(-1)); //Negative number = counting from the end
	//console.log(psJQ.eq(0)); // 0 or Positive number = counting from the beginning

	//Get HTML frpm an element: innerHTML vs. html()
	//console.log(psJS[lastPosJS].innerHTML); // Plain JavaScript
	//console.log(psJQ.eq(-1).html()); //jQuery
	//console.log(psJQ.eq(-1).innerHTML); //Mixing jQuery with JavaScript = 'undefined'

	//Change the HTML contents of an element
	//psJS[lastPosJS].innerHTML = 'Content Changed!'; //Plain JavaScript
	psJQ.eq(-1).html('Content Changed!'); //jQuery
};