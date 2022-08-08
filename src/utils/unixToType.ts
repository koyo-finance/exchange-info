import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);

export function unixToType(unix: number, type: 'month' | 'week') {
	const date = dayjs.unix(unix).utc();

	switch (type) {
		case 'month':
			return date.format('YYYY-MM');
		case 'week': {
			let week = String(date.isoWeek());
			if (week.length === 1) {
				week = `0${week}`;
			}
			return `${date.year()}-${week}`;
		}
	}
}
