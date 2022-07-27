function maxSumSubArray(nums, k) {
	let max = Number.NEGATIVE_INFINITY;
	currentSum = 0;
	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
		if (i >= k - 1) {
			max = Math.max(max, currentSum);
			currentSum -= nums[i - k + 1];
		}
	}
	return max;
}

console.log(maxSumSubArray([ 1, 2, 3, 4, 5, 6, 7, 8 ], 1));
