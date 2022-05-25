import React from 'react';
import styled from 'styled-components';
import CurrencyLogo from '../CurrencyLogo';

const Wrapper = styled.div<{ margin: boolean; sizeraw: number; numberOfTokens: number }>`
	position: relative;
	display: flex;
	flex-direction: row;
	margin-right: ${({ sizeraw, margin, numberOfTokens }) => margin && `${((sizeraw * (numberOfTokens - 1)) / 1.5 + 10).toString()}px`};
`;

const HigherLogo = styled(CurrencyLogo)<{ numberOfTokens: number }>`
	z-index: 0;
`;
const CoveredLogo = styled(CurrencyLogo)<{ sizeraw: number; index: number }>`
	position: absolute;
	right: ${({ sizeraw, index }) => `-${((sizeraw * index) / 1.5).toString()}px`} !important;
`;

export interface PoolCurrencyLogoProps {
	margin?: boolean;
	size?: number;
	tokens: { address: string }[];
}

const PoolCurrencyLogo: React.FC<PoolCurrencyLogoProps> = ({ tokens, size = 20, margin = true }) => {
	return (
		<Wrapper numberOfTokens={tokens.length} sizeraw={size} margin={margin}>
			{tokens.map((token, index) =>
				index === 0 ? (
					<HigherLogo address={token.address} size={`${size.toString()}px`} key={token.address} numberOfTokens={tokens.length} />
				) : (
					<CoveredLogo address={token.address} index={index} size={`${size.toString()}px`} sizeraw={size} key={token.address} />
				)
			)}
		</Wrapper>
	);
};

export default PoolCurrencyLogo;
