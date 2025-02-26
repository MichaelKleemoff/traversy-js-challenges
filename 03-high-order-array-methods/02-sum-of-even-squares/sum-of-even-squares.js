function sumOfEvenSquares(numbers) {
	return numbers
		.filter((num) => num % 2 === 0)
		.map((num) => num * num)
		.reduce((sum, square) => sum + square, 0);
}

module.exports = sumOfEvenSquares;
