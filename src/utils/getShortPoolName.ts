import { PoolData } from '../data/koyo/exchange/usePools';

export function getShortPoolName(poolData: PoolData) {
	let shortName = '';
	shortName = poolData.tokens.map((e) => e.symbol).join('/');
	if (poolData.tokens[1].weight !== 0) {
		const ratios = ` (${poolData.tokens.map((e) => Number(e.weight * 100).toFixed(0)).join('/')})`;
		shortName += ratios;
	}
	return shortName;
}
