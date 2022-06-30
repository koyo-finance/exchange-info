import { formatDollarAmount, unixToDate } from '@koyofinance/core-sdk';
import { DarkGreyCard } from 'components/Card';
import { LocalLoader } from 'components/Loader';
import SwapsTable from 'components/TransactionsTable/SwapsTable';
import { useKoyoAllTransactionsData } from 'data/koyo/exchange/useTransactions';
import { useDefiLlamaData } from 'hooks/useDefiLlamaData';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { AutoColumn } from '../../components/Column';
import LineChart from '../../components/LineChart/alt';
import { ResponsiveRow } from '../../components/Row';
import { MonoSpace } from '../../components/shared';
import { TYPE } from '../../theme';
import { PageWrapper, ThemedBackgroundGlobal } from '../styled';

const ChartWrapper = styled.div`
	width: 98%;

	${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`;

const Protocol: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { data: tvlData } = useDefiLlamaData('koyo-finance');
	const { swaps } = useKoyoAllTransactionsData();

	const [liquidityHover, setLiquidityHover] = useState<number | undefined>();
	const [leftLabel, setLeftLabel] = useState<string | undefined>();

	const formattedTvlData = useMemo(() => {
		if (tvlData) {
			return tvlData.tvl.map((tvl) => {
				return {
					time: unixToDate(tvl.date),
					value: tvl.totalLiquidityUSD
				};
			});
		}
		return [];
	}, [tvlData]);

	useEffect(() => {
		if (liquidityHover === undefined && formattedTvlData.length !== 0) {
			setLiquidityHover(formattedTvlData.at(-1)!.value);
		}
	}, [liquidityHover, formattedTvlData]);

	return (
		<PageWrapper>
			<ThemedBackgroundGlobal backgroundColor={'#7f7f7f'} />
			<AutoColumn gap="16px">
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.largeHeader>Kōyō Finance: Protocol Overview</TYPE.largeHeader>
				<ResponsiveRow>
					<ChartWrapper>
						<LineChart
							data={formattedTvlData}
							height={220}
							minHeight={332}
							color="#d7fe44"
							value={liquidityHover}
							label={leftLabel}
							setValue={setLiquidityHover}
							setLabel={setLeftLabel}
							topLeft={
								<AutoColumn gap="4px">
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.mediumHeader fontSize="16px">TVL</TYPE.mediumHeader>
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.largeHeader fontSize="32px">
										<MonoSpace>{formatDollarAmount(liquidityHover, 2, true)} </MonoSpace>
									</TYPE.largeHeader>
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.main fontSize="12px" height="14px">
										{leftLabel ? <MonoSpace>{leftLabel} (UTC)</MonoSpace> : null}
									</TYPE.main>
								</AutoColumn>
							}
						/>
					</ChartWrapper>
				</ResponsiveRow>

				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.main fontSize="24px">Transactions</TYPE.main>
				<DarkGreyCard>{swaps.length > 0 ? <SwapsTable swaps={swaps} /> : <LocalLoader fill={false} />}</DarkGreyCard>
			</AutoColumn>
		</PageWrapper>
	);
};

export default Protocol;
