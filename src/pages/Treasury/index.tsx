import { ChainId, ExplorerTarget, formatAmount, formatDollarAmount, fromBigNumber, getExplorerLink, unixToDate } from '@koyofinance/core-sdk';
import { DarkGreyCard, GreyCard } from 'components/Card';
import SymbolCurrencyLogo from 'components/CurrencyLogo/SymbolCurrencyLogo';
import { LocalLoader } from 'components/Loader';
import Percent from 'components/Percent';
import PieChart from 'components/PieChart/PieChart';
import UserPoolTable from 'components/pools/UserPoolTable';
import { RowBetween, RowFixed } from 'components/Row';
import TreasuryTokenPortfolioTable from 'components/tokens/TreasuryTokenPortfolioTable';
import { useKoyoPools } from 'data/koyo/exchange/usePools';
import useUserPools, { PoolDataUser } from 'data/koyo/exchange/useUserPools';
import { useDefiLlamaData } from 'hooks/useDefiLlamaData';
import { useHistoricalProtocolData } from 'hooks/useHistoricalProtocolData';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useMemo, useState } from 'react';
import { ExternalLink } from 'react-feather';
import styled from 'styled-components';
import { getAssetColor } from 'utils/getAssetColor';
import getChartColor from 'utils/getChartColor';
import DebankLogo from '../../assets/svg/debank.svg';
import ZapperLogo from '../../assets/svg/zapper.svg';
import { AutoColumn } from '../../components/Column';
import LineChart from '../../components/LineChart/alt';
import { MonoSpace } from '../../components/shared';
import useTokenBalance from '../../hooks/contracts/useTokenBalance';
import { TYPE } from '../../theme';
import { ExternalLink as StyledExternalLink } from '../../theme/components';
import { PageWrapper, ThemedBackgroundGlobal } from '../styled';

const StyledDebankLogo = styled.img`
	height: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledZapperLogo = styled.img`
	height: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
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

const ContentLayoutRight = styled.div`
	display: grid;
	grid-template-columns: 1fr 400px;
	grid-gap: 1em;
	@media screen and (max-width: 700px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`;

const Treasury: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const TREASURY_ADDRESS = '0x559dBda9Eb1E02c0235E245D9B175eb8DcC08398'.toLowerCase();
	const KYO_ADDRESS = '0x618CC6549ddf12de637d46CDDadaFC0C2951131C'.toLowerCase();
	const debankLink = `https://debank.com/profile/${TREASURY_ADDRESS}`;
	const zapperLink =
		'https://zapper.fi/bundle/0x027f41f041ed3d484296b9ef7b965d23abf04200?label=K%C5%8Dy%C5%8D%20Labs%20-%20Treasuries&id=0xf4bd3686c545132e0b623fe0078f392d70653531';

	const theme = useTheme();

	const { treasury: treasuryData } = useHistoricalProtocolData('koyo-finance');
	const { data: protocolData } = useDefiLlamaData('koyo-finance');
	const poolData = useKoyoPools();
	const userPools = useUserPools(TREASURY_ADDRESS);
	const { data: treasuryKYOBalance = 0, isLoading: treasuryKYOBalanceLoading } = useTokenBalance(TREASURY_ADDRESS, KYO_ADDRESS);

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

	const formattedTreasuryHoldingsData = useMemo(() => {
		const lastData = treasuryData?.tokens?.at(-1);
		if (treasuryData && lastData) {
			const lastDataAmounts = Object.entries(lastData.amounts);
			const lastDataValues = lastData.values;

			return lastDataAmounts //
				.map(([symbol, amount]) => ({ symbol, amount, value: lastDataValues[symbol] }))
				.filter((td) => td.amount);
		}
		return undefined;
	}, [treasuryData]);

	const formattedTreasuryHoldingsPieChartData = useMemo(() => {
		if (formattedTreasuryHoldingsData) {
			return formattedTreasuryHoldingsData.map((fthd) => ({
				name: fthd.symbol,
				value: fthd.value,
				fill: getAssetColor(fthd.symbol)
			}));
		}
		return undefined;
	}, [formattedTreasuryHoldingsData]);

	const poolDatasUser: PoolDataUser[] = [];
	if (poolData.length > 0) {
		userPools.forEach((pool) => {
			const poolDataUser = {} as PoolDataUser;
			const userPool = poolData.find((x) => x.id === pool.poolId);
			if (userPool) {
				poolDataUser.address = userPool?.address;
				poolDataUser.feeTier = userPool.feeTier;
				poolDataUser.id = userPool.id;
				poolDataUser.name = userPool.name;
				poolDataUser.swapFee = userPool.swapFee;
				poolDataUser.symbol = userPool.symbol;
				poolDataUser.tokens = userPool.tokens;
				poolDataUser.userRelativeTVL = pool.relativeShare;
				poolDataUser.userTVL = userPool?.tvlUSD * pool.relativeShare;
				poolDataUser.dailyFees = userPool.feesUSD * pool.relativeShare * 0.5;
				poolDataUser.tvlUSD = userPool.tvlUSD;
				poolDataUser.volumeUSD = userPool.volumeUSD;
			}
			poolDatasUser.push(poolDataUser);
		});
	}

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
					<DarkGreyCard>
						<AutoColumn gap={formattedTreasuryData.length > 0 && protocolData?.currentChainTvls ? 'lg' : 'sm'}>
							<GreyCard padding="16px">
								<AutoColumn gap="4px">
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.main>KYO reserves</TYPE.main>
									<RowBetween key={'kyoReseves'}>
										<RowFixed>
											<SymbolCurrencyLogo symbol="KYO" size="32px" />
											{/* eslint-disable-next-line react/jsx-pascal-case */}
											<TYPE.label fontSize="14px" ml="8px">
												{'KYO'}
											</TYPE.label>
										</RowFixed>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.label fontSize="14px">
											{treasuryKYOBalanceLoading ? '?' : formatAmount(fromBigNumber(treasuryKYOBalance))}
										</TYPE.label>
									</RowBetween>
								</AutoColumn>
							</GreyCard>
							{formattedTreasuryData.length > 0 && protocolData?.currentChainTvls ? (
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
							) : (
								<AutoColumn gap="sm" justify="flex-start">
									<DarkGreyCard>
										{/* eslint-disable-next-line react/jsx-pascal-case */}
										<TYPE.main fontSize="18px">Fetching historical data...</TYPE.main>
										<LocalLoader fill={false} />
									</DarkGreyCard>
								</AutoColumn>
							)}
						</AutoColumn>
					</DarkGreyCard>

					<LineChart
						data={formattedTreasuryData}
						height={220}
						minHeight={332}
						color="#d7fe44"
						tickerFormat="DD.MM"
						value={treasuryTotalHover}
						label={leftLabel}
						setValue={setTreasuryTotal}
						setLabel={setLeftLabel}
						topLeft={
							<AutoColumn gap="4px">
								{/* eslint-disable-next-line react/jsx-pascal-case */}
								<TYPE.mediumHeader fontSize="16px">Historical Token Net Worth in Treasury</TYPE.mediumHeader>
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
						topRight={
							<RowFixed align="top" justify="center">
								{debankLink && (
									<StyledExternalLink href={debankLink} style={{ marginLeft: '12px' }}>
										<StyledDebankLogo src={DebankLogo} />
									</StyledExternalLink>
								)}
								{zapperLink && (
									<StyledExternalLink href={zapperLink} style={{ marginLeft: '12px' }}>
										<StyledZapperLogo src={ZapperLogo} />
									</StyledExternalLink>
								)}
								<StyledExternalLink href={getExplorerLink(ChainId.BOBA, ExplorerTarget.ADDRESS, TREASURY_ADDRESS)}>
									<ExternalLink stroke={theme.text2} size={'17px'} style={{ marginLeft: '12px' }} />
								</StyledExternalLink>
							</RowFixed>
						}
					/>
				</ContentLayout>

				<ContentLayoutRight>
					<TreasuryTokenPortfolioTable tokenDatas={formattedTreasuryHoldingsData} />
					<DarkGreyCard>
						<AutoColumn gap="4px">
							{/* eslint-disable-next-line react/jsx-pascal-case */}
							<TYPE.main fontWeight={400}>Token distribution</TYPE.main>
						</AutoColumn>
						{formattedTreasuryHoldingsPieChartData && formattedTreasuryHoldingsPieChartData.length > 0 ? (
							<PieChart data={formattedTreasuryHoldingsPieChartData} height={200} minHeight={400} />
						) : (
							<AutoColumn gap="lg" justify="flex-start">
								<DarkGreyCard>
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.main fontSize="18px">Fetching token distribution...</TYPE.main>
									<LocalLoader fill={false} />
								</DarkGreyCard>{' '}
							</AutoColumn>
						)}
					</DarkGreyCard>
				</ContentLayoutRight>

				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.white> Kōyō Protocol Investments </TYPE.white>
				<UserPoolTable poolDatas={poolDatasUser} />
			</AutoColumn>
		</PageWrapper>
	);
};

export default Treasury;
