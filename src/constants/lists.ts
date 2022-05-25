export const BOBA_LIST = 'https://tassets.koyo.finance/koyo-default.tokenlist.json';

export const UNSUPPORTED_LIST_URLS: string[] = [];

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
	BOBA_LIST,
	...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [BOBA_LIST];
