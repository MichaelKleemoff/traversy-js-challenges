function countOccurrences(str, char) {
	return str.split('').filter((letter) => letter === char).length;
}

module.exports = countOccurrences;
