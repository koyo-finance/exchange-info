import { ChainId } from '@koyofinance/core-sdk';
import { useEffect, useState } from 'react';
import { useActiveWeb3 } from './useActiveWeb3';
import { useProviders } from './useProviders';

export function useTimestampFromBlock(block: number | undefined): number | undefined {
	const { activeChain } = useActiveWeb3();
	const providers = useProviders();

	const [timestamp, setTimestamp] = useState<number>();
	useEffect(() => {
		async function fetchTimestamp() {
			if (block) {
				const blockData = await providers[(activeChain?.id ?? ChainId.BOBA) as ChainId]!.getBlock(block);
				blockData && setTimestamp(blockData.timestamp);
			}
		}
		if (!timestamp) {
			void fetchTimestamp();
		}
	}, [block, activeChain, providers, timestamp]);
	return timestamp;
}
