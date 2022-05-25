import { ApolloClient, InMemoryCache } from '@apollo/client';

export const healthClient = new ApolloClient({
	uri: 'https://api.thegraph.com/index-node/graphql',
	cache: new InMemoryCache()
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
