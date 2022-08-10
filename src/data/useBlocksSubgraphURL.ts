import { ChainId, CHAIN_BLOCKS_SUBGRAPH, SupportedBlocksSubgraphChainsList } from '@koyofinance/core-sdk';
import { useActiveNetworkVersion } from 'state/application/hooks';

export function useBlocksSubgraphURL(chainOverride?: ChainId) {
	const [activeNetwork] = useActiveNetworkVersion();

	return (
		CHAIN_BLOCKS_SUBGRAPH[
			(chainOverride as SupportedBlocksSubgraphChainsList) || //
				(activeNetwork.id as number as SupportedBlocksSubgraphChainsList)
		] || ''
	);
}
