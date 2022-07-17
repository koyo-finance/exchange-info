import { KoyoSwapFragment, useGetAllTransactionDataQuery, useGetTransactionDataQuery } from 'query/generated/graphql-codegen-generated';
import { groupBy, map, orderBy, sumBy, uniqBy } from 'lodash';
import { useEffect, useRef } from 'react';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { useExchangeSubgraphURL } from 'data/useExchangeSubgraphURL';

export function useKoyoTransactionData(
	addresses: string[],
	poolIds: string[]
): {
	swaps: KoyoSwapFragment[];
	swapPairVolumes: { name: string; value: number }[];
} {
	const [activeNetwork] = useActiveNetworkVersion();
	const subgraphUrl = useExchangeSubgraphURL();
	const { data } = useGetTransactionDataQuery(
		{ endpoint: subgraphUrl },
		{
			addresses,
			poolIds,
			startTimestamp: activeNetwork.startTimeStamp
		}
	);

	const swaps = uniqBy(orderBy([...(data?.swapsIn || []), ...(data?.swapsOut || [])], 'timestamp', 'desc'), (swap) => swap.id);

	const groupedByPair = groupBy(swaps, (swap) => `${swap.tokenInSym} -> ${swap.tokenOutSym}`);
	const swapPairVolumes = map(groupedByPair, (swaps, key) => {
		return {
			name: key,
			value: sumBy(swaps, (swap) => parseFloat(swap.valueUSD))
		};
	});

	return {
		swaps,
		swapPairVolumes
	};
}

export function useKoyoAllTransactionsData(): {
	swaps: KoyoSwapFragment[];
	swapPairVolumes: { name: string; value: number }[];
} {
	const [activeNetwork] = useActiveNetworkVersion();
	const subgraphUrl = useExchangeSubgraphURL();
	const { data } = useGetAllTransactionDataQuery({ endpoint: subgraphUrl }, { startTimestamp: activeNetwork.startTimeStamp });
	const swaps = uniqBy(orderBy([...(data?.swaps || [])], 'timestamp', 'desc'), (swap) => swap.id);

	const groupedByPair = groupBy(swaps, (swap) => `${swap.tokenInSym} -> ${swap.tokenOutSym}`);
	const swapPairVolumes = map(groupedByPair, (swaps, key) => {
		return {
			name: key,
			value: sumBy(swaps, (swap) => parseFloat(swap.valueUSD))
		};
	});

	return {
		swaps,
		swapPairVolumes
	};
}
