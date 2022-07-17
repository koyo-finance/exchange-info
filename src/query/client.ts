import { ApolloClient, InMemoryCache } from '@apollo/client';

export const HEALTH_API_URL = 'https://api.thegraph.com/index-node/graphql';

export const bobaExchangeClient = new ApolloClient({
	uri: 'https://api.thegraph.com/subgraphs/name/koyo-finance/exchange-subgraph-boba',
	cache: new InMemoryCache({
		typePolicies: {
			Gauge: {
				// Singleton types that have no identifying field can use an empty
				// array for their keyFields.
				keyFields: false
			}
		}
	}),
	queryDeduplication: true,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache'
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all'
		}
	}
});

export const bobaBlockClient = new ApolloClient({
	uri: 'https://api.thegraph.com/subgraphs/name/koyo-finance/boba-blocks',
	cache: new InMemoryCache(),
	queryDeduplication: true,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache'
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all'
		}
	}
});
