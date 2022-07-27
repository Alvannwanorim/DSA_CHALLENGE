/**
 * Space Complexicity: O(1)
 * Time Complexicity: O(N)
 * @param prices[]
 * @returns MaxProfit: integer
 */
function bestTimeToBuyOrSell(prices) {
	let left = 0;
	let right = 1;
	let maxProfit = 0;
	while (right < prices.length) {
		if (prices[left] < prices[right]) {
			let profit = prices[right] - prices[left];
			maxProfit = Math.max(maxProfit, profit);
		} else {
			left = right;
		}
		right += 1;
	}
	return maxProfit;
}

console.log(bestTimeToBuyOrSell([ 6, 3, 4, 8, 8 ]));
