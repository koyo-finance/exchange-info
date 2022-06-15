import { useEffect } from 'react';
import { KoyoPoolFragment, useGetPoolDataLazyQuery } from '../../../apollo/generated/graphql-codegen-generated';
import { useBlocksFromTimestamps } from '../../../hooks/useBlocksFromTimestamp';
import { useDeltaTimestamps } from '../../../hooks/useDeltaTimestamps';
import { useActiveNetworkVersion } from '../../../state/application/hooks';

export interface PoolValues {
	tvl: number;
	volume: number;
	swapCount: number;
	fees: number;
	poolType?: string | null;
}

export function getPoolValues(poolId: string, pools: KoyoPoolFragment[]): PoolValues {
	const pool = pools.find((pool) => poolId === pool.id);

	if (!pool) {
		return { tvl: 0, volume: 0, swapCount: 0, fees: 0, poolType: '' };
	}

	return {
		tvl: parseFloat(pool.totalLiquidity),
		volume: parseFloat(pool.totalSwapVolume),
		fees: parseFloat(pool.totalSwapFee),
		swapCount: parseFloat(pool.swapsCount),
		poolType: pool.poolType
	};
}

export interface PoolTokenData {
	name: string;
	symbol: string;
	address: string;
	decimals: number;
	derivedETH: number;
	price: number;
	tvl: number;
	weight: number;
}

export interface PoolData {
	id: string;
	name: string;
	symbol: string;

	// basic token info
	address: string;
	feeTier: number;
	swapFee: number;

	tokens: PoolTokenData[];

	// for tick math
	liquidity: number;
	sqrtPrice: number;
	tick: number;

	// volume
	volumeUSD: number;
	volumeUSDChange: number;
	volumeUSDWeek: number;

	// liquidity
	tvlUSD: number;
	tvlUSDChange: number;

	feesUSD: number;

	// Pool Type info
	poolType: string;
}

export function useKoyoPools(): PoolData[] {
	const [activeNetwork] = useActiveNetworkVersion();
	const [t24, t48, tWeek] = useDeltaTimestamps();
	const { blocks, error: blockError } = useBlocksFromTimestamps([t24, t48, tWeek]);
	const [block24, block48, blockWeek] = blocks ?? [];
	const [getPoolData, { data }] = useGetPoolDataLazyQuery();

	// const incentives = GetIncentiveList();
	// console.log("incentives", incentives['week_52']);

	useEffect(() => {
		if (block24) {
			// TODO: replace this once the graph has caught up
			void getPoolData({
				variables: {
					block24: { number: parseInt(block24.number, 10) },
					block48: { number: parseInt(block48.number, 10) },
					blockWeek: { number: parseInt(blockWeek.number, 10) }
				},
				context: {
					uri: activeNetwork.exchangeClientUri
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [block24]);

	if (!data) {
		return [];
	}

	const { pools, pools24, pools48, poolsWeek, prices } = data;

	return pools.map((pool) => {
		const poolData = getPoolValues(pool.id, pools);
		const poolData24 = getPoolValues(pool.id, pools24);
		const poolData48 = getPoolValues(pool.id, pools48);
		const poolDataWeek = getPoolValues(pool.id, poolsWeek);

		return {
			...pool,
			name: pool.name || '',
			symbol: pool.symbol || '',
			feeTier: 1,
			swapFee: parseFloat(pool.swapFee),
			tokens: (pool.tokens || []).map((token) => {
				const weight = token.weight ? parseFloat(token.weight) : 0;
				const tokenPrice = prices.find((price) => price.asset === token.address);
				const price = tokenPrice ? parseFloat(tokenPrice.priceUSD) : 0;

				return {
					...token,
					decimals: token.decimals,
					derivedETH: 0,
					price,
					tvl: parseFloat(token.balance) * price,
					weight
				};
			}),
			liquidity: poolData.tvl,
			sqrtPrice: 0,
			tick: 0,
			volumeUSD: poolData.volume - poolData24.volume,
			volumeUSDChange:
				(poolData.volume - poolData24.volume - (poolData24.volume - poolData48.volume)) / (poolData24.volume - poolData48.volume),
			volumeUSDWeek: poolData.volume - poolDataWeek.volume,
			feesUSD: poolData.fees - poolData24.fees,
			tvlUSD: poolData.tvl,
			tvlUSDChange: (poolData.tvl - poolData24.tvl) / poolData24.tvl,
			poolType: `${poolData.poolType}`
		};
	});
}

export function useKoyoPoolsForToken(address: string) {
	const pools = useKoyoPools();

	return pools.filter((pool) => pool.tokens.find((token) => token.address === address));
}
