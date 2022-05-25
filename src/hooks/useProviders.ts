import { JsonRpcProvider, Provider } from '@ethersproject/providers';
import { ChainId } from '@koyofinance/core-sdk';

export const bobaProvider = new JsonRpcProvider('https://lightning-replica.boba.network', ChainId.BOBA);

export function useProviders(): { [chainId in ChainId]?: Provider } {
	return {
		[ChainId.BOBA]: bobaProvider
	};
}
