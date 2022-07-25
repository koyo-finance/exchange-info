import React, { useMemo } from 'react';
import { StyledLogo } from '.';

export interface SymbolCurrencyLogoProps {
	symbol?: string;
	size?: string;
	style?: React.CSSProperties;
}

const SymbolCurrencyLogo: React.FC<SymbolCurrencyLogoProps> = ({ symbol, size = '24px', style, ...rest }) => {
	const tempSources: { [symbol: string]: string } = useMemo(() => {
		return {
			[`${symbol?.toUpperCase()}`]: `https://tassets.koyo.finance/logos/${symbol?.toUpperCase()}/512x512.png`,
			[`${symbol?.toLowerCase()}`]: `https://tassets.koyo.finance/logos/${symbol?.toLowerCase()}/512x512.png`,
			[`${symbol}`]: `https://tassets.koyo.finance/logos/${symbol}/512x512.png`
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const srcs: string[] = useMemo(() => {
		if (symbol) {
			const wETHOverride =
				symbol.toLowerCase() === 'weth' || symbol.toLowerCase() === 'eth'
					? ['https://tassets.koyo.finance/logos/wETH/512x512.png', 'https://tassets.koyo.finance/logos/weth/512x512.png']
					: [];

			return [tempSources[symbol], tempSources[symbol.toUpperCase()], tempSources[symbol.toLowerCase()]].concat(wETHOverride);
		}
		return [];
	}, [symbol, tempSources]);

	return <StyledLogo size={size} srcs={srcs} alt={'token logo'} style={style} {...rest} />;
};

export default SymbolCurrencyLogo;
