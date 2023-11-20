function removeDuplicates(arr) {
	// Solution 1 -
	// const noDuplicates = [];

	// for (let i = 0; i < arr.length; i++) {
	// 	if (!noDuplicates.includes(arr[i])) {
	// 		noDuplicates.push(arr[i]);
	// 	}
	// }
	// return noDuplicates;

	// Solution 2 -
	// return arr.filter((el, i) => arr.indexOf(el) === i);

	// Solution 3 -
	return [...new Set(arr)];
}

module.exports = removeDuplicates;
