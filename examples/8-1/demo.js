function printMsg(msg) {
	let finalMsg = 'Message:' + msg;
	console.log(finalMsg);
}

//printMsg('Test!');
//printMsg('Another Test!');

function userMsg((name, msg) {
	let finalMsg = name + 'says:' + msg;
	console.log(finalMsg);
}

//userMsg('Victor', 'Surprise!');
//userMsg('Mary', 'I love Victor!');

function complexCalc(x,y) {
	let result = 0;
	result = x*y;
	result = result / (x - y);
	result = result * y - x;
	alert('Hey!');
	return result;
	alert ('Not executed QQ.');
}

var calcResult = complexCalc(4, 6);
console.log(calcResult);