function fibonacci(num) {
	// Base case
	if (num < 2) {
		return num;
	}

	// Recursive case
	return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
