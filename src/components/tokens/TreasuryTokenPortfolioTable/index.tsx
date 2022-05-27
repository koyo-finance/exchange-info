import { DarkGreyCard } from 'components/Card';
import { AutoColumn } from 'components/Column';
import Loader, { LoadingRows } from 'components/Loader';
import { Arrow, Break, PageButtons } from 'components/shared';
import { ClickableText, Label } from 'components/Text';
import useTheme from 'hooks/useTheme';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from 'theme';
import DataRow, { DataRowTokenData } from './DataRow';

const Wrapper = styled(DarkGreyCard)`
	width: 100%;
`;

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

const SORT_FIELD = {
	symbol: 'symbol',
	value: 'value',
	amount: 'amount'
};

const MAX_ITEMS = 30;

export interface TreasuryTokenPortfolioTableProps {
	tokenDatas: DataRowTokenData[] | undefined;
	maxItems?: number;
}

const TreasuryTokenPortfolioTable: React.FC<TreasuryTokenPortfolioTableProps> = ({ tokenDatas, maxItems = MAX_ITEMS }) => {
	const theme = useTheme();

	const [sortField, setSortField] = useState(SORT_FIELD.value);
	const [sortDirection, setSortDirection] = useState<boolean>(true);

	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);

	useEffect(() => {
		let extraPages = 1;
		if (tokenDatas) {
			if (tokenDatas.length % maxItems === 0) {
				extraPages = 0;
			}
			setMaxPage(Math.floor(tokenDatas.length / maxItems) + extraPages);
		}
	}, [maxItems, tokenDatas]);

	const sortedTokens = useMemo(() => {
		return tokenDatas
			? tokenDatas
					.sort((a, b) => {
						if (a && b) {
							return a[sortField as keyof DataRowTokenData] > b[sortField as keyof DataRowTokenData]
								? Number(sortDirection ? -1 : 1)
								: (sortDirection ? -1 : 1) * -1;
						}
						return -1;
					})
					.slice(maxItems * (page - 1), page * maxItems)
			: [];
	}, [tokenDatas, maxItems, page, sortDirection, sortField]);

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

	if (!tokenDatas) {
		return <Loader />;
	}

	return (
		<Wrapper>
			{sortedTokens.length > 0 ? (
				<AutoColumn gap="8px">
					<ResponsiveGrid>
						<Label color={theme.text2}>#</Label>
						<ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.symbol)}>
							Symbol {arrow(SORT_FIELD.symbol)}
						</ClickableText>
						<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.value)}>
							Total value {arrow(SORT_FIELD.value)}
						</ClickableText>
						<Label color={theme.text2} end={1}>
							# of Tokens
						</Label>
						<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.amount)}>
							Collected {arrow(SORT_FIELD.amount)}
						</ClickableText>
					</ResponsiveGrid>
					<Break />
					{sortedTokens.map((data, i) => {
						if (data) {
							return (
								<React.Fragment key={i}>
									<DataRow index={(page - 1) * MAX_ITEMS + i} tokenData={data} />
									<Break />
								</React.Fragment>
							);
						}
						return null;
					})}
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
			) : (
				<LoadingRows>
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</LoadingRows>
			)}
		</Wrapper>
	);
};

export default TreasuryTokenPortfolioTable;
