import { ChainId } from '@koyofinance/core-sdk';
import { ALTERNATIVE_COLORS } from 'constants/tokenColorList';

export const CHAIN_COLORS: { [C in ChainId]?: string } = {
	[ChainId.BOBA]: '#D7FE44',
	[ChainId.POLYGON]: '#8247E5',
	[ChainId.MOONRIVER]: '#FFBB55'
};

export function getChainColor(chain: ChainId): string {
	return CHAIN_COLORS[chain] || ALTERNATIVE_COLORS[1];
}
