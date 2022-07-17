import { unixToDate } from '@koyofinance/core-sdk';
import { useBlocksFromTimestamps } from 'data/blocks/useBlocksFromTimestamp';
import { useExchangeSubgraphURL } from 'data/useExchangeSubgraphURL';
import { useDeltaTimestamps } from 'hooks/useDeltaTimestamps';
import { KoyoTokenFragment, LatestPriceFragment, useGetTokenDataQuery, useGetTokenPageDataQuery } from 'query/generated/graphql-codegen-generated';
import { useEffect } from 'react';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { ChartDataPoint } from 'types/charts';

export interface TokenValues {
	tvl: number;
	volume: number;
	swapCount: number;
	tvlToken: number;
}

export function getTokenValues(tokenAddress: string, tokens: KoyoTokenFragment[]): TokenValues {
	const token = tokens.find((token24) => tokenAddress === token24.address);

	if (!token) {
		return { tvl: 0, volume: 0, swapCount: 0, tvlToken: 0 };
	}

	return {
		tvl: parseFloat(token.totalBalanceUSD),
		volume: parseFloat(token.totalVolumeUSD),
		swapCount: parseFloat(token.totalSwapCount),
		tvlToken: parseFloat(token.totalBalanceNotional)
	};
}

export function getTokenPriceValues(tokenAddress: string, prices: LatestPriceFragment[]): { price: number } {
	const price = prices.find((prices) => prices.asset === tokenAddress);
	const priceUSD = price ? parseFloat(price.priceUSD) : 0;

	return { price: priceUSD };
}

export interface TokenData {
	// token is in some pool on uniswap
	exists: boolean;

	// basic token info
	name: string;
	symbol: string;
	address: string;

	// volume
	volumeUSD: number;
	volumeUSDChange: number;
	volumeUSDWeek: number;
	txCount: number;

	// fees
	feesUSD: number;

	// tvl
	tvlToken: number;
	tvlUSD: number;
	tvlUSDChange: number;

	priceUSD: number;
	priceUSDChange: number;
	priceUSDChangeWeek: number;

	// protocol collector info
	valueUSDCollected: number;
}

export function useKoyoTokens(): TokenData[] {
	const subgraphUrl = useExchangeSubgraphURL();
	const [t24, t48, tWeek] = useDeltaTimestamps();
	const { blocks } = useBlocksFromTimestamps([t24, t48, tWeek]);
	const [block24, _block48, blockWeek] = blocks ?? [];
	const { data } = useGetTokenDataQuery(
		{ endpoint: subgraphUrl },
		{
			block24: { number: parseInt(block24?.number || 0, 10) },
			// block48: { number: parseInt(block48?.number || 0, 10) },
			blockWeek: { number: parseInt(blockWeek?.number || 0, 10) }
		},
		{
			enabled: Boolean(block24 && blockWeek)
		}
	);

	if (!data) {
		return [];
	}

	const { tokens, prices, tokens24, prices24, tokensWeek, pricesWeek } = data;

	return tokens.map((token) => {
		const tokenData = getTokenValues(token.address, tokens);
		const tokenData24 = getTokenValues(token.address, tokens24);
		// const tokenData48 = getTokenValues(token.address, tokens48);
		const tokenDataWeek = getTokenValues(token.address, tokensWeek);
		const priceData = getTokenPriceValues(token.address, prices);
		const priceData24 = getTokenPriceValues(token.address, prices24);
		// const priceData48 = getTokenPriceValues(token.address, prices48);
		const priceDataWeek = getTokenPriceValues(token.address, pricesWeek);
		const valueUSDCollected = 0;

		return {
			...token,
			name: token.name || '',
			symbol: token.symbol || '',
			exists: true,
			volumeUSD: tokenData.volume - tokenData24.volume,
			volumeUSDChange: (tokenData.volume - tokenData24.volume) / tokenData24.volume,
			volumeUSDWeek: tokenData.volume - tokenDataWeek.volume,
			txCount: parseFloat(token.totalSwapCount),
			feesUSD: 0,
			tvlToken: tokenData.tvlToken,
			tvlUSD: tokenData.tvl,
			valueUSDCollected,
			tvlUSDChange: (tokenData.tvl - tokenData24.tvl) / tokenData24.tvl,
			priceUSD: priceData.price,
			priceUSDChange: priceData.price && priceData24.price ? ((priceData.price - priceData24.price) / priceData24.price) * 100 : 0,
			priceUSDChangeWeek: priceData.price && priceDataWeek.price ? ((priceData.price - priceDataWeek.price) / priceDataWeek.price) * 100 : 0
		};
	});
}

export function useKoyoTokenData(address: string): TokenData | null {
	const tokens = useKoyoTokens();
	const token = tokens.find((token) => token.address === address);

	return token || null;
}

export function useKoyoTokenPageData(address: string): {
	tvlData: ChartDataPoint[];
	volumeData: ChartDataPoint[];
	priceData: ChartDataPoint[];
} {
	const [activeNetwork] = useActiveNetworkVersion();
	const subgraphUrl = useExchangeSubgraphURL();
	const { data } = useGetTokenPageDataQuery({ endpoint: subgraphUrl }, { address, startTimestamp: activeNetwork.startTimeStamp });
	const snapshots = data?.tokenSnapshots || [];

	const tvlData = snapshots.map((snapshot) => {
		const value = parseFloat(snapshot.totalBalanceUSD);
		return {
			value: value > 0 ? value : 0,
			time: unixToDate(snapshot.timestamp)
		};
	});

	const volumeData = snapshots.map((snapshot, idx) => {
		const prevValue = idx === 0 ? 0 : parseFloat(snapshots[idx - 1].totalVolumeUSD);
		const value = parseFloat(snapshot.totalVolumeUSD);

		return {
			value: value - prevValue > 0 ? value - prevValue : 0,
			time: unixToDate(snapshot.timestamp)
		};
	});

	const priceData = snapshots.map((snapshot) => {
		return {
			value: parseFloat(snapshot.totalBalanceUSD) / parseFloat(snapshot.totalBalanceNotional),
			time: unixToDate(snapshot.timestamp)
		};
	});

	return {
		tvlData,
		volumeData,
		priceData
	};
}
