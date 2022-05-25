import React from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '../../hooks/useWindowSize';

export interface ConfettiProps {
	start: boolean;
	variant?: string;
}

const Confetti: React.FC<ConfettiProps> = ({ start, variant }) => {
	const { width, height } = useWindowSize();

	const variant_ = variant ? variant : height && width && height > 1.5 * width ? 'bottom' : variant;

	return start && width && height ? (
		<ReactConfetti
			style={{ zIndex: 1401 }}
			numberOfPieces={400}
			recycle={false}
			run={true}
			width={width}
			height={height}
			confettiSource={{
				h: height,
				w: width,
				x: 0,
				y: variant_ === 'top' ? height * 0.25 : variant_ === 'bottom' ? height * 0.75 : height * 0.5
			}}
			initialVelocityX={15}
			initialVelocityY={30}
			gravity={0.45}
			tweenDuration={100}
			wind={0.05}
		/>
	) : null;
};

export default Confetti;
