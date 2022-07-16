function mostFrequencyNum(nums) {
	const frequency = {};
	let mostFreq = 0;
	for (let i = 0; i < nums.length; i++) {
		frequency[nums[i]] ? (frequency[nums[i]] = frequency[nums[i]] + 1) : (frequency[nums[i]] = 1);
	}

	for (let num in frequency) {
		if (frequency[num] > mostFreq) {
			mostFreq = num;
		}
	}
	return mostFreq;
}

console.log(mostFrequencyNum([ 1, 2, 3, 3, 4, 6 ]));
