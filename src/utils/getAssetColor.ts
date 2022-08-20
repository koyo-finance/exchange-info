import { ALTERNATIVE_COLORS } from 'constants/tokenColorList';

export const ASSET_COLOURS: { [A: string]: string } = {
	USDC: '#2775CA',
	BOBA: '#CCFF00'
};

export function getAssetColor(asset: string): string {
	return ASSET_COLOURS[asset] || ALTERNATIVE_COLORS[1];
}
