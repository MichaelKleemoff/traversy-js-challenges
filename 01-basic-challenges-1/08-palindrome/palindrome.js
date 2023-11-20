// Solution 1 -
// function isPalindrome(str) {
// 	const remSpacPunc = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

// 	let revStr = str.split('').reverse().join('');

// 	return remSpacPunc(str) === remSpacPunc(revStr);
// }

// Brad's Solution 2 -
function isPalindrome(str) {
	const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
	const reversedStr = reverseString(formattedStr);
	return formattedStr === reversedStr;
}

// Helper Functions -
function removeNonAlphaNumeric(str) {
	let formattedStr = '';

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (isAlphaNumeric(char)) {
			formattedStr += char;
		}
	}

	return formattedStr;
}

function isAlphaNumeric(char) {
	const code = char.charCodeAt(0);
	return (
		(code >= 48 && code <= 57) || // Numbers 0-9
		(code >= 97 && code <= 122) // Lowercase a-z
	);
}

function reverseString(str) {
	let revStr = '';

	for (let i = str.length - 1; i >= 0; i--) {
		revStr += str[i];
	}

	return revStr;
}

module.exports = isPalindrome;
