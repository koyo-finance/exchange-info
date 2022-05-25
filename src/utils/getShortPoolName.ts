export const getShortPoolName = (poolData: any) => {
	let shortName = '';
	shortName = poolData.tokens.map((e: any) => (e.symbol ? e.symbol : 'MKR')).join('/');
	if (poolData.tokens[1].weight !== 0) {
		const ratios = ` (${poolData.tokens.map((e: any) => Number(e.weight * 100).toFixed(0)).join('/')})`;
		shortName += ratios;
	}
	return shortName;
};
