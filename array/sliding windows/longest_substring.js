/**
 *  TC: O(N)
 *  SC: O(N)
 * @param str: string
 * @return 
 */
function longestSubstring(str) {
	let left = 0;
	let max = 0;
	let result = new Set();

	for (let r = 0; r < str.length; r++) {
		//The code will check for an existing item on the set
		// If found, all the previously saved items will be deleted
		// the set will return to being empty
		while (result.has(str[r])) {
			// console.log('here');
			result.delete(str[left]);
			left += 1;
		}
		result.add(str[r]);
		// console.log(left);
		max = Math.max(max, r - left + 1);
	}

	console.log(result);
	return max;
}

console.log(longestSubstring('abcabccbc'));
