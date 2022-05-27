import { useDefiLlamaData } from './useDefiLlamaData';

export function useHistoricalProtocolData(protocol: string) {
	const { data: protocolData, error: protocolDataError } = useDefiLlamaData(protocol);

	if (!protocolData || protocolDataError) return {};

	return Object.fromEntries(
		Object.entries(protocolData.chainTvls) //
			.map(([chain, tvl]) => [
				chain,
				{
					totalValue: tvl.tvl.map((tvlEntry) => ({ time: new Date(tvlEntry.date), value: tvlEntry.totalLiquidityUSD })),
					tokens: tvl.tokens.map((tokenEntry, i) => ({
						time: new Date(tokenEntry.date),
						amounts: tokenEntry.tokens,
						values: tvl.tokensInUsd[i].tokens
					}))
				}
			])
	);
}
