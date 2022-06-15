import React from 'react';
import styled from 'styled-components';
import SymbolCurrencyLogo from '../CurrencyLogo/SymbolCurrencyLogo';

const Wrapper = styled.div<{ margin: boolean; sizeraw: number; numberoftokens: number }>`
	position: relative;
	display: flex;
	flex-direction: row;
	margin-right: ${({ sizeraw, margin, numberoftokens }) => margin && `${((sizeraw * (numberoftokens - 1)) / 1.5 + 10).toString()}px`};
`;

interface PoolCurrencyLogoProps {
	margin?: boolean;
	size?: number;
	tokens: { symbol: string }[];
}

const HigherLogo = styled(SymbolCurrencyLogo)<{ numberoftokens: number }>`
	z-index: 0;
`;
const CoveredLogo = styled(SymbolCurrencyLogo)<{ sizeraw: number; index: number }>`
	position: absolute;
	right: ${({ sizeraw, index }) => `-${((sizeraw * index) / 1.5).toString()}px`} !important;
`;

export default function PoolCurrencyLogo({ tokens, size = 20, margin = true }: PoolCurrencyLogoProps) {
	return (
		<Wrapper numberoftokens={tokens.length} sizeraw={size} margin={margin}>
			{tokens.map((token, index) =>
				index === 0 ? (
					<HigherLogo symbol={token.symbol} size={`${size.toString()}px`} key={token.symbol} numberoftokens={tokens.length} />
				) : (
					<CoveredLogo symbol={token.symbol} index={index} size={`${size.toString()}px`} sizeraw={size} key={token.symbol} />
				)
			)}
		</Wrapper>
	);
}
