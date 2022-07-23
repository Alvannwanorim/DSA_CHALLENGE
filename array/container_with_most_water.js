function containerwithMostWater(nums) {
	let left = 0;
	let right = nums.length - 1;
	let area = 0;

	while (left < right) {
		let tempArea = (right - left) * Math.min(nums[left], nums[right]);
		// console.log(tempArea);
		if (tempArea > area) {
			area = tempArea;
			console.log(area, nums[left], nums[right]);
		}
		if (nums[left] > nums[right]) {
			right--;
		} else if (nums[left] < nums[right]) {
			left++;
		} else {
			if (nums[left + 1] > nums[right - 1]) right--;
			left++;
		}
	}
	return area;
}

console.log(containerwithMostWater([ 1, 2, 3, 4, 5, 6 ]));
