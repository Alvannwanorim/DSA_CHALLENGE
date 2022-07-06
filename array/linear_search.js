function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element === target) return true;
	}
	return false;
}

console.log(linearSearch([ 1, 2, 3, 4, 5, 6 ], 6));
