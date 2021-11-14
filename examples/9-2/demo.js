window.onload = function() {
	let firstP= document.querySelector('div > p');
	//console.log(firstP.style);
	firstP.style.backgroundColor = 'red';
	firstP.style.color = 'white';

	let allDivPs = document.querySelectorAll('div > p');
	allDivs[1].style.cssText = 'background-color: green; color; red;' ;

	let allDivss = document.getElementsByTagName('div');
	//allDivs[4].style.cssText = 'background-color: gold; color: white;';
	//allDivs[5].style.cssText = 'background-color: gold; color: white;';
	//console.log(allDivs[4].classList);
	allDivs[4].classList.add('gold');
	allDivs[5].classList.add('gold');
};
