function arrayIntersection(arr1, arr2) {
	// Solution 1 -
	// const combinedArr = arr1.concat(arr2);
	// const intersection = combinedArr.filter(
	// 	(e, i) => combinedArr.indexOf(e) !== i
	// );
	// return intersection;

	// Solution 2 -
	const intersection = [];

	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			intersection.push(arr1[i]);
		}
	}
	return intersection;
}

module.exports = arrayIntersection;
