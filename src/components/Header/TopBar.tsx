import { AutoRow, RowBetween, RowFixed } from '../Row';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink, TYPE } from '../../theme';
import { formatDollarAmount } from '../../utils/numbers';
import { KOYO_APP_LINK, KOYO_BACKGROUND_IMAGE, KOYO_DOCS_LINK } from '../../data/koyo/constants';
import { useLatestPrices } from '../../data/koyo/useLatestPrices';
import Polling from './Polling';

const Wrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.black};
	padding: 10px 20px;
	background-image: url(${KOYO_BACKGROUND_IMAGE});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

const StyledPolling = styled.div`
	display: flex;
	color: white;
	border-radius: 4px;
	padding: 4px;
	background-color: ${({ theme }) => theme.bg2};
	transition: opacity 0.25s ease;
	color: ${({ theme }) => theme.green1};
	:hover {
		opacity: 1;
	}
	z-index: 9999;

	${({ theme }) => theme.mediaWidth.upToMedium`
    display: none;
  `}
`;

// eslint-disable-next-line @typescript-eslint/unbound-method
const Item = styled(TYPE.main)`
	font-size: 12px;
`;

const StyledLink = styled(ExternalLink)`
	font-size: 12px;
	color: ${({ theme }) => theme.text1};
`;

const TopBar: React.FC = () => {
	const { eth, boba } = useLatestPrices();

	return (
		<Wrapper>
			<RowBetween>
				<Polling />
				<AutoRow gap="6px">
					<RowFixed>
						<StyledPolling>
							<Item>ETH Price:</Item>
							<Item fontWeight="700" ml="4px">
								{formatDollarAmount(eth)}
							</Item>
						</StyledPolling>
					</RowFixed>
					<RowFixed>
						<StyledPolling>
							<Item>BOBA Price:</Item>
							<Item fontWeight="700" ml="4px">
								{formatDollarAmount(boba)}
							</Item>
						</StyledPolling>
					</RowFixed>
				</AutoRow>
				<AutoRow gap="6px" style={{ justifyContent: 'flex-end' }}>
					<StyledLink href={KOYO_DOCS_LINK}>Docs</StyledLink>
					<StyledLink href={KOYO_APP_LINK}>App</StyledLink>
				</AutoRow>
			</RowBetween>
		</Wrapper>
	);
};

export default TopBar;
