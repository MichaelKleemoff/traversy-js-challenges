function findMaxNumber(nums) {
	let num = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > num) {
			num = nums[i];
		}
	}
	return num;
}

module.exports = findMaxNumber;
