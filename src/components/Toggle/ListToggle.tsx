import React from 'react';
import styled from 'styled-components';
import { TYPE } from '../../theme';

const Wrapper = styled.button<{ isActive?: boolean; activeElement?: boolean }>`
	border-radius: 20px;
	border: none;
	background: ${({ theme }) => theme.bg1};
	display: flex;
	width: fit-content;
	cursor: pointer;
	outline: none;
	padding: 0.4rem 0.4rem;
	align-items: center;
`;

const ToggleElement = styled.span<{ isActive?: boolean; bgColor?: string }>`
	border-radius: 50%;
	height: 24px;
	width: 24px;
	background-color: ${({ isActive, bgColor, theme }) => (isActive ? bgColor : theme.bg4)};
	:hover {
		opacity: 0.8;
	}
`;

// eslint-disable-next-line @typescript-eslint/unbound-method
const StatusText = styled(TYPE.main)<{ isActive?: boolean }>`
	margin: 0 10px;
	width: 24px;
	color: ${({ theme, isActive }) => (isActive ? theme.text1 : theme.text3)};
`;

export interface ToggleProps {
	id?: string;
	isActive: boolean;
	bgColor: string;
	toggle: () => void;
}

export default function ListToggle({ id, isActive, bgColor, toggle }: ToggleProps) {
	return (
		<Wrapper id={id} isActive={isActive} onClick={toggle}>
			{isActive && (
				<StatusText fontWeight="600" margin="0 6px" isActive={true}>
					ON
				</StatusText>
			)}
			<ToggleElement isActive={isActive} bgColor={bgColor} />
			{!isActive && (
				<StatusText fontWeight="600" margin="0 6px" isActive={false}>
					OFF
				</StatusText>
			)}
		</Wrapper>
	);
}
