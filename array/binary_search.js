function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		const midValue = Math.ceil((arr[left] + arr[right]) / 2);
		if (target === arr[midValue]) {
			return true;
		} else if (target > arr[midValue]) {
			left = midValue;
		} else {
			right = midValue;
		}
	}
	return false;
}
console.log(binarySearch([ 1, 2, 3, 4, 5, 6 ], 3));
