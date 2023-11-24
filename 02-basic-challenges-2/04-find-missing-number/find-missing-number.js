function findMissingNumber(nums) {
	const n = nums.length + 1;

	if (nums.length === 0) return 1;
	if (!nums) return undefined;

	const expectedSum = (n * (n + 1)) / 2;
	// With `for loop` -
	// let actualSum = 0;

	// for (let i = 0; i < nums.length; i++) {
	// 	actualSum += nums[i];
	// }

	// With `.reduce()` method -
	let actualSum = nums.reduce((acc, cur) => acc + cur, 0);

	return expectedSum - actualSum;
}

module.exports = findMissingNumber;
