import { ChainDisplayName, ChainId, formatDollarAmount } from '@koyofinance/core-sdk';
import { DarkGreyCard } from 'components/Card';
import { LocalLoader } from 'components/Loader';
import StackedAreaChart from 'components/StackedAreaChart';
import SwapsTable from 'components/TransactionsTable/SwapsTable';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import { BobaNetworkInfo } from 'constants/networks';
import { useKoyoChainProtocolData } from 'data/koyo/exchange/useAggregatedProtocolData';
import { useKoyoAllTransactionsData } from 'data/koyo/exchange/useTransactions';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getAggregatedProtocolChartData, { AggregateProtocolChartData } from 'utils/getAggregatedProtocolChartData';
import { AutoColumn } from '../../components/Column';
import { ResponsiveRow } from '../../components/Row';
import { MonoSpace } from '../../components/shared';
import { TYPE } from '../../theme';
import { PageWrapper, ThemedBackgroundGlobal } from '../styled';

const ChartWrapper = styled.div`
	width: 98%;

	${({ theme }) => theme.mediaWidth.upToSmall` width: 100%; `};
`;

const Protocol: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const protocolBobaData = useKoyoChainProtocolData(BobaNetworkInfo.startTimeStamp, ChainId.BOBA);

	const { swaps, joinsExits } = useKoyoAllTransactionsData();

	const [liquidityHover, setLiquidityHover] = useState<number | undefined>();
	const [leftLabel] = useState<string | undefined>();

	let aggregatedTVL: AggregateProtocolChartData[] = [];
	let protocolTVL = 0;
	// let protocolTVLChange = 0;
	if (protocolBobaData.tvlData) {
		aggregatedTVL = getAggregatedProtocolChartData([{ chain: ChainDisplayName.BOBA, data: protocolBobaData.tvlData }], NaN);
		if (protocolBobaData.tvl) {
			protocolTVL = protocolBobaData.tvl;
		}
		// if (protocolBobaData.tvlChange) {
		// 	protocolTVLChange = protocolBobaData.tvlChange;
		// }
	}

	useEffect(() => {
		setLiquidityHover(protocolTVL);
	}, [protocolTVL]);

	useEffect(() => {
		if (liquidityHover === undefined && protocolTVL > 0) {
			setLiquidityHover(protocolTVL);
		}
	}, [liquidityHover, protocolBobaData, protocolTVL]);

	return (
		<PageWrapper>
			<ThemedBackgroundGlobal backgroundColor={'#7f7f7f'} />
			<AutoColumn gap="16px">
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.largeHeader>Kōyō Finance: Protocol Overview</TYPE.largeHeader>
				<ResponsiveRow>
					<ChartWrapper>
						<StackedAreaChart
							data={aggregatedTVL}
							tokenSet={[ChainDisplayName.BOBA]}
							height={220}
							minHeight={332}
							color="#d7fe44"
							value={liquidityHover}
							label={leftLabel}
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
				<DarkGreyCard>
					{swaps.length > 0 || joinsExits.length > 0 ? (
						<TransactionsTable swaps={swaps} joinsExits={joinsExits} />
					) : (
						<LocalLoader fill={false} />
					)}
				</DarkGreyCard>
			</AutoColumn>
		</PageWrapper>
	);
};

export default Protocol;
