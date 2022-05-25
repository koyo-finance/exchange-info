export interface Block {
	number: number;
	timestamp: string;
}

export enum VolumeWindow {
	daily,
	weekly,
	monthly
}

export interface ChartDayData {
	date: number;
	volumeUSD: number;
	tvlUSD: number;
}

export interface GenericChartEntry {
	time: string;
	value: number;
}

/**
 * Formatted type for Candlestick charts
 */
export interface PriceChartEntry {
	time: number; // unix timestamp
	open: number;
	close: number;
	high: number;
	low: number;
}
