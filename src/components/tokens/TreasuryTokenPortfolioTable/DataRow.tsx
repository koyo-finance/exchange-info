import { formatAmount, formatDollarAmount } from '@koyofinance/core-sdk';
import SymbolCurrencyLogo from 'components/CurrencyLogo/SymbolCurrencyLogo';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useTheme from '../../../hooks/useTheme';
import { ExtraSmallOnly, HideExtraSmall } from '../../../theme';
import HoverInlineText from '../../HoverInlineText';
import { RowFixed } from '../../Row';
import { Label } from '../../Text';

const ResponsiveGrid = styled.div`
	display: grid;
	grid-gap: 1em;
	align-items: center;
	grid-template-columns: 20px 3fr repeat(3, 1fr);
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

export interface DataRowTokenData {
	symbol: string;
	value: number;
	amount: number;
}

export interface DataRowProps {
	tokenData: DataRowTokenData;
	index: number;
}

const DataRow: React.FC<DataRowProps> = ({ tokenData, index }) => {
	const theme = useTheme();

	return (
		<LinkWrapper to={`/`}>
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
							<HoverInlineText text={tokenData.symbol} />
							<Label ml="8px" color={theme.text3}>
								({tokenData.symbol})
							</Label>
						</RowFixed>
					</HideExtraSmall>
				</Label>
				<Label end={1} fontWeight={400}>
					{formatDollarAmount(tokenData.value / tokenData.amount)}
				</Label>
				<Label end={1} fontWeight={400}>
					{formatAmount(tokenData.amount, 3)}
				</Label>
				<Label end={1} fontWeight={400}>
					{formatDollarAmount(tokenData.value)}
				</Label>
			</ResponsiveGrid>
		</LinkWrapper>
	);
};

export default DataRow;
