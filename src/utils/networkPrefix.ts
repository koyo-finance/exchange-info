import { BobaNetworkInfo, NetworkInfo } from '../constants/networks';

export function networkPrefix(activeNewtork: NetworkInfo) {
	const isBoba = activeNewtork === BobaNetworkInfo;
	if (isBoba) {
		return '/';
	}
	const prefix = `/${activeNewtork.route.toLocaleLowerCase()}/`;
	return prefix;
}
