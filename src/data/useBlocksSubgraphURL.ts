import { ChainId, CHAIN_BLOCKS_SUBGRAPH } from '@koyofinance/core-sdk';
import { useActiveNetworkVersion } from 'state/application/hooks';

export function useBlocksSubgraphURL(chainOverride?: ChainId) {
	const [activeNetwork] = useActiveNetworkVersion();

	return CHAIN_BLOCKS_SUBGRAPH[chainOverride || (activeNetwork.id as number as ChainId)] || '';
}
