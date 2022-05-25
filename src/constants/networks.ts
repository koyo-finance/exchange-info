import ARBITRUM_LOGO_URL from '../assets/images/arbitrum.svg';

export enum SupportedNetwork {
	BOBA
}

export interface NetworkInfo {
	id: SupportedNetwork;
	chainId: string;
	route: string;
	name: string;
	startTimeStamp: number;
	clientUri: string;
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
	route: 'arbitrum',
	name: 'Arbitrum',
	startTimeStamp: 1619874000,
	appUri: 'https://arbitrum.balancer.fi/',
	clientUri: 'https://api.thegraph.com/subgraphs/name/xeonus/balancer-v2-analytics-arbitrum',
	imageURL: ARBITRUM_LOGO_URL,
	bgColor: '#0A294B',
	primaryColor: '#0490ED',
	secondaryColor: '#96BEDC',
	blurb: 'L2'
};

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [BobaNetworkInfo];
