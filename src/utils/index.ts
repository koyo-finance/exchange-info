import { getAddress } from '@ethersproject/address';

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
	try {
		return getAddress(value);
	} catch {
		return false;
	}
}

export const currentTimestamp = () => new Date().getTime();

export function escapeRegExp(string: string): string {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
