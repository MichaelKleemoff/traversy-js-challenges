function formatPhoneNumber(numbers) {
	// Solution 1 -
	// const areaCode = [];
	// const prefix = [];
	// const prefixUnique = [];

	// for (let i = 0; i < numbers.length; i++) {
	// 	if (i < 3) {
	// 		areaCode.push(numbers[i]);
	// 	} else if (i < 6) {
	// 		prefix.push(numbers[i]);
	// 	} else {
	// 		prefixUnique.push(numbers[i]);
	// 	}
	// }
	// return `(${areaCode.join('')}) ${prefix.join('')}-${prefixUnique.join('')}`;

	// Solution 2 -
	// const areaCode = numbers.slice(0, 3).join('');
	// const prefix = numbers.slice(3, 6).join('');
	// const prefixUnique = numbers.slice(6).join('');
	// return `(${areaCode}) ${prefix}-${prefixUnique}`;

	// Solution 3 -

	return `(${numbers.slice(0, 3).join('')}) ${numbers
		.slice(3, 6)
		.join('')}-${numbers.slice(6).join('')}`;
}

module.exports = formatPhoneNumber;
