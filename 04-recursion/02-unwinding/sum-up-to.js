function sumUpTo(num) {
	// Base case
	if (num === 1) {
		return 1;
	}

	// Recursive case
	return num + sumUpTo(num - 1);
}

module.exports = sumUpTo;
