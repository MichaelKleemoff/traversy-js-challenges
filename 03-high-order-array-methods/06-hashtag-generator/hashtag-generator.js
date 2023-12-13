function generateHashtag(str) {
	// My Solution 1 - Using `.map()`
	// let hashTagWord = '';

	// if (str.trim() === '' || str === ' ' || str.length > 140) return false;

	// hashTagWord = str
	// 	.trim()
	// 	.split(/\s+/)
	// 	.map(
	// 		(word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
	// 	)
	// 	.join('');

	// return `#${hashTagWord}`;

	// Brad's Solution 2 - Using `.reduce()`

	const hashtag = str.split(' ').reduce(function (tag, word) {
		return tag + word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
	}, '#');

	return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
