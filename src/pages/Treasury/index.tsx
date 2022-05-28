import { formatAmount, formatDollarAmount, fromBigNumber, unixToDate } from '@koyofinance/core-sdk';
import { DarkGreyCard, GreyCard } from 'components/Card';
import SymbolCurrencyLogo from 'components/CurrencyLogo/SymbolCurrencyLogo';
import { LocalLoader } from 'components/Loader';
import Percent from 'components/Percent';
import { RowBetween, RowFixed } from 'components/Row';
import TreasuryTokenPortfolioTable from 'components/tokens/TreasuryTokenPortfolioTable';
import { useDefiLlamaData } from 'hooks/useDefiLlamaData';
import { useHistoricalProtocolData } from 'hooks/useHistoricalProtocolData';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useMemo, useState } from 'react';
import { ExternalLink } from 'react-feather';
import { useActiveNetworkVersion } from 'state/application/hooks';
import styled from 'styled-components';
import { getEtherscanLink } from 'utils';
import DebankLogo from '../../assets/svg/debank.svg';
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

const ContentLayout = styled.div`
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-gap: 1em;
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`;

const Treasury: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const TREASURY_ADDRESS = '0x559dBda9Eb1E02c0235E245D9B175eb8DcC08398';
	const KYO_ADDRESS = '0x2F11899C848Ac0251D1F168cB658a44Eef97F2EA';

	const theme = useTheme();

	const [activeNetwork] = useActiveNetworkVersion();

	const { Treasury: treasuryData } = useHistoricalProtocolData('koyo-finance');
	const { data: protocolData } = useDefiLlamaData('koyo-finance');

	const { data: treasuryKYOBalance = 0 } = useTokenBalance(TREASURY_ADDRESS, KYO_ADDRESS);

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

			return lastDataAmounts.map(([symbol, amount]) => ({ symbol, amount, value: lastDataValues[symbol] }));
		}
		return undefined;
	}, [treasuryData]);

	const debankLink = `https://debank.com/profile/${TREASURY_ADDRESS}`;

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
											<TYPE.label fontSize="14px">{formatAmount(fromBigNumber(treasuryKYOBalance))}</TYPE.label>
										</RowBetween>
									</AutoColumn>
								</GreyCard>
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
						tickerFormat="DD.MM"
						value={treasuryTotalHover}
						label={leftLabel}
						setValue={setTreasuryTotal}
						setLabel={setLeftLabel}
						topLeft={
							<AutoColumn gap="4px">
								{/* eslint-disable-next-line react/jsx-pascal-case */}
								<TYPE.mediumHeader fontSize="16px">Token Holding Reserve</TYPE.mediumHeader>
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
								<StyledExternalLink href={getEtherscanLink(1, TREASURY_ADDRESS, 'address', activeNetwork)}>
									<ExternalLink stroke={theme.text2} size={'17px'} style={{ marginLeft: '12px' }} />
								</StyledExternalLink>
							</RowFixed>
						}
					/>
				</ContentLayout>

				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.main> Tokens in treasury wallet </TYPE.main>
				<TreasuryTokenPortfolioTable tokenDatas={formattedTreasuryHoldingsData} />
			</AutoColumn>
		</PageWrapper>
	);
};

export default Treasury;
