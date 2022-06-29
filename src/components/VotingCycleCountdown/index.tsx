import { DarkGreyCard, GreyCard } from 'components/Card';
import React from 'react';
import Countdown from 'react-countdown';
import { TYPE } from 'theme';

const week = 604800;

const VotingCycleCountdown: React.FC = () => {
	const currentTime = Date.now() / 1000;
	return (
		<DarkGreyCard>
			{/* eslint-disable-next-line react/jsx-pascal-case */}
			<TYPE.mediumHeader fontWeight={800} textAlign="center">
				<span role="img" aria-label="Hourglass">
					⏳
				</span>{' '}
				<Countdown date={Math.floor((currentTime + week) / week) * week * 1000} />
			</TYPE.mediumHeader>
		</DarkGreyCard>
	);
};

export default VotingCycleCountdown;
