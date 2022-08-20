import { BOBA_EXCHANGE_SUBGRAPH_URL } from '@koyofinance/exchange-sdk';
import { useKoyoKyoGaugesQuery } from 'query/generated/graphql-codegen-generated';
import { useCurrentTimestamp } from '../../../hooks/useCurrentTimestamp';
import { useActiveNetworkVersion } from '../../../state/application/hooks';
import { useBlocksFromTimestamps } from '../../blocks/useBlocksFromTimestamp';

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
	const { blocks } = useBlocksFromTimestamps([tc]);
	const [blockTc] = blocks ?? [];

	const { data: gauges } = useKoyoKyoGaugesQuery(
		{ endpoint: activeNetwork.veClientUri || '' },
		{ block: { number: parseInt(blockTc?.number || 0, 10) } },
		{ enabled: Boolean(blockTc && activeNetwork.veClientUri) }
	);

	if (!gauges || !activeNetwork.veClientUri) {
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
