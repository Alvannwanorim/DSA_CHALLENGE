function duplicatePair(array) {
	let hash = {};
	for (let i = 0; i < array.length; i++) {
		if (hash[array[i]]) {
			return true;
		}
		hash[array[i]] = 1;
	}
	console.log(hash);
	return false;
}

console.log(duplicatePair([ 1, 3, 4, 5 ]));
