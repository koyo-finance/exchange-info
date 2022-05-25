import { UNSUPPORTED_LIST_URLS } from './../../constants/lists';
import DEFAULT_TOKEN_LIST from '@uniswap/default-token-list';
import { Tags, TokenInfo, TokenList } from '@uniswap/token-lists';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../index';
import sortByListPriority from '../../utils/listSort';
import { ChainId } from '@koyofinance/core-sdk';

type TagDetails = Tags[keyof Tags];
export interface TagInfo extends TagDetails {
	id: string;
}

export type TokenAddressMap = Readonly<{
	[chainId in ChainId | number]: Readonly<{ [tokenAddress: string]: { token: TokenInfo; list: TokenList } }>;
}>;

/**
 * An empty result, useful as a default.
 */
const EMPTY_LIST: TokenAddressMap = {
	[ChainId.ETHEREUM]: {},
	[ChainId.MOONBASE]: {},
	[ChainId.RINKEBY]: {},
	[ChainId.MOONBASE]: {},
	[ChainId.BOBA]: {},
	[ChainId.BOBABEAM]: {},
	[ChainId.BOBA_RINKEBY]: {},
	[ChainId.BOBABASE]: {}
};

const listCache: WeakMap<TokenList, TokenAddressMap> | null = typeof WeakMap === 'undefined' ? null : new WeakMap<TokenList, TokenAddressMap>();

export function listToTokenMap(list: TokenList): TokenAddressMap {
	const result = listCache?.get(list);
	if (result) return result;

	const map = list.tokens.reduce<TokenAddressMap>(
		(tokenMap, tokenInfo) => {
			if (tokenMap[tokenInfo.chainId]?.[tokenInfo.address] !== undefined) {
				console.error(new Error(`Duplicate token! ${tokenInfo.address}`));
				return tokenMap;
			}
			return {
				...tokenMap,
				[tokenInfo.chainId]: {
					...tokenMap[tokenInfo.chainId as ChainId],
					[tokenInfo.address]: {
						token: tokenInfo,
						list
					}
				}
			};
		},
		{ ...EMPTY_LIST }
	);
	listCache?.set(list, map);
	return map;
}

const TRANSFORMED_DEFAULT_TOKEN_LIST = listToTokenMap(DEFAULT_TOKEN_LIST);

export function useAllLists(): {
	readonly [url: string]: {
		readonly current: TokenList | null;
		readonly pendingUpdate: TokenList | null;
		readonly loadingRequestId: string | null;
		readonly error: string | null;
	};
} {
	return useSelector<AppState, AppState['lists']['byUrl']>((state) => state.lists.byUrl);
}

function combineMaps(map1: TokenAddressMap, map2: TokenAddressMap): TokenAddressMap {
	return {
		[ChainId.ETHEREUM]: { ...map1[ChainId.ETHEREUM], ...map2[ChainId.ETHEREUM] },
		[ChainId.MOONBASE]: { ...map1[ChainId.MOONBASE], ...map2[ChainId.MOONBASE] },
		[ChainId.RINKEBY]: { ...map1[ChainId.RINKEBY], ...map2[ChainId.RINKEBY] },
		[ChainId.MOONBASE]: { ...map1[ChainId.MOONBASE], ...map2[ChainId.MOONBASE] },
		[ChainId.BOBA]: { ...map1[ChainId.BOBA], ...map2[ChainId.BOBA] },
		[ChainId.BOBABEAM]: { ...map1[ChainId.BOBABEAM], ...map2[ChainId.BOBABEAM] },
		[ChainId.BOBA_RINKEBY]: { ...map1[ChainId.BOBA_RINKEBY], ...map2[ChainId.BOBA_RINKEBY] },
		[ChainId.BOBABASE]: { ...map1[ChainId.BOBABASE], ...map2[ChainId.BOBABASE] }
	};
}

// merge tokens contained within lists from urls
function useCombinedTokenMapFromUrls(urls: string[] | undefined): TokenAddressMap {
	const lists = useAllLists();
	return useMemo(() => {
		if (!urls) return EMPTY_LIST;
		return (
			urls
				.slice()
				// sort by priority so top priority goes last
				.sort(sortByListPriority)
				.reduce((allTokens, currentUrl) => {
					const current = lists[currentUrl]?.current;
					if (!current) return allTokens;
					try {
						const newTokens = Object.assign(listToTokenMap(current));
						return combineMaps(allTokens, newTokens);
					} catch (error) {
						console.error('Could not show token list due to error', error);
						return allTokens;
					}
				}, EMPTY_LIST)
		);
	}, [lists, urls]);
}

// filter out unsupported lists
export function useActiveListUrls(): string[] | undefined {
	return useSelector<AppState, AppState['lists']['activeListUrls']>((state) => state.lists.activeListUrls)?.filter(
		(url) => !UNSUPPORTED_LIST_URLS.includes(url)
	);
}

export function useInactiveListUrls(): string[] {
	const lists = useAllLists();
	const allActiveListUrls = useActiveListUrls();
	return Object.keys(lists).filter((url) => !allActiveListUrls?.includes(url) && !UNSUPPORTED_LIST_URLS.includes(url));
}

// get all the tokens from active lists, combine with local default tokens
export function useCombinedActiveList(): TokenAddressMap {
	const activeListUrls = useActiveListUrls();
	const activeTokens = useCombinedTokenMapFromUrls(activeListUrls);
	return combineMaps(activeTokens, TRANSFORMED_DEFAULT_TOKEN_LIST);
}

// all tokens from inactive lists
export function useCombinedInactiveList(): TokenAddressMap {
	const allInactiveListUrls: string[] = useInactiveListUrls();
	return useCombinedTokenMapFromUrls(allInactiveListUrls);
}

export function useIsListActive(url: string): boolean {
	const activeListUrls = useActiveListUrls();
	return Boolean(activeListUrls?.includes(url));
}
