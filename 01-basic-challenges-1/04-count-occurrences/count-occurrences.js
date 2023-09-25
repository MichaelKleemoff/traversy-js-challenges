function countOccurrences(str, char) {
	return str
		.toLowerCase()
		.split('')
		.filter((letter) => letter === char).length;
}

module.exports = countOccurrences;
