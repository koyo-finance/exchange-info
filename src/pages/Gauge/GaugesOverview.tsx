import { useGauges } from '../../data/koyo/kyo/useGauges';
import React, { useEffect } from 'react';
import { TYPE } from 'theme';
import { AutoColumn } from '../../components/Column';
import { PageWrapper } from '../styled';
import GaugeTable from 'components/gauges/GaugeTable';
// import TopPoolMovers from 'components/pools/TopPoolMovers'

const GaugesOverview: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const gauges = useGauges();

	return (
		<PageWrapper>
			<AutoColumn gap="lg">
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.main>All Gauges</TYPE.main>
				<GaugeTable gauges={gauges} />
			</AutoColumn>
		</PageWrapper>
	);
};

export default GaugesOverview;
