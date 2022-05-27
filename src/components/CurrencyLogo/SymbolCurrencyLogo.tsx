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
			[`${symbol}`]: `https://tassets.koyo.finance/logos/${symbol?.toUpperCase()}/512x512.png`
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const srcs: string[] = useMemo(() => {
		if (symbol) {
			const override = tempSources[symbol];
			return [override];
		}
		return [];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [symbol, tempSources]);

	return <StyledLogo size={size} srcs={srcs} alt={'token logo'} style={style} {...rest} />;
};

export default SymbolCurrencyLogo;
