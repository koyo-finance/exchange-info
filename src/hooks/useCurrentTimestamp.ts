import dayjs from 'dayjs';

export function useCurrentTimestamp(): [tc: number] {
	const utcCurrentTime = dayjs();

	// We have to go slightly back in time to make sure that the timestamp can have a block.
	const tc = utcCurrentTime.subtract(15, 'minutes').startOf('minute').unix();

	return [tc];
}
