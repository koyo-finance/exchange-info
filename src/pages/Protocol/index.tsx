import { formatDollarAmount, unixToDate } from '@koyofinance/core-sdk';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { AutoColumn } from '../../components/Column';
import LineChart from '../../components/LineChart/alt';
import { ResponsiveRow } from '../../components/Row';
import { MonoSpace } from '../../components/shared';
import { TYPE } from '../../theme';
import { DefiLlamaProtocol } from '../../types/DefiLlama';
import { PageWrapper, ThemedBackgroundGlobal } from '../styled';

const ChartWrapper = styled.div`
	width: 49%;

	${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`;

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Protocol() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { data: tvlData } = useSWR<DefiLlamaProtocol>('https://api.llama.fi/protocol/koyo-finance', fetcher);

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
			</AutoColumn>
		</PageWrapper>
	);
}
