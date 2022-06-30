import { KoyoSwapFragment, useGetAllTransactionDataQuery, useGetTransactionDataLazyQuery } from 'apollo/generated/graphql-codegen-generated';
import { groupBy, map, orderBy, sumBy, uniqBy } from 'lodash';
import { useEffect, useRef } from 'react';
import { useActiveNetworkVersion } from 'state/application/hooks';

export function useKoyoTransactionData(
	addresses: string[],
	poolIds: string[]
): {
	swaps: KoyoSwapFragment[];
	swapPairVolumes: { name: string; value: number }[];
} {
	const [activeNetwork] = useActiveNetworkVersion();
	const [getTokenTransactionData, { data }] = useGetTransactionDataLazyQuery();
	const ref = useRef<{ poolIds: string[]; addresses: string[] }>({ poolIds: [], addresses: [] });

	useEffect(() => {
		if (poolIds.length !== ref.current.poolIds.length || addresses.length !== ref.current.addresses.length) {
			ref.current = { poolIds, addresses };

			getTokenTransactionData({
				variables: {
					addresses,
					poolIds,
					startTimestamp: activeNetwork.startTimeStamp
				},
				context: {
					uri: activeNetwork.exchangeClientUri
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [poolIds, addresses]);

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
	const { data } = useGetAllTransactionDataQuery({
		variables: { startTimestamp: activeNetwork.startTimeStamp },
		context: { uri: activeNetwork.exchangeClientUri }
	});
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
