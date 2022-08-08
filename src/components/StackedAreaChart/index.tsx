import { formatDollarAmount } from '@koyofinance/core-sdk';
import Card from 'components/Card';
import { RowBetween } from 'components/Row';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { darken } from 'polished';
import React, { ReactNode } from 'react';
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';
import { VolumeWindow } from 'types';
import { AggregateProtocolChartData } from 'utils/getAggregatedProtocolChartData';
import getChartColor from '../../utils/getChartColor';

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

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
	data: AggregateProtocolChartData[];
	color?: string;
	tokenSet: string[];
	height?: number;
	minHeight?: number;
	activeWindow?: VolumeWindow;
	value?: number;
	label?: string;
	topLeft?: ReactNode;
	topRight?: ReactNode;
	bottomLeft?: ReactNode;
	bottomRight?: ReactNode;
}

const StackedAreaChart: React.FC<LineChartProps> = ({
	data,
	color = '#56B2A4',
	tokenSet,
	value,
	label,
	activeWindow,
	topLeft,
	topRight,
	bottomLeft,
	bottomRight,
	minHeight = DEFAULT_HEIGHT,
	...rest
}) => {
	return (
		<Wrapper minHeight={minHeight} {...rest}>
			<RowBetween>
				{topLeft ?? null}
				{topRight ?? null}
			</RowBetween>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 25,
						bottom: 5
					}}
				>
					<defs>
						{tokenSet.map((el) => (
							<linearGradient
								key={el + getChartColor(el, tokenSet.indexOf(el))}
								id={getChartColor(el, tokenSet.indexOf(el))}
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop offset="5%" stopColor={darken(0.36, getChartColor(el, tokenSet.indexOf(el)))} stopOpacity={0.5} />
								<stop offset="100%" stopColor={getChartColor(el, tokenSet.indexOf(el))} stopOpacity={0} />
							</linearGradient>
						))}
					</defs>
					<XAxis
						dataKey="time"
						axisLine={false}
						tickLine={false}
						tickFormatter={(time) => dayjs(time).format('DD.MM.YY')}
						minTickGap={10}
					/>
					<YAxis allowDataOverflow={true} tickFormatter={(el) => formatDollarAmount(el, 2, true)} />
					<Legend />
					<Tooltip
						contentStyle={{ backgroundColor: '#191B1F' }}
						formatter={(value: number) => formatDollarAmount(value)}
						labelFormatter={(time) => dayjs(time).format('DD.MM.YY')}
					/>
					{tokenSet.map((el) => (
						<Area
							key={el}
							fillOpacity={1}
							stackId="a"
							dataKey={el}
							type="monotone"
							stroke={getChartColor(el, tokenSet.indexOf(el))}
							fill={`url(#${getChartColor(el, tokenSet.indexOf(el))})`}
							strokeWidth={2}
						/>
					))}
				</AreaChart>
			</ResponsiveContainer>
			<RowBetween>
				{bottomLeft ?? null}
				{bottomRight ?? null}
			</RowBetween>
		</Wrapper>
	);
};

export default StackedAreaChart;
