import { makeVar } from '@apollo/client';

export interface TokenListToken {
	name: string;
	address: string;
	symbol: string;
	decimals: number;
	chain: number;
	logoURI: string;
}

export const tokenListTokens = makeVar<TokenListToken[]>([]);

export async function loadTokenListTokens() {
	try {
		const response = await fetch('https://tassets.koyo.finance/koyo-default.tokenlist.json');
		const data = await response.json();

		tokenListTokens(data.tokens);
	} catch {}
}
