import { HEALTH_API_URL } from 'query/client';
import { useGetSubgraphHealthQuery } from 'query/generated/graphql-codegen-generated';

/**
 * Fetch top addresses by volume
 */
export function useFetchedSubgraphStatus(): {
	available: boolean | null;
	syncedBlock: number | undefined;
	headBlock: number | undefined;
} {
	const { isLoading, error, data } = useGetSubgraphHealthQuery({ endpoint: HEALTH_API_URL }, { name: 'koyo-finance/boba-blocks' });
	const parsed = data?.indexingStatusForCurrentVersion;

	if (isLoading) {
		return {
			available: null,
			syncedBlock: undefined,
			headBlock: undefined
		};
	}

	if ((!isLoading && !parsed) || error) {
		return {
			available: false,
			syncedBlock: undefined,
			headBlock: undefined
		};
	}

	const syncedBlock = parsed?.chains[0]?.latestBlock?.number;
	const headBlock = parsed?.chains[0]?.chainHeadBlock?.number;

	return {
		available: true,
		syncedBlock: syncedBlock ? parseFloat(syncedBlock) : undefined,
		headBlock: headBlock ? parseFloat(headBlock) : undefined
	};
}
