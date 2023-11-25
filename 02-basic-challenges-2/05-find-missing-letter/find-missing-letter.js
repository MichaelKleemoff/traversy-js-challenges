// Solution 1 - Using `.indexOf()`
// function findMissingLetter(letters) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	const startIndex = alphabet.indexOf(letters[0]);

// 	for (let i = 0; i < letters.length; i++) {
// 		if (letters[i] !== alphabet[startIndex + i]) {
// 			return alphabet[startIndex + i];
// 		}
// 	}

// 	return '';
// }

// Solution 2 - Using '.charCodeAt()`
function findMissingLetter(letters) {
	let start = letters[0].charCodeAt(0);

	for (let i = 0; i < letters.length; i++) {
		const current = letters[i].charCodeAt(0);

		if (current - start > 1) {
			return String.fromCharCode(start + 1);
		}

		start = current;
	}

	return '';
}

module.exports = findMissingLetter;
