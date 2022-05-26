import { fetch, FetchResultTypes } from '@sapphire/fetch';
import useSWRImmutable from 'swr/immutable';
import { DefiLlamaProtocol } from 'types/DefiLlama';

const DEFI_LLAMA_PROTOCOL_API_BASE_URL = 'https://api.llama.fi/protocol/';

function fetcher<T = unknown>(url: string) {
	return fetch<T>(url, 'json' as FetchResultTypes.JSON);
}

export function useDefiLlamaData(protocol: string) {
	return useSWRImmutable<DefiLlamaProtocol>(`${DEFI_LLAMA_PROTOCOL_API_BASE_URL}${protocol}`, (url: string) => fetcher<DefiLlamaProtocol>(url));
}
