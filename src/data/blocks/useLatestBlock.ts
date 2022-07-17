import { useBlocksSubgraphURL } from 'data/useBlocksSubgraphURL';
import { useGetLatestBlockQuery } from '../../query/generated/graphql-codegen-generated';

export function useLatestBlock(): { blockNumber?: number; loading: boolean } {
	const subgraphUrl = useBlocksSubgraphURL();
	const { data, isLoading } = useGetLatestBlockQuery(
		{ endpoint: subgraphUrl },
		{},
		{ refetchInterval: 10000, refetchOnWindowFocus: true, refetchOnMount: true }
	);

	return {
		blockNumber: data?.blocks[0]?.number ? parseFloat(data?.blocks[0]?.number) : undefined,
		loading: isLoading
	};
}
