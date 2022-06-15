import { formatDollarAmount } from '@koyofinance/core-sdk';
import SymbolCurrencyLogo from 'components/CurrencyLogo/SymbolCurrencyLogo';
import HoverInlineText from 'components/HoverInlineText';
import Percent from 'components/Percent';
import { RowFixed } from 'components/Row';
import { Label } from 'components/Text';
import { TokenData } from 'data/koyo/exchange/useTokens';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ExtraSmallOnly, HideExtraSmall } from 'theme';

const ResponsiveGrid = styled.div`
	display: grid;
	grid-gap: 1em;
	align-items: center;
	grid-template-columns: 20px 3fr repeat(4, 1fr);
	@media screen and (max-width: 900px) {
		grid-template-columns: 20px 1.5fr repeat(3, 1fr);
		& :nth-child(4) {
			display: none;
		}
	}
	@media screen and (max-width: 800px) {
		grid-template-columns: 20px 1.5fr repeat(2, 1fr);
		& :nth-child(6) {
			display: none;
		}
	}
	@media screen and (max-width: 670px) {
		grid-template-columns: repeat(2, 1fr);
		> *:first-child {
			display: none;
		}
		> *:nth-child(3) {
			display: none;
		}
	}
`;

const LinkWrapper = styled(Link)`
	text-decoration: none;
	:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

const ResponsiveLogo = styled(SymbolCurrencyLogo)`
	@media screen and (max-width: 670px) {
		width: 16px;
		height: 16px;
	}
`;

export interface DataRowProps {
	tokenData: TokenData;
	index: number;
}

const DataRow: React.FC<DataRowProps> = ({ tokenData, index }) => {
	const theme = useTheme();

	return (
		<LinkWrapper to={`tokens/${tokenData.address}`}>
			<ResponsiveGrid>
				<Label>{index + 1}</Label>
				<Label>
					<RowFixed>
						<ResponsiveLogo symbol={tokenData.symbol} />
					</RowFixed>
					<ExtraSmallOnly style={{ marginLeft: '6px' }}>
						<Label ml="8px">{tokenData.symbol}</Label>
					</ExtraSmallOnly>
					<HideExtraSmall style={{ marginLeft: '10px' }}>
						<RowFixed>
							<HoverInlineText text={tokenData.name} />
							<Label ml="8px" color={theme.text3}>
								({tokenData.symbol})
							</Label>
						</RowFixed>
					</HideExtraSmall>
				</Label>
				<Label end={1} fontWeight={400}>
					{formatDollarAmount(tokenData.priceUSD)}
				</Label>
				<Label end={1} fontWeight={400}>
					{formatDollarAmount(tokenData.volumeUSD)}
				</Label>
				<Label end={1} fontWeight={400}>
					{formatDollarAmount(tokenData.tvlUSD)}
				</Label>
			</ResponsiveGrid>
		</LinkWrapper>
	);
};

export default DataRow;
