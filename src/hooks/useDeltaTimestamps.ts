import dayjs from 'dayjs';

export function useDeltaTimestamps(): [t1: number, t2: number, tWeek: number] {
	const utcCurrentTime = dayjs();

	const t1 = utcCurrentTime.subtract(1, 'day').startOf('minute').unix();
	const t2 = utcCurrentTime.subtract(2, 'day').startOf('minute').unix();
	const tWeek = utcCurrentTime.subtract(1, 'week').startOf('minute').unix();

	return [t1, t2, tWeek];
}
