import { useMemo } from 'react';
import { GenericChartEntry } from 'types';
import { unixToType } from 'utils/unixToType';

export function useTransformedVolumeData(chartData: GenericChartEntry[] | undefined, type: 'month' | 'week') {
	return useMemo(() => {
		if (chartData) {
			const data: Record<string, GenericChartEntry> = {};

			chartData.forEach(({ time, value }: { time: string; value: number }) => {
				const group = unixToType(Math.floor(new Date(time).getTime() / 1000), type);
				if (data[group]) {
					data[group].value += value;
				} else {
					data[group] = {
						time,
						value
					};
				}
			});

			return Object.values(data);
		}

		return [];
	}, [chartData, type]);
}
