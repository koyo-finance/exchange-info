import { ChainId, formatDollarAmount } from '@koyofinance/core-sdk';
import BarChart from 'components/BarChart/alt';
import { SmallOptionButton } from 'components/Button';
import { AutoColumn } from 'components/Column';
import Loader from 'components/Loader';
import { ResponsiveRow, RowFixed } from 'components/Row';
import { MonoSpace } from 'components/shared';
import { BobaNetworkInfo } from 'constants/networks';
import { useKoyoChainProtocolData } from 'data/koyo/exchange/useKoyoChainProtocolData';
import { useTransformedVolumeData } from 'hooks/useTransformedVolumeData';
import { PageWrapper } from 'pages/styled';
import React, { useEffect, useState } from 'react';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { TYPE } from 'theme';
import { GenericChartEntry, VolumeWindow } from 'types';

const ProtocolFees: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [activeNetwork] = useActiveNetworkVersion();

	const protocolBobaData = useKoyoChainProtocolData(BobaNetworkInfo.startTimeStamp, ChainId.BOBA);

	const [feesHover, setFeesHover] = useState<number | undefined>();
	const [feesLabel, setFeesLabel] = useState<string | undefined>();

	const adjustFees = (data: GenericChartEntry[] | undefined) => {
		const newData: GenericChartEntry[] = [];
		if (data) {
			data.forEach((entry) => {
				const date = new Date(entry.time);
				if (date > new Date('2022-06-13')) {
					newData.push({
						time: entry.time,
						value: entry.value * 0.5
					});
				}
			});
		}
		return newData;
	};

	const [volumeWindow, setVolumeWindow] = useState(VolumeWindow.daily);
	const weeklyVolumeData = useTransformedVolumeData(adjustFees(protocolBobaData?.feeData), 'week');
	const monthlyVolumeData = useTransformedVolumeData(adjustFees(protocolBobaData?.feeData), 'month');

	useEffect(() => {
		setFeesHover(undefined);
	}, [activeNetwork]);

	useEffect(() => {
		if (!feesHover && protocolBobaData.fees24) {
			setFeesHover(protocolBobaData.fees24 * 0.5);
		}
	}, [feesHover, protocolBobaData]);

	return (
		<PageWrapper>
			<AutoColumn gap="lg">
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.largeHeader>Protocol Fee Metrics</TYPE.largeHeader>
				{protocolBobaData?.feeData.length > 0 ? (
					<ResponsiveRow>
						<BarChart
							height={220}
							minHeight={332}
							data={
								volumeWindow === VolumeWindow.monthly
									? monthlyVolumeData
									: volumeWindow === VolumeWindow.weekly
									? weeklyVolumeData
									: adjustFees(protocolBobaData?.feeData)
							}
							color="#d7fe44"
							setValue={setFeesHover}
							setLabel={setFeesLabel}
							value={feesHover}
							label={feesLabel}
							activeWindow={volumeWindow}
							topRight={
								<RowFixed style={{ marginLeft: '-40px', marginTop: '8px' }}>
									<SmallOptionButton
										active={volumeWindow === VolumeWindow.daily}
										onClick={() => setVolumeWindow(VolumeWindow.daily)}
									>
										D
									</SmallOptionButton>
									<SmallOptionButton
										active={volumeWindow === VolumeWindow.weekly}
										style={{ marginLeft: '8px' }}
										onClick={() => setVolumeWindow(VolumeWindow.weekly)}
									>
										W
									</SmallOptionButton>
									<SmallOptionButton
										active={volumeWindow === VolumeWindow.monthly}
										style={{ marginLeft: '8px' }}
										onClick={() => setVolumeWindow(VolumeWindow.monthly)}
									>
										M
									</SmallOptionButton>
								</RowFixed>
							}
							topLeft={
								<AutoColumn gap="4px">
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.mediumHeader fontSize="16px">Collected fees</TYPE.mediumHeader>
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.largeHeader fontSize="32px">
										<MonoSpace> {formatDollarAmount(feesHover, 2)}</MonoSpace>
									</TYPE.largeHeader>
									{/* eslint-disable-next-line react/jsx-pascal-case */}
									<TYPE.main fontSize="12px" height="14px">
										{feesLabel ? <MonoSpace>{feesLabel} (UTC)</MonoSpace> : null}
									</TYPE.main>
								</AutoColumn>
							}
						/>
					</ResponsiveRow>
				) : (
					<Loader />
				)}
			</AutoColumn>
		</PageWrapper>
	);
};

export default ProtocolFees;
