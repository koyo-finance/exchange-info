import gql from 'graphql-tag';
export const KoyoPoolToken = gql`
	fragment KoyoPoolToken on PoolToken {
		id
		symbol
		name
		decimals
		address
		balance
		invested
		weight
		priceRate
		poolId {
			id
			address
		}
	}
`;
export const KoyoPool = gql`
	fragment KoyoPool on Pool {
		id
		address
		poolType
		symbol
		name
		swapFee
		totalWeight
		totalSwapVolume
		totalSwapFee
		totalLiquidity
		totalShares
		swapsCount
		holdersCount
		createTime
		owner {
			id
		}
		strategyType
		swapEnabled
		tokens(first: 1000) {
			...KoyoPoolToken
		}
	}
	${KoyoPoolToken}
`;
export const KoyoToken = gql`
	fragment KoyoToken on Token {
		id
		address
		decimals
		name
		symbol
		totalBalanceUSD
		totalBalanceNotional
		totalVolumeUSD
		totalVolumeNotional
		totalSwapCount
		latestPrice {
			asset
			pricingAsset
			price
			poolId {
				id
			}
		}
	}
`;
export const KoyoChartTokenPrice = gql`
	fragment KoyoChartTokenPrice on TokenPrice {
		id
		timestamp
		price
		priceUSD
		amount
	}
`;
export const LatestPrice = gql`
	fragment LatestPrice on LatestPrice {
		asset
		pricingAsset
		price
		priceUSD
		poolId {
			id
		}
	}
`;
export const TokenSnapshot = gql`
	fragment TokenSnapshot on TokenSnapshot {
		id
		timestamp
		totalBalanceUSD
		totalBalanceNotional
		totalVolumeUSD
		totalVolumeNotional
		totalSwapCount
	}
`;
export const KoyoKyoGauge = gql`
	fragment KoyoKyoGauge on Gauge {
		id
		name
		symbol
		killed
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
export const GetPoolData = gql`
	query GetPoolData($block24: Block_height!, $block48: Block_height!, $blockWeek: Block_height!) {
		pools(first: 1000, orderBy: totalLiquidity, orderDirection: desc, where: { totalLiquidity_gt: "0.01" }) {
			...KoyoPool
		}
		pools24: pools(first: 1000, orderBy: totalLiquidity, orderDirection: desc, where: { totalLiquidity_gt: "0.01" }, block: $block24) {
			...KoyoPool
		}
		pools48: pools(first: 1000, orderBy: totalLiquidity, orderDirection: desc, where: { totalLiquidity_gt: "0.01" }, block: $block48) {
			...KoyoPool
		}
		poolsWeek: pools(first: 1000, orderBy: totalLiquidity, orderDirection: desc, where: { totalLiquidity_gt: "0.01" }, block: $blockWeek) {
			...KoyoPool
		}
		prices: latestPrices(first: 1000) {
			...LatestPrice
		}
	}
	${KoyoPool}
	${LatestPrice}
`;
export const GetTokenData = gql`
	query GetTokenData($block24: Block_height!, $blockWeek: Block_height!) {
		tokens: tokens(first: 1000, orderBy: totalBalanceUSD, orderDirection: desc) {
			...KoyoToken
		}
		prices: latestPrices(first: 1000) {
			...LatestPrice
		}
		tokens24: tokens(first: 1000, orderBy: totalBalanceUSD, orderDirection: desc, block: $block24) {
			...KoyoToken
		}
		prices24: latestPrices(first: 1000, block: $block24) {
			...LatestPrice
		}
		tokensWeek: tokens(first: 1000, orderBy: totalBalanceUSD, orderDirection: desc, block: $blockWeek) {
			...KoyoToken
		}
		pricesWeek: latestPrices(first: 1000, block: $blockWeek) {
			...LatestPrice
		}
	}
	${KoyoToken}
	${LatestPrice}
`;
export const GetTokenPageData = gql`
	query GetTokenPageData($address: String!, $startTimestamp: Int!) {
		tokenSnapshots(first: 1000, orderBy: timestamp, orderDirection: asc, where: { token: $address, timestamp_gte: $startTimestamp }) {
			...TokenSnapshot
		}
	}
	${TokenSnapshot}
`;
export const GetPoolChartData = gql`
	query GetPoolChartData($poolId: String!, $startTimestamp: Int!) {
		poolSnapshots(first: 1000, orderBy: timestamp, orderDirection: asc, where: { pool: $poolId, timestamp_gte: $startTimestamp }) {
			id
			amounts
			totalShares
			swapVolume
			swapFees
			timestamp
			totalSwapVolume
			totalSwapFee
			totalLiquidity
			swapsCount
			holdersCount
			pool {
				id
			}
		}
	}
`;
export const KoyoChartTokenPrices = gql`
	query KoyoChartTokenPrices($asset: Bytes!) {
		prices1: tokenPrices(skip: 0, first: 1000, orderBy: timestamp, orderDirection: desc, where: { asset: $asset }) {
			...KoyoChartTokenPrice
		}
		prices2: tokenPrices(skip: 1000, first: 1000, orderBy: timestamp, orderDirection: desc, where: { asset: $asset }) {
			...KoyoChartTokenPrice
		}
		prices3: tokenPrices(skip: 2000, first: 1000, orderBy: timestamp, orderDirection: desc, where: { asset: $asset }) {
			...KoyoChartTokenPrice
		}
		prices4: tokenPrices(skip: 3000, first: 1000, orderBy: timestamp, orderDirection: desc, where: { asset: $asset }) {
			...KoyoChartTokenPrice
		}
		prices5: tokenPrices(skip: 4000, first: 1000, orderBy: timestamp, orderDirection: desc, where: { asset: $asset }) {
			...KoyoChartTokenPrice
		}
		prices6: tokenPrices(skip: 5000, first: 1000, orderBy: timestamp, orderDirection: desc, where: { asset: $asset }) {
			...KoyoChartTokenPrice
		}
	}
	${KoyoChartTokenPrice}
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
