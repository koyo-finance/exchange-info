import { useGauges } from '../../data/koyo/kyo/useGauges';
import React, { useEffect } from 'react';
import { TYPE } from 'theme';
import { AutoColumn } from '../../components/Column';
import { PageWrapper } from '../styled';
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
			</AutoColumn>
			{gauges.map((gauge) => (
				<div style={{ marginTop: '8px' }}>
					<code>{gauge.name}</code> - {Number(gauge.weight.weight).toLocaleString('fullwide', { maximumFractionDigits: 1 })}
				</div>
			))}
		</PageWrapper>
	);
};

export default GaugesOverview;
