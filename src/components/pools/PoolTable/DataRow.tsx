import { formatDollarAmount } from '@koyofinance/core-sdk';
import { GreyBadge } from 'components/Card';
import PoolCurrencyLogo from 'components/PoolCurrencyLogo';
import { RowFixed } from 'components/Row';
import { Label } from 'components/Text';
import { PoolData } from 'data/koyo/exchange/usePools';
import React from 'react';
import { Link } from 'react-router-dom';
import { useActiveNetworkVersion } from 'state/application/hooks';
import styled from 'styled-components';
import { TYPE } from 'theme';
import { getShortPoolName } from 'utils/getShortPoolName';
import { networkPrefix } from 'utils/networkPrefix';

const ResponsiveGrid = styled.div`
	display: grid;
	grid-gap: 1em;
	align-items: center;

	grid-template-columns: 20px 3.5fr repeat(3, 1fr);

	@media screen and (max-width: 900px) {
		grid-template-columns: 20px 1.5fr repeat(2, 1fr);
		& ${Label}:nth-child(3) {
			display: none;
		}
		& ${GreyBadge}:nth-child(3) {
			display: none;
		}
	}

	@media screen and (max-width: 500px) {
		grid-template-columns: 20px 1.5fr repeat(1, 1fr);
		& ${Label}:nth-child(4) {
			display: none;
		}
		& ${GreyBadge}:nth-child(4) {
			display: none;
		}
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 2.5fr repeat(1, 1fr);
		> *:nth-child(1) {
			display: none;
		}
	}
`;

const LinkWrapper = styled(Link)`
	text-decoration: none;
	:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

export interface DataRowProps {
	poolData: PoolData;
	index: number;
}

const DataRow: React.FC<DataRowProps> = ({ poolData, index }) => {
	const [activeNetwork] = useActiveNetworkVersion();

	return (
		<LinkWrapper to={`${networkPrefix(activeNetwork)}pools/${poolData.id}`}>
			<ResponsiveGrid>
				<Label fontWeight={400}>{index + 1}</Label>
				<Label fontWeight={400}>
					<RowFixed>
						<PoolCurrencyLogo tokens={poolData.tokens} />
						{/* eslint-disable-next-line react/jsx-pascal-case */}
						<TYPE.label mr="5px">{getShortPoolName(poolData)}</TYPE.label>
						<GreyBadge ml="5px" fontSize="14px">
							{poolData.swapFee * 100 < 0.01 ? (poolData.swapFee * 100).toFixed(3) : (poolData.swapFee * 100).toFixed(2)}%
						</GreyBadge>
					</RowFixed>
				</Label>

				<Label end={1} fontWeight={400}>
					{formatDollarAmount(poolData.volumeUSD)}
				</Label>
				<Label end={1} fontWeight={400}>
					{formatDollarAmount(poolData.volumeUSDWeek)}
				</Label>
				<Label end={1} fontWeight={400}>
					{formatDollarAmount(poolData.tvlUSD)}
				</Label>
			</ResponsiveGrid>
		</LinkWrapper>
	);
};

export default DataRow;
