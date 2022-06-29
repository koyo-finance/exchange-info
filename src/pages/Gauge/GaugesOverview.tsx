import VotingCycleCountdown from 'components/VotingCycleCountdown';
import React, { useEffect } from 'react';
import { DarkGreyCard } from '../../components/Card';
import { AutoColumn } from '../../components/Column';
import GaugeTable from '../../components/gauges/GaugeTable';
import { LocalLoader } from '../../components/Loader';
import PieChart from '../../components/PieChart/PieChart';
import { useGauges } from '../../data/koyo/kyo/useGauges';
import { TYPE } from '../../theme';
import getChartColor from '../../utils/getChartColor';
import { PageWrapper } from '../styled';

const GaugesOverview: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const gauges = useGauges();

	return (
		<PageWrapper>
			<AutoColumn gap="lg">
				<VotingCycleCountdown />

				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.main>All Gauges</TYPE.main>
				<GaugeTable gauges={gauges} />

				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.main>Weight distribution</TYPE.main>
				{gauges.length > 0 ? (
					<PieChart
						data={gauges.map((gauge, i) => ({ name: gauge.symbol, value: gauge.lastWeight, fill: getChartColor(gauge.name, i) }))}
						height={200}
						minHeight={200}
						dollarDenominatedData={false}
					/>
				) : (
					<AutoColumn gap="lg" justify="flex-start">
						<DarkGreyCard>
							{/* eslint-disable-next-line react/jsx-pascal-case */}
							<TYPE.main fontSize="18px">Fetching weight distribution data...</TYPE.main>
							<LocalLoader fill={false} />
						</DarkGreyCard>{' '}
					</AutoColumn>
				)}
			</AutoColumn>
		</PageWrapper>
	);
};

export default GaugesOverview;
