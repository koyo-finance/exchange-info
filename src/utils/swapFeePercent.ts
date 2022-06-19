export function swapFeePercent(swapFee: number): string {
	return `${(swapFee * 100).toFixed(2)}%`;
}
