function areAllCharactersUnique(str) {
	// My Solution 1
	// let uniqueStr = '';
	// for (let i = 0; i < str.length; i++) {
	// 	if (!uniqueStr.includes(str[i])) {
	// 		uniqueStr += str[i];
	// 	}
	// }
	// return uniqueStr === str || str === '' ? true : false;

	// Brad's Solution 2 - Using an object
	// const charCount = {};

	// for (let i = 0; i < str.length; i++) {
	// 	// Get the current character
	// 	const char = str[i];

	// 	if (charCount[char]) {
	// 		return false;
	// 	}

	// 	charCount[char] = true;
	// }

	// return true;

	// Brad's Solution 3 - Using `Set()`
	const charSet = new Set();

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (charSet.has(char)) {
			return false;
		}

		charSet.add(char);
	}

	return true;
}

module.exports = areAllCharactersUnique;
