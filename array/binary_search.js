function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		const midValue = Math.floor((arr[left] + arr[right]) / 2);
		if (target === arr[midValue]) {
			return true;
		} else if (target > arr[midValue]) {
			left += 1;
		} else {
			right -= 1;
		}
	}
	return false;
}
console.log(binarySearch([ 1, 2, 3, 4, 5, 6 ], 8));
