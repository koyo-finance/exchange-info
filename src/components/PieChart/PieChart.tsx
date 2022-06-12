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
	setValue?: Dispatch<SetStateAction<number | undefined>>; // used for value on hover
	setLabel?: Dispatch<SetStateAction<string | undefined>>; // used for label of value
	value?: number;
	label?: string;
	topLeft?: ReactNode;
	topRight?: ReactNode;
	bottomLeft?: ReactNode;
	bottomRight?: ReactNode;
}

export const PieChart: React.FC<PieChartProps> = ({
	data,
	dollarDenominatedData = true,
	color = '#56B2A4',
	value,
	label,
	setValue,
	setLabel,
	topLeft,
	topRight,
	bottomLeft,
	bottomRight,
	minHeight = DEFAULT_HEIGHT,
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
						isAnimationActive={false}
						data={data}
						cx="50%"
						cy="50%"
						outerRadius={80}
						// fill="#8884d8"
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
						<Cell key={`cell-${index}`} fill={getChartColor(entry.name, index)} />
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
