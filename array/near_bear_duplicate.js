function nearDuplicate(nums, k) {
	const hash = {};
	let value = false;
	for (let i = 0; i < nums.length; i++) {
		let elem = nums[i];
		if (elem in hash) {
			let absValue = Math.abs(hash[elem] - i);
			if (absValue <= k) {
				console.log(absValue);
				value = true;
			}
		}
		hash[nums[i]] = i;
	}
	console.log(hash);
	return value;
}

console.log(nearDuplicate([ 1, 2, 3, 1, 2, 3 ], 2));
