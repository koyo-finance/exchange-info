import useSWR from 'swr';
import { CoinGeckoSimplePriceReturn } from 'types/CoinGecko';

const fetcher = <T>(url: string) => fetch(url).then((r) => r.json() as Promise<T>);

export function useLatestPrices(): { eth?: number; boba?: number } {
	const { data: prices } = useSWR('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,boba-network&vs_currencies=usd', (url: string) =>
		fetcher<CoinGeckoSimplePriceReturn>(url)
	);

	const eth = prices?.ethereum?.usd;
	const boba = prices ? prices['boba-network']?.usd : undefined;

	return {
		eth,
		boba
	};
}
