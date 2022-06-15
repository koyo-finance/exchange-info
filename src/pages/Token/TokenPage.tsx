import { formatDollarAmount } from '@koyofinance/core-sdk';
import BarChart from 'components/BarChart/alt';
import CandleChart from 'components/CandleChart';
import { DarkGreyCard, LightGreyCard } from 'components/Card';
import { AutoColumn } from 'components/Column';
import SymbolCurrencyLogo from 'components/CurrencyLogo/SymbolCurrencyLogo';
import LineChart from 'components/LineChart/alt';
import { LocalLoader } from 'components/Loader';
import Percent from 'components/Percent';
import PoolTable from 'components/pools/PoolTable';
import { AutoRow, RowBetween, RowFixed, RowFlat } from 'components/Row';
import { MonoSpace } from 'components/shared';
import { ToggleElementFree, ToggleWrapper } from 'components/Toggle/index';
import { useKoyoPoolsForToken } from 'data/koyo/exchange/usePools';
import { useKoyoToken } from 'data/koyo/exchange/useToken';
import { useKoyoTokenData, useKoyoTokenPageData } from 'data/koyo/exchange/useTokens';
import dayjs from 'dayjs';
import useTheme from 'hooks/useTheme';
import { PageWrapper, ThemedBackground } from 'pages/styled';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useActiveNetworkVersion } from 'state/application/hooks';
import styled from 'styled-components';
import { StyledInternalLink, TYPE } from 'theme';
import { networkPrefix } from 'utils/networkPrefix';

const PriceText = styled(TYPE.label)`
	font-size: 36px;
	line-height: 0.8;
`;

const ContentLayout = styled.div`
	margin-top: 16px;
	display: grid;
	grid-template-columns: 260px 1fr;
	grid-gap: 1em;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`;

const ResponsiveRow = styled(RowBetween)`
	${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;
    width: 100%:
  `};
`;

enum ChartView {
	TVL,
	VOL,
	PRICE
}

export default function TokenPage({
	match: {
		params: { address }
	}
}: RouteComponentProps<{ address: string }>) {
	const [activeNetwork] = useActiveNetworkVersion();
	const theme = useTheme();

	address = address.toLowerCase();
	const backgroundColor = 'rgb(36, 156, 108)';

	// scroll on page view
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const tokenData = useKoyoTokenData(address);
	const poolData = useKoyoPoolsForToken(address);
	const { tvlData, volumeData, priceData } = useKoyoTokenPageData(address);
	const { chartData } = useKoyoToken(address);

	// chart labels
	const [view, setView] = useState(ChartView.VOL);
	const [latestValue, setLatestValue] = useState<number | undefined>();
	const [valueLabel, setValueLabel] = useState<string | undefined>();

	return (
		<PageWrapper>
			<ThemedBackground backgroundColor={backgroundColor} />
			{tokenData ? (
				// eslint-disable-next-line no-negated-condition
				!tokenData.exists ? (
					<LightGreyCard style={{ textAlign: 'center' }}>No pool has been created with this token yet.</LightGreyCard>
				) : (
					<AutoColumn gap="32px">
						<AutoColumn gap="32px">
							<RowBetween>
								<AutoRow gap="4px">
									<StyledInternalLink to={networkPrefix(activeNetwork)}>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main>{`Home > `}</TYPE.main>
									</StyledInternalLink>
									<StyledInternalLink to={`${networkPrefix(activeNetwork)}tokens`}>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.label>{` Tokens `}</TYPE.label>
									</StyledInternalLink>
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.main>{` > `}</TYPE.main>
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.label>{` ${tokenData.symbol} `}</TYPE.label>
								</AutoRow>
							</RowBetween>
							<ResponsiveRow align="flex-end">
								<AutoColumn gap="md">
									<RowFixed gap="lg">
										<SymbolCurrencyLogo symbol={tokenData.symbol} />
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.label ml={'10px'} fontSize="20px">
											{tokenData.name}
										</TYPE.label>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main ml={'6px'} fontSize="20px">
											({tokenData.symbol})
										</TYPE.main>
									</RowFixed>
									{priceData[priceData.length - 1].value ? (
										<RowFlat style={{ marginTop: '8px' }}>
											<PriceText mr="10px"> {formatDollarAmount(priceData[priceData.length - 1].value)}</PriceText>
											(
											<Percent
												value={
													((priceData[priceData.length - 1].value - priceData[priceData.length - 2].value) /
														priceData[priceData.length - 1].value) *
													100
												}
											/>
											)
										</RowFlat>
									) : null}
								</AutoColumn>
							</ResponsiveRow>
						</AutoColumn>

						<ContentLayout>
							<DarkGreyCard>
								<AutoColumn gap="lg">
									<AutoColumn gap="4px">
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main fontWeight={400}>TVL</TYPE.main>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.label fontSize="24px">{formatDollarAmount(tokenData.tvlUSD)}</TYPE.label>
										<Percent value={tokenData.tvlUSDChange} />
									</AutoColumn>
									<AutoColumn gap="4px">
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main fontWeight={400}>24h Trading Vol</TYPE.main>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.label fontSize="24px">{formatDollarAmount(tokenData.volumeUSD)}</TYPE.label>
										<Percent value={tokenData.volumeUSDChange} />
									</AutoColumn>
									<AutoColumn gap="4px">
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main fontWeight={400}>7d Trading Vol</TYPE.main>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.label fontSize="24px">{formatDollarAmount(tokenData.volumeUSDWeek)}</TYPE.label>
									</AutoColumn>
								</AutoColumn>
							</DarkGreyCard>
							<DarkGreyCard>
								<RowBetween align="flex-start">
									<AutoColumn>
										<RowFixed>
											{/* eslint-disable-next-line react/jsx-pascal-case */}
											<TYPE.label fontSize="24px" height="30px">
												<MonoSpace>
													{latestValue
														? formatDollarAmount(latestValue, 2)
														: view === ChartView.VOL
														? formatDollarAmount(volumeData[volumeData.length - 1]?.value)
														: view === ChartView.TVL
														? formatDollarAmount(tvlData[tvlData.length - 1]?.value)
														: chartData[chartData.length - 1]
														? formatDollarAmount(chartData[chartData.length - 1].open, 2)
														: 0}
												</MonoSpace>
											</TYPE.label>
										</RowFixed>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main height="20px" fontSize="12px">
											{valueLabel ? (
												<MonoSpace>{valueLabel} (UTC)</MonoSpace>
											) : (
												<MonoSpace>{dayjs.utc().format('MMM D, YYYY')}</MonoSpace>
											)}
										</TYPE.main>
									</AutoColumn>
									<ToggleWrapper width="180px">
										<ToggleElementFree
											isActive={view === ChartView.VOL}
											fontSize="12px"
											onClick={() => (view === ChartView.VOL ? setView(ChartView.TVL) : setView(ChartView.VOL))}
										>
											Volume
										</ToggleElementFree>
										<ToggleElementFree
											isActive={view === ChartView.TVL}
											fontSize="12px"
											onClick={() => (view === ChartView.TVL ? setView(ChartView.PRICE) : setView(ChartView.TVL))}
										>
											TVL
										</ToggleElementFree>
										{
											<ToggleElementFree
												isActive={view === ChartView.PRICE}
												fontSize="12px"
												onClick={() => setView(ChartView.PRICE)}
											>
												Price
											</ToggleElementFree>
										}
									</ToggleWrapper>
								</RowBetween>
								{view === ChartView.TVL ? (
									<LineChart
										data={tvlData}
										color={backgroundColor}
										minHeight={340}
										value={latestValue}
										label={valueLabel}
										setValue={setLatestValue}
										setLabel={setValueLabel}
									/>
								) : view === ChartView.VOL ? (
									<BarChart
										data={volumeData}
										color={backgroundColor}
										minHeight={340}
										value={latestValue}
										label={valueLabel}
										setValue={setLatestValue}
										setLabel={setValueLabel}
									/>
								) : view === ChartView.PRICE ? (
									chartData.length > 10 ? (
										<CandleChart data={chartData} setValue={setLatestValue} setLabel={setValueLabel} color={backgroundColor} />
									) : priceData.length > 0 ? (
										<LineChart
											data={priceData}
											color={backgroundColor}
											minHeight={340}
											value={latestValue}
											label={valueLabel}
											setValue={setLatestValue}
											setLabel={setValueLabel}
										/>
									) : (
										<LocalLoader fill={false} />
									)
								) : null}
							</DarkGreyCard>
						</ContentLayout>
						{/* eslint-disable-next-line react/jsx-pascal-case */}
						<TYPE.main>Pools</TYPE.main>
						<DarkGreyCard>
							<PoolTable poolDatas={poolData} />
						</DarkGreyCard>
					</AutoColumn>
				)
			) : (
				<AutoColumn gap="lg">
					<DarkGreyCard>
						{/* eslint-disable-next-line react/jsx-pascal-case */}
						<TYPE.main fontSize="24px">Loading token data...</TYPE.main>
						<LocalLoader fill={false} />
					</DarkGreyCard>
				</AutoColumn>
			)}
		</PageWrapper>
	);
}
