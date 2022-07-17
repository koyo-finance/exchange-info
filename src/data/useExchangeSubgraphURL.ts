import { useActiveNetworkVersion } from 'state/application/hooks';
import { CHAIN_EXCHANGE_SUBGRAPH } from '@koyofinance/exchange-sdk';
import { ChainId } from '@koyofinance/core-sdk';

export function useExchangeSubgraphURL(chainOverride?: ChainId) {
	const [activeNetwork] = useActiveNetworkVersion();

	return CHAIN_EXCHANGE_SUBGRAPH[chainOverride || (activeNetwork.id as number as ChainId)] || '';
}
