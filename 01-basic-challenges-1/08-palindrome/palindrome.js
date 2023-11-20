function isPalindrome(str) {
	let revStr = '';
	const remSpacPunc = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

	for (let i = str.length - 1; i >= 0; i--) {
		revStr += str[i];
	}

	return remSpacPunc(str) === remSpacPunc(revStr);
}

module.exports = isPalindrome;
