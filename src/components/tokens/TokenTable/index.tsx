import { DarkGreyCard, GreyBadge } from 'components/Card';
import { AutoColumn } from 'components/Column';
import Loader, { LoadingRows } from 'components/Loader';
import { Arrow, Break, PageButtons } from 'components/shared';
import { ClickableText, Label } from 'components/Text';
import { TokenData } from 'data/koyo/exchange/useTokens';
import useTheme from 'hooks/useTheme';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TYPE } from 'theme';
import DataRow from './DataRow';

const Wrapper = styled(DarkGreyCard)`
	width: 100%;
`;

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

const SORT_FIELD = {
	name: 'name',
	volumeUSD: 'volumeUSD',
	tvlUSD: 'tvlUSD',
	priceUSD: 'priceUSD'
};

const MAX_ITEMS = 10;

export interface TokenTableProps {
	tokenDatas: TokenData[];
	maxItems?: number;
}

const TokenTable: React.FC<TokenTableProps> = ({ tokenDatas, maxItems = MAX_ITEMS }) => {
	// theming
	const theme = useTheme();

	// for sorting
	const [sortField, setSortField] = useState(SORT_FIELD.tvlUSD);
	const [sortDirection, setSortDirection] = useState<boolean>(true);

	// pagination
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
					.filter((x) => Boolean(x) && x.volumeUSDChange > 0)
					.sort((a, b) => {
						if (a && b) {
							return a[sortField as keyof TokenData] > b[sortField as keyof TokenData]
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
						<ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.name)}>
							Name {arrow(SORT_FIELD.name)}
						</ClickableText>
						<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.priceUSD)}>
							Price {arrow(SORT_FIELD.priceUSD)}
						</ClickableText>
						<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.volumeUSD)}>
							Volume 24H {arrow(SORT_FIELD.volumeUSD)}
						</ClickableText>
						<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.tvlUSD)}>
							TVL {arrow(SORT_FIELD.tvlUSD)}
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

export default TokenTable;
