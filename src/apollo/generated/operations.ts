import gql from 'graphql-tag';

export const GetLatestBlock = gql`
	query GetLatestBlock {
		blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
			id
			number
			timestamp
		}
	}
`;
