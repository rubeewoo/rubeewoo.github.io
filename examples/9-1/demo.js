//console.log('Hi!');

//window:The entire browser window

var winWidth = window.innerWidthh;
var winHeight = window.innerHeight;

//console.log(winWidth);
//console.log(winHeight);

//window.location.href = 'https://google.com';
//window.location.pathname = '/nosuchpath';

window.onload = function() {
	//alert('Website is ready!');
	//window.document: The entire HTML document
	let siteTitle = document.title;
	console.log(siteTitle);


	let allDivs = document.getElementsByTagName('div');
	//console.log(allDivs.length);
	//console.log(allDivs[0]);
	//console.log(allDivs[1].innerText);

	let emById = document.getElementsById('div3');
	//console.log(emById.innerText);

	let classEms = document.getElementsByClassName('group1');
	//console.log(classEms[0].innerText);

	let emBySelector = document.querySelector('div > p');// First match only
	//console.log(emBySelector.innertext);

	let emsBySelector = document.querySelectorAll('div > p'); // All matches 
	console.log(emsBySelector.length);
};
