import { ChainId, unixToDate } from '@koyofinance/core-sdk';
import { useBlocksFromTimestamps } from 'data/blocks/useBlocksFromTimestamp';
import { useExchangeSubgraphURL } from 'data/useExchangeSubgraphURL';
import { useDeltaTimestamps } from 'hooks/useDeltaTimestamps';
import { useGetProtocolDataQuery } from 'query/generated/graphql-codegen-generated';
import { GenericChartEntry } from 'types';

interface ProtocolData {
	tvl?: number;
	tvlChange?: number;
	tvlData: GenericChartEntry[];
}

export function useKoyoChainProtocolData(startTimestamp: number, chainOverride?: ChainId): ProtocolData {
	const exchangeSubgraphUrl = useExchangeSubgraphURL(chainOverride);
	const [t24, t48] = useDeltaTimestamps();
	const { blocks } = useBlocksFromTimestamps([t24, t48], chainOverride);
	const [block24, block48] = blocks ?? [];
	const { data } = useGetProtocolDataQuery(
		{ endpoint: exchangeSubgraphUrl },
		{
			startTimestamp,
			block24: { number: parseInt(block24?.number || 0, 10) },
			block48: { number: parseInt(block48?.number || 0, 10) }
		},
		{ enabled: Boolean(startTimestamp && block24 && block48) }
	);

	if (!data) {
		return { tvlData: [] };
	}

	const snapshots = data.koyoSnapshots;
	const koyo = data.koyos[0];
	const koyo24 = data.koyos24[0];

	const tvlData = snapshots.map((snapshot) => {
		const value = parseFloat(snapshot.totalLiquidity);

		return {
			value: value > 0 ? value : 0,
			time: unixToDate(snapshot.timestamp)
		};
	});

	const tvl = parseFloat(koyo.totalLiquidity);
	const tvl24 = parseFloat(koyo24.totalLiquidity);

	return {
		tvl,
		tvlChange: (tvl - tvl24) / tvl24,
		tvlData
	};
}
