function twoSum(nums, target) {
	let left = 0;
	right = nums.length - 1;
	while (left < right) {
		let sum = nums[left] + nums[right];
		if (sum < target) {
			left += 1;
		} else if (sum > target) {
			right -= 1;
		} else {
			return [ left + 1, right + 1 ];
		}
	}
	return false;
}

console.log(twoSum([ 2, 3, 4 ], 6));
