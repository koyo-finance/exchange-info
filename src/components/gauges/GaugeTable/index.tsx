import { DarkGreyCard, GreyBadge } from 'components/Card';
import { AutoColumn } from 'components/Column';
import Loader, { LoadingRows } from 'components/Loader';
import { Arrow, Break, PageButtons } from 'components/shared';
import { ClickableText, Label } from 'components/Text';
import { GaugeInfo } from 'data/koyo/kyo/useGauges';
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
	symbol: 'symbol',
	killed: 'killed',
	weight: 'lastWeight'
};

const MAX_ITEMS = 10;

export default function GaugeTable({ gauges, maxItems = MAX_ITEMS }: { gauges: GaugeInfo[]; maxItems?: number }) {
	// theming
	const theme = useTheme();

	// for sorting
	const [sortField, setSortField] = useState(SORT_FIELD.weight);
	const [sortDirection, setSortDirection] = useState<boolean>(true);

	// pagination
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	useEffect(() => {
		let extraPages = 1;
		if (gauges.length % maxItems === 0) {
			extraPages = 0;
		}
		setMaxPage(Math.floor(gauges.length / maxItems) + extraPages);
	}, [maxItems, gauges]);

	const sortedGauges = useMemo(() => {
		return gauges
			? gauges
					.filter((x) => Boolean(x))
					.sort((a, b) => {
						if (a && b) {
							return a[sortField as keyof GaugeInfo] > b[sortField as keyof GaugeInfo]
								? Number(sortDirection ? -1 : 1)
								: (sortDirection ? -1 : 1) * -1;
						}
						return -1;
					})
					.slice(maxItems * (page - 1), page * maxItems)
			: [];
	}, [maxItems, page, gauges, sortDirection, sortField]);

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

	if (!gauges) {
		return <Loader />;
	}

	return (
		<Wrapper>
			{sortedGauges.length > 0 ? (
				<AutoColumn gap="12px">
					<ResponsiveGrid>
						<Label color={theme.text2}>#</Label>
						<ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.symbol)}>
							Gauge {arrow(SORT_FIELD.symbol)}
						</ClickableText>
						<ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.weight)}>
							Weight {arrow(SORT_FIELD.weight)}
						</ClickableText>
						<ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.killed)}>
							Active {arrow(SORT_FIELD.killed)}
						</ClickableText>
					</ResponsiveGrid>
					<Break />
					{sortedGauges.map((gaugeData, i) => {
						if (gaugeData) {
							return (
								<React.Fragment key={i}>
									<DataRow index={(page - 1) * MAX_ITEMS + i} gaugeInfo={gaugeData} />
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
}
