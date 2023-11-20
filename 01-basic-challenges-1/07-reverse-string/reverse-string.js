function reverseString(str) {
	// My solution 1 -
	// let revStr = '';

	// for (let i = str.length - 1; i >= 0; i--) {
	// 	revStr += str[i];
	// }
	// return revStr;

	// My solution 2 -
	return str.split('').reverse().join('');
}

module.exports = reverseString;
