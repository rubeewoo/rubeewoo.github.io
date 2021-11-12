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
	console.log(allDivs[0]);
};