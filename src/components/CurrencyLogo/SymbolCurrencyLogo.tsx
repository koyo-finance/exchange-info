import React, { useMemo } from 'react';
import { StyledLogo } from '.';

export interface SymbolCurrencyLogoProps {
	symbol?: string;
	size?: string;
	style?: React.CSSProperties;
}

const SymbolCurrencyLogo: React.FC<SymbolCurrencyLogoProps> = ({ symbol, size = '24px', style, ...rest }) => {
	// Secondary assets are loaded through Balancer
	const tempSources: { [symbol: string]: string } = useMemo(() => {
		return {
			[`${symbol?.toUpperCase()}`]: `https://tassets.koyo.finance/logos/${symbol?.toUpperCase()}/512x512.png`,
			[`${symbol}`]: `https://tassets.koyo.finance/logos/${symbol}/512x512.png`
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const srcs: string[] = useMemo(() => {
		if (symbol) {
			const override = tempSources[symbol];
			const wETHOverride = symbol.toLowerCase() === 'weth' ? ['https://tassets.koyo.finance/logos/wETH/512x512.png'] : [];

			return [override].concat(wETHOverride);
		}
		return [];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [symbol, tempSources]);

	return <StyledLogo size={size} srcs={srcs} alt={'token logo'} style={style} {...rest} />;
};

export default SymbolCurrencyLogo;
