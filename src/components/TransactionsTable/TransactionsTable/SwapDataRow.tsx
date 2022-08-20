import { ExplorerTarget, formatAmount, formatDollarAmount, formatTime, getExplorerLink, shortenHex } from '@koyofinance/core-sdk';
import SymbolCurrencyLogo from 'components/CurrencyLogo/SymbolCurrencyLogo';
import HoverInlineText from 'components/HoverInlineText';
import { Label } from 'components/Text';
import { ChainedKoyoSwapFragment } from 'data/koyo/exchange/useTransactions';
import useTheme from 'hooks/useTheme';
import { KoyoSwapFragment } from 'query/generated/graphql-codegen-generated';
import React from 'react';
import { useActiveNetworkVersion } from 'state/application/hooks';
import styled from 'styled-components';
import { ExternalLink } from 'theme';

const ResponsiveGrid = styled.div`
	display: grid;
	grid-gap: 1em;
	align-items: center;
	grid-template-columns: 1.5fr repeat(5, 1fr);
	@media screen and (max-width: 940px) {
		grid-template-columns: 1.5fr repeat(4, 1fr);
		& > *:nth-child(5) {
			display: none;
		}
	}
	@media screen and (max-width: 800px) {
		grid-template-columns: 1.5fr repeat(2, 1fr);
		& > *:nth-child(5) {
			display: none;
		}
		& > *:nth-child(3) {
			display: none;
		}
		& > *:nth-child(4) {
			display: none;
		}
	}
	@media screen and (max-width: 500px) {
		grid-template-columns: 1.5fr repeat(1, 1fr);
		& > *:nth-child(5) {
			display: none;
		}
		& > *:nth-child(3) {
			display: none;
		}
		& > *:nth-child(4) {
			display: none;
		}
		& > *:nth-child(2) {
			display: none;
		}
	}
`;

export interface SwapDataRowProps {
	swap: KoyoSwapFragment | ChainedKoyoSwapFragment;
	color?: string;
}

const SwapDataRow: React.FC<SwapDataRowProps> = ({ swap, color }) => {
	const abs0 = Math.abs(parseFloat(swap.tokenAmountIn));
	const abs1 = Math.abs(parseFloat(swap.tokenAmountOut));
	const [activeNetwork] = useActiveNetworkVersion();
	const theme = useTheme();
	const value = parseFloat(swap.valueUSD);

	return (
		<ResponsiveGrid>
			<ExternalLink href={getExplorerLink((swap as ChainedKoyoSwapFragment)?.chain || activeNetwork.id, ExplorerTarget.TRANSACTION, swap.tx)}>
				<Label color={color ?? theme.blue1} fontWeight={400}>
					<div>
						Swap{' '}
						<span>
							{swap.tokenInSym} <SymbolCurrencyLogo symbol={swap.tokenInSym} size={'16px'} />
						</span>{' '}
						for{' '}
						<span>
							{swap.tokenOutSym} <SymbolCurrencyLogo symbol={swap.tokenOutSym} size={'16px'} />
						</span>
					</div>
				</Label>
			</ExternalLink>
			<Label end={1} fontWeight={400}>
				{formatDollarAmount(value)}
			</Label>
			<Label end={1} fontWeight={400}>
				<HoverInlineText text={`${formatAmount(abs0)}  ${swap.tokenInSym}`} maxCharacters={16} />
			</Label>
			<Label end={1} fontWeight={400}>
				<HoverInlineText text={`${formatAmount(abs1)}  ${swap.tokenOutSym}`} maxCharacters={16} />
			</Label>
			<Label end={1} fontWeight={400}>
				<ExternalLink
					href={getExplorerLink((swap as ChainedKoyoSwapFragment)?.chain || activeNetwork.id, ExplorerTarget.ADDRESS, swap.account.address)}
					style={{ color: color ?? theme.blue1 }}
				>
					{shortenHex(swap.account.address)}
				</ExternalLink>
			</Label>
			<Label end={1} fontWeight={400}>
				{formatTime(`${swap.timestamp}`)}
			</Label>
		</ResponsiveGrid>
	);
};

export default SwapDataRow;
