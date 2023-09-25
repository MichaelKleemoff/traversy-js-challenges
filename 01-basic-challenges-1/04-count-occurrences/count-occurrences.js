function countOccurrences(str, char) {
	return str
		.toLowerCase()
		.split('')
		.filter((letter) => letter === char).length;
}

console.log(countOccurrences('chOoOOookie', 'o'));

module.exports = countOccurrences;
