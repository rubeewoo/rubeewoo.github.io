//let ps = $('body > p');
//console.log(ps);

window.onload = function() {
	//$ = jQuery, $()= document.querySelectorAll()
	let ps= $('body>p');
	//console.log(ps);

	let firstP = $('body > p#first');
	console.log(firstP);

	let specialPs = jQuery('body > p.special');
	console.log(specialPs);
};