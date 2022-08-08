import { useBlocksFromTimestamps } from 'data/blocks/useBlocksFromTimestamp';
import { useExchangeSubgraphURL } from 'data/useExchangeSubgraphURL';
import dayjs from 'dayjs';
import { useDeltaTimestamps } from 'hooks/useDeltaTimestamps';
import { useGetUserWalletPoolDataQuery } from 'query/generated/graphql-codegen-generated';
import { PoolData } from './usePools';
import { TokenSet } from './useTokens';

export interface PoolDataUser extends PoolData {
	userTVL: number;
	userRelativeTVL: number;
	tokenSet: TokenSet[];
	dailyFees: number;
}

export interface UserPoolData {
	share: number;
	relativeShare: number;
	poolId: string;
	timestamp: number;
}

export default function useUserPools(address: string) {
	const subgraphUrl = useExchangeSubgraphURL();
	const userShares: UserPoolData[] = [];
	const currentTimeStamps = [dayjs().unix()];

	const [t24, t48, tWeek] = useDeltaTimestamps();
	const { blocks } = useBlocksFromTimestamps([t24, t48, tWeek]);
	const [block24] = blocks ?? [];

	const { data } = useGetUserWalletPoolDataQuery(
		{ endpoint: subgraphUrl },
		{
			block: parseInt(block24?.number || 0, 10),
			accountAddress: address
		},
		{
			enabled: Boolean(block24 !== undefined)
		}
	);

	if (!data) {
		return [];
	}

	if (data && data.poolShares) {
		data.poolShares.forEach((poolShare) => {
			const userShare: UserPoolData = <UserPoolData>{};
			userShare.share = Number(poolShare.balance);
			userShare.relativeShare = Number(poolShare.balance) / Number(poolShare.poolId.totalShares);
			userShare.poolId = poolShare.poolId.id;
			[userShare.timestamp] = currentTimeStamps;
			userShares.push(userShare);
		});
	}
	return userShares;
}
