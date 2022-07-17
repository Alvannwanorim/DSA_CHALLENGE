function twoNumberSum(array, target) {
	const hash = {};
	for (let i = 0; i < array.length; i++) {
		let num = array[i];
		let diff = target - num;
		if (diff in hash) {
			return [ hash[diff], i ];
		}
		// console.log(hash);
		hash[array[i]] = i;
	}
	return false;
}

console.log(twoNumberSum([ 1, 3, 4, 5, 6 ], 20));
