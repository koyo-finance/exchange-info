import { getAddress } from '@ethersproject/address';
import { ChainId } from '@koyofinance/core-sdk';
import { NetworkInfo } from '../constants/networks';

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
	try {
		return getAddress(value);
	} catch {
		return false;
	}
}

export function getEtherscanLink(
	_chainId: ChainId,
	data: string,
	type: 'transaction' | 'token' | 'address' | 'block',
	_networkVersion: NetworkInfo
): string {
	const prefix = 'https://bobascan.com';

	switch (type) {
		case 'transaction': {
			return `${prefix}/tx/${data}`;
		}
		case 'token': {
			return `${prefix}/token/${data}`;
		}
		case 'block': {
			return `https://blockexplorer.boba.network/blocks/${data}`;
		}
		case 'address':
		default: {
			return `${prefix}/address/${data}`;
		}
	}
}

export const currentTimestamp = () => new Date().getTime();

export function escapeRegExp(string: string): string {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
