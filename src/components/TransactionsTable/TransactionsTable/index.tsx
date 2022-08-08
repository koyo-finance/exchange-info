import { DarkGreyCard } from 'components/Card';
import { AutoColumn } from 'components/Column';
import Loader from 'components/Loader';
import { RowFixed } from 'components/Row';
import { Arrow, Break, PageButtons } from 'components/shared';
import { ClickableText } from 'components/Text';
import { ChainedKoyoJoinExitFragment, ChainedKoyoSwapFragment, TransactionType } from 'data/koyo/exchange/useTransactions';
import useTheme from 'hooks/useTheme';
import { KoyoJoinExitFragment, KoyoSwapFragment } from 'query/generated/graphql-codegen-generated';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Case, Switch } from 'react-if';
import styled from 'styled-components';
import { TYPE } from 'theme';
import { getChainColor } from 'utils/getChainColor';
import JoinExitDataRow from './JoinExitDataRow';
import SwapDataRow from './SwapDataRow';

const Wrapper = styled(DarkGreyCard)`
	width: 100%;
`;

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

const SortText = styled.button<{ active: boolean }>`
	cursor: pointer;
	font-weight: ${({ active }) => (active ? 500 : 400)};
	margin-right: 0.75rem !important;
	border: none;
	background-color: transparent;
	font-size: 1rem;
	padding: 0px;
	color: ${({ active, theme }) => (active ? theme.text1 : theme.text3)};
	outline: none;
	@media screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

const SORT_FIELD = {
	amountUSD: 'amountUSD',
	timestamp: 'timestamp',
	sender: 'sender',
	amountToken0: 'amountToken0',
	amountToken1: 'amountToken1'
};

export interface TransactionsTableProps {
	swaps: (KoyoSwapFragment | ChainedKoyoSwapFragment)[];
	joinsExits: (KoyoJoinExitFragment | ChainedKoyoJoinExitFragment)[];
	maxItems?: number;
	color?: string;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ swaps, joinsExits, maxItems = 10, color }) => {
	// theming
	const theme = useTheme();

	// for sorting
	const [sortField, setSortField] = useState(SORT_FIELD.timestamp);
	const [sortDirection, setSortDirection] = useState<boolean>(true);

	// pagination
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);

	const [txFilter, setTxFilter] = useState<TransactionType | undefined>(undefined);

	useEffect(() => {
		let extraPages = 1;
		if (swaps.length % maxItems === 0) {
			extraPages = 0;
		}
		setMaxPage(Math.floor(swaps.length / maxItems) + extraPages);
	}, [maxItems, swaps]);

	const sortedTransactions = useMemo(() => {
		return swaps && joinsExits
			? [...swaps, ...joinsExits]
					.slice()
					.sort((a, b) => {
						if (a && b) {
							return a[sortField as keyof (KoyoSwapFragment | KoyoJoinExitFragment)] >
								b[sortField as keyof (KoyoSwapFragment | KoyoJoinExitFragment)]
								? Number(sortDirection ? -1 : 1)
								: (sortDirection ? -1 : 1) * -1;
						}
						return -1;
					})
					.filter((x) => {
						return (
							txFilter === undefined ||
							(!(x as KoyoJoinExitFragment).type && txFilter === TransactionType.Swap) ||
							(x as KoyoJoinExitFragment).type === txFilter
						);
					})
					.slice(maxItems * (page - 1), page * maxItems)
			: [];
	}, [swaps, joinsExits, maxItems, page, sortField, sortDirection, txFilter]);

	const handleSort = useCallback(
		(newField: string) => {
			setSortField(newField);
			setSortDirection(sortField === newField ? !sortDirection : true);
		},
		[sortDirection, sortField]
	);

	const arrow = useCallback(
		(field: string) => {
			return sortField === field ? (sortDirection ? '↓' : '↑') : '';
		},
		[sortDirection, sortField]
	);

	if (!swaps) {
		return <Loader />;
	}

	return (
		<Wrapper>
			<AutoColumn gap="16px">
				<ResponsiveGrid>
					<RowFixed>
						<SortText
							onClick={() => {
								setTxFilter(undefined);
							}}
							active={txFilter === undefined}
						>
							All
						</SortText>
						<SortText
							onClick={() => {
								setTxFilter(TransactionType.Swap);
							}}
							active={txFilter === TransactionType.Swap}
						>
							Swaps
						</SortText>
						<SortText
							onClick={() => {
								setTxFilter(TransactionType.Join);
							}}
							active={txFilter === TransactionType.Join}
						>
							Joins
						</SortText>
						<SortText
							onClick={() => {
								setTxFilter(TransactionType.Exit);
							}}
							active={txFilter === TransactionType.Exit}
						>
							Exits
						</SortText>
					</RowFixed>
					<ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.amountUSD)} end={1}>
						Total Value {arrow(SORT_FIELD.amountUSD)}
					</ClickableText>
					<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.amountToken0)}>
						Token Amount {arrow(SORT_FIELD.amountToken0)}
					</ClickableText>
					<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.amountToken1)}>
						Token Amount {arrow(SORT_FIELD.amountToken1)}
					</ClickableText>
					<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.sender)}>
						Account {arrow(SORT_FIELD.sender)}
					</ClickableText>
					<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.timestamp)}>
						Time {arrow(SORT_FIELD.timestamp)}
					</ClickableText>
				</ResponsiveGrid>
				<Break />

				{sortedTransactions.map((transaction, i) => {
					if (transaction) {
						return (
							<React.Fragment key={i}>
								<Switch>
									<Case condition={!(transaction as KoyoJoinExitFragment).type}>
										<SwapDataRow
											swap={transaction as KoyoSwapFragment}
											color={
												color ||
												((transaction as ChainedKoyoSwapFragment).chain &&
													getChainColor((transaction as ChainedKoyoSwapFragment).chain))
											}
										/>
									</Case>
									<Case condition={['Join', 'Exit'].includes((transaction as KoyoJoinExitFragment).type)}>
										<JoinExitDataRow
											joinExit={transaction as KoyoJoinExitFragment}
											color={
												color ||
												((transaction as ChainedKoyoSwapFragment).chain &&
													getChainColor((transaction as ChainedKoyoSwapFragment).chain))
											}
										/>
									</Case>
								</Switch>
								<Break />
							</React.Fragment>
						);
					}
					return null;
				})}
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				{sortedTransactions.length === 0 ? <TYPE.main>No Transactions</TYPE.main> : undefined}
				<PageButtons>
					<div
						onClick={() => {
							setPage(page === 1 ? page : page - 1);
						}}
					>
						<Arrow faded={page === 1 ? true : false}>←</Arrow>
					</div>
					{/* eslint-disable-next-line react/jsx-pascal-case */}
					<TYPE.body>{`Page ${page} of ${maxPage}`}</TYPE.body>
					<div
						onClick={() => {
							setPage(page === maxPage ? page : page + 1);
						}}
					>
						<Arrow faded={page === maxPage ? true : false}>→</Arrow>
					</div>
				</PageButtons>
			</AutoColumn>
		</Wrapper>
	);
};

export default TransactionsTable;
