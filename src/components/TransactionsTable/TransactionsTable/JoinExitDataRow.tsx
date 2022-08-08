import { ExplorerTarget, formatAmount, formatDollarAmount, getExplorerLink } from '@koyofinance/core-sdk';
import SymbolCurrencyLogo from 'components/CurrencyLogo/SymbolCurrencyLogo';
import HoverInlineText from 'components/HoverInlineText';
import PoolCurrencyLogo from 'components/PoolCurrencyLogo';
import { Label } from 'components/Text';
import { ChainedKoyoJoinExitFragment, ChainedKoyoSwapFragment } from 'data/koyo/exchange/useTransactions';
import useTheme from 'hooks/useTheme';
import { KoyoJoinExitFragment, KoyoSwapFragment } from 'query/generated/graphql-codegen-generated';
import React from 'react';
import { useActiveNetworkVersion } from 'state/application/hooks';
import styled from 'styled-components';
import { ExternalLink } from 'theme';
import { formatTime } from 'utils/formatTime';
import { shortenAddress } from 'utils/shortenAddress';

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

export interface JoinExitDataRowProps {
	joinExit: KoyoJoinExitFragment | ChainedKoyoJoinExitFragment;
	color?: string;
}

const JoinExitDataRow: React.FC<JoinExitDataRowProps> = ({ joinExit, color }) => {
	const [activeNetwork] = useActiveNetworkVersion();
	const theme = useTheme();
	const tokens: { address: string; symbol: string; amount: number }[] = [];

	for (let i = 0; i < joinExit.amounts.length; i++) {
		const amount = parseFloat(joinExit.amounts[i]);
		if (amount > 0) {
			tokens.push({ address: joinExit.pool.tokensList[i], symbol: joinExit.pool.tokens ? joinExit.pool.tokens[i].symbol : '', amount });
		}
	}

	return (
		<ResponsiveGrid>
			<ExternalLink
				href={getExplorerLink((joinExit as ChainedKoyoJoinExitFragment)?.chain || activeNetwork.id, ExplorerTarget.TRANSACTION, joinExit.tx)}
			>
				<Label color={color ?? theme.blue1} fontWeight={400}>
					{joinExit.type === 'Join' ? `Invest ` : 'Withdraw'}
					<span style={{ marginLeft: '6px' }}>
						<PoolCurrencyLogo tokens={tokens} />
					</span>
				</Label>
			</ExternalLink>
			<Label end={1} fontWeight={400}>
				{formatDollarAmount(parseFloat(joinExit.valueUSD))}
			</Label>
			<Label end={1} fontWeight={400}>
				<HoverInlineText text={tokens[0] ? `${formatAmount(tokens[0].amount)}  ${tokens[0].symbol}` : ''} maxCharacters={16} />
			</Label>
			<Label end={1} fontWeight={400}>
				<HoverInlineText
					text={tokens.at(-1) && tokens.at(-1) !== tokens[0] ? `${formatAmount(tokens.at(-1)!.amount)}  ${tokens.at(-1)!.symbol}` : ''}
					maxCharacters={16}
				/>
			</Label>
			<Label end={1} fontWeight={400}>
				<ExternalLink
					href={getExplorerLink(
						(joinExit as ChainedKoyoJoinExitFragment)?.chain || activeNetwork.id,
						ExplorerTarget.ADDRESS,
						joinExit.account.address
					)}
					style={{ color: color ?? theme.blue1 }}
				>
					{shortenAddress(joinExit.account.address)}
				</ExternalLink>
			</Label>
			<Label end={1} fontWeight={400}>
				{formatTime(`${joinExit.timestamp}`)}
			</Label>
		</ResponsiveGrid>
	);
};

export default JoinExitDataRow;
