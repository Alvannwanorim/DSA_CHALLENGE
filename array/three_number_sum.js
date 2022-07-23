function threeNumberSum(nums) {
	let res = [];
	let left = 0;
	let right = nums.length - 1;
	//Sor the array
	nums.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i - 1]) continue;

		left = i + 1;
		right = nums.length - 1;
		let tmp = 0;
		while (left < right) {
			tmp = nums[i] + nums[left] + nums[right];

			if (tmp === 0) {
				res.push([ nums[i], nums[left], nums[right] ]);
				left++;
				right--;

				while (nums[left] == nums[left - 1]) {
					left++;
				}

				while (nums[right] == nums[right + 1]) {
					right--;
				}
			} else if (tmp > 0) {
				right--;
			} else if (tmp < 0) {
				left++;
			}
		}
	}
	return res;
}
