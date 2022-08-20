import { formatAmount, formatDollarAmount } from '@koyofinance/core-sdk';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';
import getChartColor from '../../utils/getChartColor';
import Card from '../Card';
import { RowBetween } from '../Row';

dayjs.extend(utc);

const DEFAULT_HEIGHT = 300;

const Wrapper = styled(Card)`
  width: 100%;
  height: ${DEFAULT_HEIGHT}px;
  padding: 1rem;
  padding-right: 2rem;
  display: flex;
  background-color: ${({ theme }) => theme.bg0}
  flex-direction: column;
  > * {
    font-size: 1rem;
  }
`;

export interface PieChartProps extends React.HTMLAttributes<HTMLDivElement> {
	data: any[];
	dollarDenominatedData?: boolean;
	color?: string;
	height?: number;
	minHeight?: number;
	cxcy?: string[];
	setValue?: Dispatch<SetStateAction<number | undefined>>; // used for value on hover
	setLabel?: Dispatch<SetStateAction<string | undefined>>; // used for label of value
	value?: number;
	label?: string;
	topLeft?: ReactNode;
	topRight?: ReactNode;
	bottomLeft?: ReactNode;
	bottomRight?: ReactNode;

	colourFunction?: (label: string, index: number) => string;
}

export const PieChart: React.FC<PieChartProps> = ({
	data,
	dollarDenominatedData = true,
	color = '#56B2A4',
	cxcy = ['50%', '50%'],
	value,
	label,
	setValue,
	setLabel,
	topLeft,
	topRight,
	bottomLeft,
	bottomRight,
	minHeight = DEFAULT_HEIGHT,
	colourFunction = getChartColor,
	...rest
}) => {
	const theme = useTheme();
	const parsedValue = value;

	return (
		<Wrapper minHeight={minHeight} {...rest}>
			<RowBetween>
				{topLeft ?? null}
				{topRight ?? null}
			</RowBetween>
			<ResponsiveContainer width="100%" height="100%">
				<RechartsPieChart width={400} height={400}>
					<Pie
						dataKey="value"
						stroke="#959eb2"
						isAnimationActive={true}
						data={data}
						cx={cxcy[0]}
						cy={cxcy[1]}
						innerRadius={35}
						outerRadius={75}
						paddingAngle={15}
						label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
							const RADIAN = Math.PI / 180;
							const radius = 25 + innerRadius + (outerRadius - innerRadius);
							const x = cx + radius * Math.cos(-midAngle * RADIAN);
							const y = cy + radius * Math.sin(-midAngle * RADIAN);

							return (
								<text
									x={x}
									y={y}
									fill={data[index].fill}
									fontSize="80%"
									textAnchor={x > cx ? 'start' : 'end'}
									dominantBaseline="central"
								>
									{data[index].name}
								</text>
							);
						}}
					></Pie>
					<Tooltip
						cursor={{ stroke: theme.bg2 }}
						formatter={(value: number, _name: string, props: { payload: { time: string; value: number } }) => {
							if (setValue && parsedValue !== props.payload.value) {
								setValue(props.payload.value);
							}
							const formattedTime = dayjs(props.payload.time).format('MMM D, YYYY');
							if (setLabel && label !== formattedTime) setLabel(formattedTime);

							return dollarDenominatedData ? formatDollarAmount(value) : formatAmount(value);
						}}
					/>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={colourFunction(entry.name, index)} />
					))}
				</RechartsPieChart>
			</ResponsiveContainer>
			<RowBetween>
				{bottomLeft ?? null}
				{bottomRight ?? null}
			</RowBetween>
		</Wrapper>
	);
};

export default PieChart;
