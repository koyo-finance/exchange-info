import { AutoColumn } from 'components/Column';
import { TokenData } from 'data/koyo/exchange/useTokens';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DataCard from './DataCard';

const FixedContainer = styled(AutoColumn)``;

export const ScrollableRow = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	overflow-x: auto;
	white-space: nowrap;

	::-webkit-scrollbar {
		display: none;
	}
`;

export interface TopTokenMoversProps {
	tokenDatas: TokenData[];
}

const TopTokenMovers: React.FC<TopTokenMoversProps> = ({ tokenDatas }) => {
	const topPriceIncrease = tokenDatas
		.sort((a, b) => {
			return a && b ? (Math.abs(a?.priceUSDChange) > Math.abs(b?.priceUSDChange) ? -1 : 1) : -1;
		})
		.slice(0, Math.min(20, tokenDatas.length));

	const increaseRef = useRef<HTMLDivElement>(null);
	const [increaseSet, setIncreaseSet] = useState(false);

	useEffect(() => {
		if (!increaseSet && increaseRef && increaseRef.current) {
			setInterval(() => {
				if (increaseRef.current && increaseRef.current.scrollLeft !== increaseRef.current.scrollWidth) {
					increaseRef.current.scrollTo(increaseRef.current.scrollLeft + 1, 0);
				}
			}, 30);
			setIncreaseSet(true);
		}
	}, [increaseRef, increaseSet]);

	return (
		<FixedContainer gap="md">
			<ScrollableRow ref={increaseRef}>
				{topPriceIncrease.map((data) => (data ? <DataCard key={`top-card-token-${data.address}`} tokenData={data} /> : null))}
			</ScrollableRow>
		</FixedContainer>
	);
};

export default TopTokenMovers;
