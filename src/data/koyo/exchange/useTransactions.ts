import { ChainId } from '@koyofinance/core-sdk';
import { SUPPORTED_NETWORK_VERSIONS } from 'constants/networks';
import { useExchangeSubgraphURL } from 'data/useExchangeSubgraphURL';
import { groupBy, map, orderBy, sumBy, uniqBy } from 'lodash';
import {
	fetcher,
	GetAllTransactionDataDocument,
	GetAllTransactionDataQuery,
	GetAllTransactionDataQueryVariables,
	KoyoSwapFragment,
	useGetAllTransactionDataQuery,
	useGetTransactionDataQuery
} from 'query/generated/graphql-codegen-generated';
import { useQueries } from 'react-query';
import { useActiveNetworkVersion } from 'state/application/hooks';

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

export interface ChainedKoyoSwapFragment extends KoyoSwapFragment {
	chain: ChainId;
}

export function useKoyoAllTransactionsData(): {
	swaps: ChainedKoyoSwapFragment[];
	swapPairVolumes: { chain: ChainId; name: string; value: number }[];
} {
	const chainTransactionsResults = useQueries(
		SUPPORTED_NETWORK_VERSIONS.map((network) => ({
			queryKey: ['GetAllTransactionData', { startTimestamp: network.startTimeStamp, subgraph: network.exchangeClientUri }],
			queryFn: fetcher<GetAllTransactionDataQuery, GetAllTransactionDataQueryVariables>(
				network.exchangeClientUri,
				{},
				GetAllTransactionDataDocument,
				{
					startTimestamp: network.startTimeStamp
				}
			)
		}))
	);

	let allSwaps: ChainedKoyoSwapFragment[] = [];
	let allSwapPairVolumes: { chain: ChainId; name: string; value: number }[] = [];

	SUPPORTED_NETWORK_VERSIONS.forEach((network, i) => {
		const swaps = uniqBy(orderBy([...(chainTransactionsResults[i].data?.swaps || [])], 'timestamp', 'desc'), (swap) => swap.id).map((swap) => ({
			...swap,
			chain: network.id as ChainId
		}));

		const groupedByPair = groupBy(swaps, (swap) => `${swap.tokenInSym} -> ${swap.tokenOutSym}`);
		const swapPairVolumes = map(groupedByPair, (swaps, key) => {
			return {
				chain: network.id as ChainId,
				name: key,
				value: sumBy(swaps, (swap) => parseFloat(swap.valueUSD))
			};
		});

		allSwaps = allSwaps.concat(swaps);
		allSwapPairVolumes = allSwapPairVolumes.concat(swapPairVolumes);
	});

	allSwaps = orderBy(allSwaps, 'timestamp', 'desc');

	return {
		swaps: allSwaps,
		swapPairVolumes: allSwapPairVolumes
	};
}

export function useKoyoAllActiveChainTransactionsData(): {
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
