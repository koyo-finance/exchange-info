import { useExchangeSubgraphURL } from 'data/useExchangeSubgraphURL';
import { groupBy, head, map, orderBy } from 'lodash';
import { PriceChartEntry } from 'types';
import { useKoyoChartTokenPricesQuery } from '../../../query/generated/graphql-codegen-generated';

const TIME_INTERVAL = 60 * 60;

export interface KoyoTokenData {
	chartData: PriceChartEntry[];
	loading: boolean;
}

export function useKoyoToken(tokenAddress: string): KoyoTokenData {
	const subgraphUrl = useExchangeSubgraphURL();
	const { data: pricesData, isLoading } = useKoyoChartTokenPricesQuery({ endpoint: subgraphUrl }, { asset: tokenAddress });

	const prices = [
		...(pricesData?.prices1 || []),
		...(pricesData?.prices2 || []),
		...(pricesData?.prices3 || []),
		...(pricesData?.prices4 || []),
		...(pricesData?.prices5 || []),
		...(pricesData?.prices6 || [])
	];

	const formatted = prices.map((price) => ({
		...price,
		priceUSD: parseFloat(price.priceUSD),
		amount: parseFloat(price.amount)
	}));
	const grouped = groupBy(formatted, (price) => `${Math.ceil(price.timestamp / TIME_INTERVAL) * TIME_INTERVAL}`);

	const chartData = map(grouped, (prices, timestamp): PriceChartEntry => {
		return {
			open: head(orderBy(prices, 'timestamp', 'asc'))?.priceUSD || 0,
			high: head(orderBy(prices, 'priceUSD', 'desc'))?.priceUSD || 0,
			low: head(orderBy(prices, 'priceUSD', 'asc'))?.priceUSD || 0,
			close: head(orderBy(prices, 'timestamp', 'desc'))?.priceUSD || 0,
			// volume: sumBy(prices, (price) => price.amount * price.priceUSD),
			// date: new Date(parseInt(timestamp) * 1000),
			// timestamp: parseInt(timestamp),
			time: parseInt(timestamp, 10)
		};
	});

	const sortedChartData = chartData.sort((a, b) => a.time - b.time);
	const filtered = sortedChartData.filter((item, idx) => {
		if (idx === 0) {
			return true;
		}

		return Math.abs((item.low - item.high) / (Math.abs(item.low + item.high) / 2)) < 0.2;
	});
	return {
		chartData: orderBy(filtered, 'timestamp', 'asc'),
		loading: isLoading
	};
}
