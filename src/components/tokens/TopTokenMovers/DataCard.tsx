import { formatDollarAmount } from '@koyofinance/core-sdk';
import { GreyCard } from 'components/Card';
import { AutoColumn } from 'components/Column';
import SymbolCurrencyLogo from 'components/CurrencyLogo/SymbolCurrencyLogo';
import HoverInlineText from 'components/HoverInlineText';
import Percent from 'components/Percent';
import { RowFixed, RowFlat } from 'components/Row';
import { TokenData } from 'data/koyo/exchange/useTokens';
import React from 'react';
import styled from 'styled-components';
import { StyledInternalLink, TYPE } from 'theme';

const CardWrapper = styled(StyledInternalLink)`
	min-width: 190px;
	margin-right: 16px;
	:hover {
		cursor: pointer;
		opacity: 0.6;
	}
`;

export interface DataCardProps {
	tokenData: TokenData;
}

const DataCard: React.FC<DataCardProps> = ({ tokenData }) => {
	return (
		<CardWrapper to={`tokens/${tokenData.address}`}>
			<GreyCard padding="16px">
				<RowFixed>
					<SymbolCurrencyLogo symbol={tokenData.symbol} size="32px" />
					<AutoColumn gap="3px" style={{ marginLeft: '12px' }}>
						{/* eslint-disable-next-line react/jsx-pascal-case */}
						<TYPE.label fontSize="14px">
							<HoverInlineText text={tokenData.symbol} />
						</TYPE.label>
						<RowFlat>
							{/* eslint-disable-next-line react/jsx-pascal-case */}
							<TYPE.label fontSize="14px" mr="6px" lineHeight="16px">
								{formatDollarAmount(tokenData.priceUSD)}
							</TYPE.label>
							<Percent fontSize="14px" value={tokenData.priceUSDChange} />
						</RowFlat>
					</AutoColumn>
				</RowFixed>
			</GreyCard>
		</CardWrapper>
	);
};

export default DataCard;
