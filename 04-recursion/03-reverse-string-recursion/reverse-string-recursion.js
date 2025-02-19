function reverseString(str) {
	// Base case
	if (str === '') {
		return '';
	}

	// Recursive case
	return reverseString(str.substr(1)) + str.charAt(0);
}

module.exports = reverseString;
