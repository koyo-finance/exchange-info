import Card from '../Card';
import { RowBetween } from '../Row';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import useTheme from '../../hooks/useTheme';
import { darken } from 'polished';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import styled from 'styled-components';
import { ChartDataPoint } from '../../types/charts';

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
	data: ChartDataPoint[];
	color?: string;
	height?: number;
	minHeight?: number;
	setValue?: Dispatch<SetStateAction<number | undefined>>; // used for value on hover
	setLabel?: Dispatch<SetStateAction<string | undefined>>; // used for label of valye
	value?: number;
	label?: string;
	topLeft?: ReactNode;
	topRight?: ReactNode;
	bottomLeft?: ReactNode;
	bottomRight?: ReactNode;
	tickerFormat?: string;
}

const Chart: React.FC<LineChartProps> = ({
	data,
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
	tickerFormat = 'DD.MM.YY',
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
				<AreaChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5
					}}
					onMouseLeave={() => {
						setLabel && setLabel(undefined);
						setValue && setValue(undefined);
					}}
				>
					<defs>
						<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor={darken(0.36, color)} stopOpacity={0.5} />
							<stop offset="100%" stopColor={color} stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis
						dataKey="time"
						axisLine={false}
						tickLine={false}
						tickFormatter={(time) => dayjs(time).format(tickerFormat)}
						minTickGap={10}
					/>
					<Tooltip
						cursor={{ stroke: theme.bg2 }}
						contentStyle={{ display: 'none' }}
						formatter={(_value: number, _name: string, props: { payload: { time: string; value: number } }) => {
							if (setValue && parsedValue !== props.payload.value) {
								setValue(props.payload.value);
							}
							const formattedTime = dayjs(props.payload.time).format('MMM D, YYYY');
							if (setLabel && label !== formattedTime) setLabel(formattedTime);
						}}
					/>
					<Area dataKey="value" type="monotone" stroke={color} fill="url(#gradient)" strokeWidth={2} />
				</AreaChart>
			</ResponsiveContainer>
			<RowBetween>
				{bottomLeft ?? null}
				{bottomRight ?? null}
			</RowBetween>
		</Wrapper>
	);
};

export default Chart;
