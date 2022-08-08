import { unixToDate } from '@koyofinance/core-sdk';
import { useExchangeSubgraphURL } from 'data/useExchangeSubgraphURL';
import { options } from 'numeral';
import { useEffect } from 'react';
import { GenericChartEntry } from 'types';
import { useDeltaTimestamps } from '../../../hooks/useDeltaTimestamps';
import { KoyoPoolFragment, useGetPoolChartDataQuery, useGetPoolDataQuery } from '../../../query/generated/graphql-codegen-generated';
import { useActiveNetworkVersion } from '../../../state/application/hooks';
import { useBlocksFromTimestamps } from '../../blocks/useBlocksFromTimestamp';

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
	const subgraphUrl = useExchangeSubgraphURL();
	const [t24, t48, tWeek] = useDeltaTimestamps();
	const { blocks } = useBlocksFromTimestamps([t24, t48, tWeek]);
	const [block24, block48, blockWeek] = blocks ?? [];
	const { data } = useGetPoolDataQuery(
		{ endpoint: subgraphUrl },
		{
			block24: { number: parseInt(block24?.number || 0, 10) },
			block48: { number: parseInt(block48?.number || 0, 10) },
			blockWeek: { number: parseInt(blockWeek?.number || 0, 10) },
			totalLiquidity: '0.01'
		},
		{
			enabled: Boolean(block24 && block48 && blockWeek)
		}
	);

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

export function useKoyoPoolData(poolId: string): PoolData | null {
	const pools = useKoyoPools();
	const pool = pools.find((pool) => pool.id === poolId);

	return pool || null;
}

export function useKoyoPoolsForToken(address: string) {
	const pools = useKoyoPools();

	return pools.filter((pool) => pool.tokens.find((token) => token.address === address));
}

export function useKoyoPoolPageData(poolId: string): {
	tvlData: GenericChartEntry[];
	volumeData: GenericChartEntry[];
	feesData: GenericChartEntry[];
} {
	const [activeNetwork] = useActiveNetworkVersion();
	const subgraphUrl = useExchangeSubgraphURL();
	const { data } = useGetPoolChartDataQuery({ endpoint: subgraphUrl }, { poolId, startTimestamp: activeNetwork.startTimeStamp });
	if (!data) {
		return { tvlData: [], volumeData: [], feesData: [] };
	}

	const { poolSnapshots } = data;

	const tvlData = poolSnapshots.map((snapshot) => ({
		value: parseFloat(snapshot.totalLiquidity),
		time: unixToDate(snapshot.timestamp)
	}));

	const volumeData = poolSnapshots.map((snapshot, idx) => {
		const prevValue = idx === 0 ? 0 : parseFloat(poolSnapshots[idx - 1].swapVolume);
		const value = parseFloat(snapshot.swapVolume);

		return {
			value: value - prevValue > 0 ? value - prevValue : 0,
			time: unixToDate(snapshot.timestamp)
		};
	});

	const feesData = poolSnapshots.map((snapshot, idx) => {
		const prevValue = idx === 0 ? 0 : parseFloat(poolSnapshots[idx - 1].swapFees);
		const value = parseFloat(snapshot.swapFees);

		return {
			value: value - prevValue > 0 ? value - prevValue : 0,
			time: unixToDate(snapshot.timestamp)
		};
	});

	return {
		tvlData,
		volumeData,
		feesData
	};
}
