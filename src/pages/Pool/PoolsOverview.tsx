import PoolTable from 'components/pools/PoolTable';
import { useKoyoPools } from 'data/koyo/exchange/usePools';
import React, { useEffect } from 'react';
import { AutoColumn } from '../../components/Column';
import { TYPE } from '../../theme';
import { PageWrapper } from '../styled';

const PoolsOverview: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const pools = useKoyoPools();

	return (
		<PageWrapper>
			<AutoColumn gap="lg">
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.main>All Pools</TYPE.main>
				<PoolTable poolDatas={pools} />
			</AutoColumn>
		</PageWrapper>
	);
};

export default PoolsOverview;
