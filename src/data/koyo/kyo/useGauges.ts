import { useBlocksFromTimestamps } from '../../../hooks/useBlocksFromTimestamp';
import { useCurrentTimestamp } from '../../../hooks/useCurrentTimestamp';
import { useActiveNetworkVersion } from '../../../state/application/hooks';
import { useKoyoKyoGaugesLazyQuery } from '../../../apollo/generated/graphql-codegen-generated';
import { useEffect } from 'react';

export interface GaugeInfoWeight {
	time: number;
	weight: number;
}

export interface GaugeInfo {
	address: string;
	name: string;
	symbol: string;
	killed: boolean;
	weight: GaugeInfoWeight;
	lastWeight: number;
}

export function useGauges(): GaugeInfo[] {
	const [activeNetwork] = useActiveNetworkVersion();
	const [tc] = useCurrentTimestamp();
	const { blocks, error: blockError } = useBlocksFromTimestamps([tc]);
	const [blockTc] = blocks ?? [];

	const [getGauges, { data: gauges }] = useKoyoKyoGaugesLazyQuery();

	useEffect(() => {
		console.log(tc, blockTc, blocks, blockError);
		if (blockTc) {
			void getGauges({
				variables: {
					block: { number: parseInt(blockTc.number, 10) }
				},
				context: {
					uri: activeNetwork.exchangeClientUri
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [blockTc]);

	if (!gauges) {
		return [];
	}

	return gauges.gauges.map<GaugeInfo>((gauge) => {
		const weight = (gauge.weights || []).reduce((prev, current) => (prev.time > current.time ? prev : current));

		return {
			address: gauge.id,
			name: gauge.name || '',
			symbol: gauge.symbol || '',
			killed: gauge.killed,
			weight: {
				time: parseInt(weight.time, 10),
				weight: parseInt(weight.weight, 10)
			},
			lastWeight: parseInt(weight.weight, 10)
		};
	});
}
