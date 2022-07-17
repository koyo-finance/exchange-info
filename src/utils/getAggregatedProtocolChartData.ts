import { ChainDisplayName } from '@koyofinance/core-sdk';
import { GenericChartEntry } from 'types';

export interface AggregateProtocolChartData {
	time: string;
	[C: string]: number | string;
}

export default function getAggregatedProtocolChartData(chartDatas: { chain: ChainDisplayName; data: GenericChartEntry[] }[], defaultValue: number) {
	const aggregatedData: AggregateProtocolChartData[] = [];

	chartDatas[0].data.forEach((gce) => {
		const aggregatedEntry: AggregateProtocolChartData = {
			time: gce.time,
			...Object.fromEntries(chartDatas.map((data) => [data.chain, defaultValue]))
		};

		chartDatas.forEach(({ chain, data }) => (aggregatedEntry[chain] = data.find((cItem) => cItem.time === gce.time)?.value || defaultValue));

		aggregatedData.push(aggregatedEntry);
	});

	return aggregatedData;
}
