// alert('This is an alert!');

function printMsg() {
	console.log('This is a message in the console');
}

printMsg();

var varFunction = function() {
	console.log('This is a function stored in a variable.');
};

varFunction();

// --------------------------

alwaysDoFirst();

function alwaysDoFirst() {
	console.log('You can call this function anywhere in the script!');
}

//callThisLater(); // This line causes error.

var callThisLater = function() {
	console.log('You can only call this function after it is built.');
};

callThisLater();