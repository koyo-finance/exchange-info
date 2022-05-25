import { BaseProvider } from '@ethersproject/providers';
import { FetchSignerResult, GetAccountResult } from '@wagmi/core';
import { Chain, useAccount, useNetwork, useSigner } from 'wagmi';

export interface ActiveChain extends Chain {
	id: number;
	unsupported?: boolean;
}

export interface ActiveWeb3 {
	account?: GetAccountResult<BaseProvider>;
	signer?: FetchSignerResult;
	activeChain?: ActiveChain;
}

export function useActiveWeb3(): ActiveWeb3 {
	const { data: account } = useAccount();
	const { data: signer } = useSigner();
	const { activeChain } = useNetwork();

	return {
		account: account || undefined,
		signer,
		activeChain
	};
}
