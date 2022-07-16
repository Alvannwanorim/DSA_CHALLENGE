function validPalindrome(str1, str2) {
	let reverseStr = '';
	for (let i = str1.length - 1; i >= 0; i--) {
		console.log(str1[i]);
		reverseStr += str1[i];
	}
	// console.log(reverseStr);
	if (str2 === reverseStr) return true;
	return false;
}

console.log(validPalindrome('hello', 'olleh'));
