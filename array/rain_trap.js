/**
 * 
 * @param  height []
 * @returns  Max water trapped in the rain
 */
function rainTrap(height) {
	if (!height) return;
	let res = 0;
	let l = 0;
	let r = height.length - 1;
	let maxL = height[l];
	let maxR = height[r];
	while (l < r) {
		if (maxL < maxR) {
			l += 1;
			maxL = Math.max(maxL, height[l]);
			res += maxL - height[l];
		} else {
			r -= 1;
			maxR = Math.max(maxR, height[r]);
			res += maxR - height[r];
		}
	}
	return res;
}
console.log(rainTrap([ 1, 6, 0, 1, 0, 7, 2 ]));
