import gql from 'graphql-tag';
export const KoyoKyoGauge = gql`
	fragment KoyoKyoGauge on Gauge {
		id
		name
		symbol
		weights {
			time
			weight
		}
	}
`;
export const GetLatestBlock = gql`
	query GetLatestBlock {
		blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
			id
			number
			timestamp
		}
	}
`;
export const KoyoKyoGauges = gql`
	query KoyoKyoGauges(
		$skip: Int
		$first: Int
		$orderBy: Gauge_orderBy
		$orderDirection: OrderDirection
		$where: Gauge_filter
		$block: Block_height
	) {
		gauges(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block) {
			...KoyoKyoGauge
		}
	}
	${KoyoKyoGauge}
`;
