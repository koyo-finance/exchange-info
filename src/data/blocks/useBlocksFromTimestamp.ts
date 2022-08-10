import { ChainId, CHAIN_BLOCKS_SUBGRAPH, SupportedBlocksSubgraphChainsList } from '@koyofinance/core-sdk';
import {
	fetcher,
	GetTimestampedBlockDocument,
	GetTimestampedBlockQuery,
	GetTimestampedBlockQueryVariables
} from 'query/generated/graphql-codegen-generated';
import { useMemo } from 'react';
import { useQueries } from 'react-query';
import { useActiveNetworkVersion } from '../../state/application/hooks';

/**
 * for a given array of timestamps, returns block entities
 * @param timestamps
 */
export function useBlocksFromTimestamps(
	timestamps: number[],
	chainOverried?: ChainId
): {
	blocks:
		| {
				timestamp: string;
				number: any;
		  }[]
		| undefined;
} {
	const [activeNetwork] = useActiveNetworkVersion();

	const blockResults = useQueries(
		timestamps.map((timestamp) => ({
			queryKey: ['GetTimestampedBlock', timestamp],
			queryFn: fetcher<GetTimestampedBlockQuery, GetTimestampedBlockQueryVariables>(
				CHAIN_BLOCKS_SUBGRAPH[
					(chainOverried as SupportedBlocksSubgraphChainsList) || //
						(activeNetwork.id as number as SupportedBlocksSubgraphChainsList)
				] || '',
				{},
				GetTimestampedBlockDocument,
				{
					gt: timestamp.toString(),
					lt: (timestamp + 600).toString()
				}
			)
		}))
	);

	const blocksFormatted = useMemo(() => {
		if (blockResults.every((bResult) => bResult.data?.blocks)) {
			const formatted: {
				timestamp: string;
				number: any;
			}[] = [];
			timestamps.forEach((timestamp, i) => {
				const blocks = blockResults[i].data?.blocks;
				if ((blocks?.length || 0) > 0) {
					formatted.push({
						timestamp: timestamp.toString(),
						number: blocks![0].number
					});
				}
			});
			return formatted;
		}
		return undefined;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [blockResults, timestamps]);

	return {
		blocks: blocksFormatted
	};
}
