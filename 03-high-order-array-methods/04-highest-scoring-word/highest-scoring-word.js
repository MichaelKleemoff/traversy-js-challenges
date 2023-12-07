function highestScoringWord(str) {
	const words = str.split(' ');

	const scores = words.map((word) => {
		// 1st version -
		// let score = 0;

		// for (const letter of word) {
		// 	score += letter.charCodeAt(0) - 96;
		// }

		// return score;

		// 2nd version -
		return Array.from(word).reduce(
			(score, letter) => score + letter.charCodeAt(0) - 96,
			0
		);
	});

	// 1st version -
	// let highestScore = scores[0];
	// let highestIndex = 0;

	// for (let i = 1; i < scores.length; i++) {
	// 	if (scores[i] > highestScore) {
	// 		highestScore = scores[i];
	// 		highestIndex = i;
	// 	}
	// }

	// 2nd version -
	const highestScore = Math.max(...scores);
	const highestIndex = scores.indexOf(highestScore);
	console.log(highestScore);

	return words[highestIndex];
}

module.exports = highestScoringWord;
