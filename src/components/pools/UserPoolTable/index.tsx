import { DarkGreyCard, GreyBadge } from 'components/Card';
import { AutoColumn } from 'components/Column';
import Loader, { LoadingRows } from 'components/Loader';
import { Arrow, Break, PageButtons } from 'components/shared';
import { ClickableText, Label } from 'components/Text';
import { PoolDataUser } from 'data/koyo/exchange/useUserPools';
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

	grid-template-columns: 20px 3.5fr repeat(3, 1fr);

	@media screen and (max-width: 900px) {
		grid-template-columns: 20px 1.5fr repeat(2, 1fr);
		& ${Label}:nth-child(3) {
			display: none;
		}
		& ${GreyBadge}:nth-child(3) {
			display: none;
		}
	}

	@media screen and (max-width: 500px) {
		grid-template-columns: 20px 1.5fr repeat(1, 1fr);
		& ${Label}:nth-child(4) {
			display: none;
		}
		& ${GreyBadge}:nth-child(4) {
			display: none;
		}
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 2.5fr repeat(1, 1fr);
		> *:nth-child(1) {
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
	feeTier: 'feeTier',
	volumeUSD: 'volumeUSD',
	volumeUSDWeek: 'volumeUSDWeek',
	tvlUSD: 'tvlUSD',
	userRelativeTVL: 'userRelativeTVL',
	userTVL: 'userTVL',
	dailyFees: 'dailyFees'
};

const MAX_ITEMS = 10;

export interface UserPoolTableProps {
	poolDatas: PoolDataUser[];
	maxItems?: number;
}

const UserPoolTable: React.FC<UserPoolTableProps> = ({ poolDatas, maxItems = MAX_ITEMS }) => {
	// theming
	const theme = useTheme();

	// for sorting
	const [sortField, setSortField] = useState(SORT_FIELD.userTVL);
	const [sortDirection, setSortDirection] = useState<boolean>(true);

	// pagination
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	useEffect(() => {
		let extraPages = 1;
		if (poolDatas.length % maxItems === 0) {
			extraPages = 0;
		}
		setMaxPage(Math.floor(poolDatas.length / maxItems) + extraPages);
	}, [maxItems, poolDatas]);

	const sortedPools = useMemo(() => {
		return poolDatas
			? poolDatas
					.sort((a, b) => {
						if (a && b) {
							return a[sortField as keyof PoolDataUser] > b[sortField as keyof PoolDataUser]
								? Number(sortDirection ? -1 : 1)
								: (sortDirection ? -1 : 1) * -1;
						}

						return -1;
					})
					.slice(maxItems * (page - 1), page * maxItems)
			: [];
	}, [maxItems, page, poolDatas, sortDirection, sortField]);

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

	if (!poolDatas) {
		return <Loader />;
	}

	return (
		<Wrapper>
			{sortedPools.length > 0 ? (
				<AutoColumn gap="12px">
					<ResponsiveGrid>
						<Label color={theme.text2}>#</Label>
						<ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.feeTier)}>
							Pool {arrow(SORT_FIELD.feeTier)}
						</ClickableText>
						<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.volumeUSD)}>
							Volume 24H {arrow(SORT_FIELD.volumeUSD)}
						</ClickableText>
						<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.dailyFees)}>
							Earned Fees 24H {arrow(SORT_FIELD.dailyFees)}
						</ClickableText>
						<ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.userTVL)}>
							TVL{arrow(SORT_FIELD.userTVL)}
						</ClickableText>
					</ResponsiveGrid>
					<Break />
					{sortedPools.map((poolData, i) => {
						if (poolData) {
							return (
								<React.Fragment key={i}>
									<DataRow index={(page - 1) * MAX_ITEMS + i} poolData={poolData} />
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

export default UserPoolTable;
