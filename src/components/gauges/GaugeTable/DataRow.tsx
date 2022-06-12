import { formatAmount } from '@koyofinance/core-sdk';
import { DarkGreyCard, GreyBadge } from 'components/Card';
import { RowFixed } from 'components/Row';
import { Label } from 'components/Text';
import { GaugeInfo } from 'data/koyo/kyo/useGauges';
import React from 'react';
import { Link } from 'react-router-dom';
import { useActiveNetworkVersion } from 'state/application/hooks';
import styled from 'styled-components';
import { TYPE } from 'theme';
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
	gaugeInfo: GaugeInfo;
	index: number;
}

const DataRow: React.FC<DataRowProps> = ({ gaugeInfo, index }) => {
	const [activeNetwork] = useActiveNetworkVersion();

	return (
		<LinkWrapper to={`${networkPrefix(activeNetwork)}gauges/${gaugeInfo.address}`}>
			<ResponsiveGrid>
				<Label fontWeight={400}>{index + 1}</Label>
				<Label fontWeight={400}>
					<RowFixed>
						{/* eslint-disable-next-line react/jsx-pascal-case */}
						<TYPE.label mr="5px">{gaugeInfo.symbol}</TYPE.label>
					</RowFixed>
				</Label>

				<Label end={0} fontWeight={400}>
					{gaugeInfo.weight.weight.toLocaleString('fullwide', { maximumFractionDigits: 1 })}
				</Label>
				<Label end={0} fontWeight={400}>
					{gaugeInfo.killed ? '❌' : '✔️'}
				</Label>
			</ResponsiveGrid>
		</LinkWrapper>
	);
};

export default DataRow;
