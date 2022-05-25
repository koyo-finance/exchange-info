import { ALTERNATIVE_COLORS } from 'constants/tokenColorList';

export default function getChartColor(_tokenName: string, index: number) {
	return ALTERNATIVE_COLORS[index];
}
