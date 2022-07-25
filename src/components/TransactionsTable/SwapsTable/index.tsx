import { KoyoSwapFragment } from 'query/generated/graphql-codegen-generated';
import { DarkGreyCard } from 'components/Card';
import { AutoColumn } from 'components/Column';
import Loader from 'components/Loader';
import { RowFixed } from 'components/Row';
import { Arrow, Break, PageButtons } from 'components/shared';
import { ClickableText } from 'components/Text';
import useTheme from 'hooks/useTheme';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from 'theme';
import DataRow from './DataRow';
import { ChainedKoyoSwapFragment } from 'data/koyo/exchange/useTransactions';
import { getChainColor } from 'utils/getChainColor';

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

const SORT_FIELD = {
	amountUSD: 'amountUSD',
	timestamp: 'timestamp',
	sender: 'sender',
	amountToken0: 'amountToken0',
	amountToken1: 'amountToken1'
};

export interface SwapsTableProps {
	swaps: (KoyoSwapFragment | ChainedKoyoSwapFragment)[];
	maxItems?: number;
	color?: string;
}

const SwapsTable: React.FC<SwapsTableProps> = ({ swaps, maxItems = 10, color }) => {
	// theming
	const theme = useTheme();

	// for sorting
	const [sortField, setSortField] = useState(SORT_FIELD.timestamp);
	const [sortDirection, setSortDirection] = useState<boolean>(true);

	// pagination
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);

	useEffect(() => {
		let extraPages = 1;
		if (swaps.length % maxItems === 0) {
			extraPages = 0;
		}
		setMaxPage(Math.floor(swaps.length / maxItems) + extraPages);
	}, [maxItems, swaps]);

	const sortedTransactions = useMemo(() => {
		return swaps
			? swaps
					.slice()
					.sort((a, b) => {
						if (a && b) {
							return a[sortField as keyof KoyoSwapFragment] > b[sortField as keyof KoyoSwapFragment]
								? Number(sortDirection ? -1 : 1)
								: (sortDirection ? -1 : 1) * -1;
						}
						return -1;
					})
					.slice(maxItems * (page - 1), page * maxItems)
			: [];
	}, [swaps, maxItems, page, sortField, sortDirection]);

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
			<AutoColumn gap="12px">
				<ResponsiveGrid>
					<RowFixed></RowFixed>
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

				{sortedTransactions.map((swap, i) => {
					if (swap) {
						return (
							<React.Fragment key={i}>
								<DataRow
									swap={swap}
									color={
										color || ((swap as ChainedKoyoSwapFragment).chain && getChainColor((swap as ChainedKoyoSwapFragment).chain))
									}
								/>
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

export default SwapsTable;
