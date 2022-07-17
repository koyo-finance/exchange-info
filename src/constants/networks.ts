import { ChainId } from '@koyofinance/core-sdk';
import ARBITRUM_LOGO_URL from '../assets/images/arbitrum.svg';

export enum SupportedNetwork {
	BOBA = ChainId.BOBA
}

export interface NetworkInfo {
	id: SupportedNetwork;
	chainId: string;
	route: string;
	name: string;
	startTimeStamp: number;
	exchangeClientUri: string;
	appUri: string;
	imageURL: string;
	bgColor: string;
	primaryColor: string;
	secondaryColor: string;
	blurb?: string;
}

export const BobaNetworkInfo: NetworkInfo = {
	id: SupportedNetwork.BOBA,
	chainId: '288',
	route: 'boba',
	name: 'Boba',
	startTimeStamp: 1619874000,
	appUri: 'https://koyo.finance/',
	exchangeClientUri: 'https://api.thegraph.com/subgraphs/name/koyo-finance/exchange-subgraph-boba',
	imageURL: ARBITRUM_LOGO_URL,
	bgColor: '#0A294B',
	primaryColor: '#0490ED',
	secondaryColor: '#96BEDC',
	blurb: 'L2'
};

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [BobaNetworkInfo];
