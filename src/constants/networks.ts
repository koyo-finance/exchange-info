import { ChainId } from '@koyofinance/core-sdk';
import ARBITRUM_LOGO_URL from '../assets/images/arbitrum.svg';

export enum SupportedNetwork {
	BOBA = ChainId.BOBA,
	POLYGON = ChainId.POLYGON,
	MOONRIVER = ChainId.MOONRIVER
}

export interface NetworkInfo {
	id: SupportedNetwork;
	chainId: string;
	route: string;
	name: string;
	startTimeStamp: number;
	appUri: string;
	exchangeClientUri: string;
	veClientUri?: string;
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
	veClientUri: 'https://api.thegraph.com/subgraphs/name/koyo-finance/ve-boba',
	imageURL: ARBITRUM_LOGO_URL,
	bgColor: '#0A294B',
	primaryColor: '#0490ED',
	secondaryColor: '#96BEDC',
	blurb: 'L2'
};

export const PolygonNetworkInfo: NetworkInfo = {
	id: SupportedNetwork.POLYGON,
	chainId: '137',
	route: 'matic',
	name: 'Polygon',
	startTimeStamp: 1657912832,
	appUri: 'https://koyo.finance/',
	exchangeClientUri: 'https://api.thegraph.com/subgraphs/name/koyo-finance/exchange-subgraph-matic',
	imageURL: ARBITRUM_LOGO_URL,
	bgColor: '#8247E5',
	primaryColor: '#0490ED',
	secondaryColor: '#96BEDC',
	blurb: 'Side-chain'
};

export const MoonriverNetworkInfo: NetworkInfo = {
	id: SupportedNetwork.MOONRIVER,
	chainId: '1285',
	route: 'moonriver',
	name: 'Moonriver',
	startTimeStamp: 1657728392,
	appUri: 'https://koyo.finance/',
	exchangeClientUri: 'https://api.thegraph.com/subgraphs/name/koyo-finance/exchange-subgraph-moonriver',
	imageURL: ARBITRUM_LOGO_URL,
	bgColor: '#FFBB55',
	primaryColor: '#0490ED',
	secondaryColor: '#96BEDC',
	blurb: 'Para-chain'
};

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [BobaNetworkInfo, PolygonNetworkInfo, MoonriverNetworkInfo];
