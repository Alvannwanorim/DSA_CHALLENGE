function anagram(s, k) {
	if (s.length !== k.length) return false;
	const table = {};
	for (let str of s) {
		if (table[str]) {
			table[str] = table[str] + 1;
		} else {
			table[str] = 1;
		}
	}

	for (let str of k) {
		if (!table[str]) return false;
		table[str] = table[str] - 1;
	}
	console.log(table);
	return true;
}

console.log(anagram('eat', 'ate'));
