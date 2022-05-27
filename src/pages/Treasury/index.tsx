import { formatDollarAmount, unixToDate } from '@koyofinance/core-sdk';
import { DarkGreyCard } from 'components/Card';
import { LocalLoader } from 'components/Loader';
import Percent from 'components/Percent';
import { useDefiLlamaData } from 'hooks/useDefiLlamaData';
import { useHistoricalProtocolData } from 'hooks/useHistoricalProtocolData';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { AutoColumn } from '../../components/Column';
import LineChart from '../../components/LineChart/alt';
import { MonoSpace } from '../../components/shared';
import { TYPE } from '../../theme';
import { PageWrapper, ThemedBackgroundGlobal } from '../styled';

const ChartWrapper = styled.div`
	width: 49%;
	${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`;

const ContentLayout = styled.div`
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-gap: 1em;
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`;

export default function Treasury() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { Treasury: treasuryData } = useHistoricalProtocolData('koyo-finance');
	const { data: protocolData } = useDefiLlamaData('koyo-finance');

	const [treasuryTotalHover, setTreasuryTotal] = useState<number | undefined>();
	const [leftLabel, setLeftLabel] = useState<string | undefined>();

	const [monthlyLow, setMonthlyLow] = useState(0);
	const [monthlyHigh, setMonthlyHigh] = useState(0);

	const formattedTreasuryData = useMemo(() => {
		if (treasuryData) {
			return treasuryData.totalValue.map((tvl) => {
				return {
					time: unixToDate(tvl.time.getTime() / 1000),
					value: tvl.value
				};
			});
		}
		return [];
	}, [treasuryData]);

	useEffect(() => {
		if (treasuryTotalHover === undefined && formattedTreasuryData.length !== 0) {
			setTreasuryTotal(formattedTreasuryData.at(-1)!.value);
		}
	}, [treasuryTotalHover, formattedTreasuryData]);

	useEffect(() => {
		formattedTreasuryData.forEach((entry) => {
			if (monthlyHigh < entry.value) {
				setMonthlyHigh(entry.value);
			}
			if (monthlyLow === 0 || monthlyLow > entry.value) {
				setMonthlyLow(entry.value);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formattedTreasuryData]);

	return (
		<PageWrapper>
			<ThemedBackgroundGlobal backgroundColor={'#7f7f7f'} />
			<AutoColumn gap="16px">
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.largeHeader>Kōyō Finance: Treasury Overview</TYPE.largeHeader>
				<ContentLayout>
					{formattedTreasuryData.length > 0 && protocolData?.currentChainTvls ? (
						<DarkGreyCard>
							<AutoColumn gap="lg">
								<AutoColumn gap="lg">
									<AutoColumn gap="4px">
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main fontWeight={400}>30d High</TYPE.main>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.label fontSize="24px">{formatDollarAmount(monthlyHigh)}</TYPE.label>
										<Percent value={(100 / (protocolData.currentChainTvls['Treasury'] || 1)) * monthlyHigh - 100} />
									</AutoColumn>
									<AutoColumn gap="4px">
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main fontWeight={400}>30d Low</TYPE.main>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.label fontSize="24px">{formatDollarAmount(monthlyLow)}</TYPE.label>
										<Percent value={(100 / (protocolData.currentChainTvls['Treasury'] || 1)) * monthlyLow - 100} />
									</AutoColumn>
								</AutoColumn>
							</AutoColumn>
						</DarkGreyCard>
					) : (
						<AutoColumn gap="lg" justify="flex-start">
							<DarkGreyCard>
								{/* eslint-disable-next-line react/jsx-pascal-case */}
								<TYPE.main fontSize="18px">Fetching historical data...</TYPE.main>
								<LocalLoader fill={false} />
							</DarkGreyCard>
						</AutoColumn>
					)}
					<LineChart
						data={formattedTreasuryData}
						height={220}
						minHeight={332}
						color="#d7fe44"
						value={treasuryTotalHover}
						label={leftLabel}
						setValue={setTreasuryTotal}
						setLabel={setLeftLabel}
						topLeft={
							<AutoColumn gap="4px">
								{/* eslint-disable-next-line react/jsx-pascal-case */}
								<TYPE.mediumHeader fontSize="16px">TVL</TYPE.mediumHeader>
								{/* eslint-disable-next-line react/jsx-pascal-case */}
								<TYPE.largeHeader fontSize="32px">
									<MonoSpace>{formatDollarAmount(treasuryTotalHover, 2, true)} </MonoSpace>
								</TYPE.largeHeader>
								{/* eslint-disable-next-line react/jsx-pascal-case */}
								<TYPE.main fontSize="12px" height="14px">
									{leftLabel ? <MonoSpace>{leftLabel} (UTC)</MonoSpace> : null}
								</TYPE.main>
							</AutoColumn>
						}
					/>
				</ContentLayout>
			</AutoColumn>
		</PageWrapper>
	);
}
