function titleCase(str) {
	// My solution 1 -
	// return str
	// 	.split(' ')
	// 	.map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
	// 	.join(' ');

	// My solution 2 -
	let strArr = str.split(' ');
	const firstCap = [];

	for (let i = 0; i < strArr.length; i++) {
		firstCap.push(
			`${strArr[i][0].toUpperCase()}${strArr[i].slice(1).toLowerCase()}`
		);
	}
	return firstCap.join(' ');
}

module.exports = titleCase;
