import { ChainId } from '@koyofinance/core-sdk';
import React, { useCallback, useContext } from 'react';
import { useActiveNetworkVersion } from 'state/application/hooks';
import styled, { ThemeContext } from 'styled-components';
import { useActiveWeb3 } from '../../hooks/useActiveWeb3';
import { ExternalLink, TYPE } from '../../theme';
import { getEtherscanLink } from '../../utils';
import { AutoColumn } from '../Column';
import { RowBetween } from '../Row';

const InputPanel = styled.div`
	${({ theme }) => theme.flexColumnNoWrap}
	position: relative;
	border-radius: 1.25rem;
	background-color: ${({ theme }) => theme.bg1};
	z-index: 1;
	width: 100%;
`;

const ContainerRow = styled.div<{ error: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1.25rem;
	border: 1px solid ${({ error, theme }) => (error ? theme.red1 : theme.bg2)};
	transition: border-color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')},
		color 500ms ${({ error }) => (error ? 'step-end' : 'step-start')};
	background-color: ${({ theme }) => theme.bg1};
`;

const InputContainer = styled.div`
	flex: 1;
	padding: 1rem;
`;

const Input = styled.input<{ error?: boolean }>`
	font-size: 1.25rem;
	outline: none;
	border: none;
	flex: 1 1 auto;
	width: 0;
	background-color: ${({ theme }) => theme.bg1};
	transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
	color: ${({ error, theme }) => (error ? theme.red1 : theme.primary1)};
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: 500;
	width: 100%;
	::placeholder {
		color: ${({ theme }) => theme.text4};
	}
	padding: 0px;
	-webkit-appearance: textfield;

	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	::placeholder {
		color: ${({ theme }) => theme.text4};
	}
`;

export interface AddressInputPanelProps {
	id?: string;
	// the typed string value
	value: string;
	// triggers whenever the typed value changes
	onChange: (value: string) => void;
}

const AddressInputPanel: React.FC<AddressInputPanelProps> = ({ id, value, onChange }) => {
	const [activeNetwork] = useActiveNetworkVersion();
	const { activeChain } = useActiveWeb3();
	const theme = useContext(ThemeContext);

	const handleInput = useCallback(
		(event) => {
			const input = event.target.value;
			const withoutSpaces = input.replace(/\s+/g, '');
			onChange(withoutSpaces);
		},
		[onChange]
	);

	const error = Boolean(value.length > 0 && !value);

	return (
		<InputPanel id={id}>
			<ContainerRow error={error}>
				<InputContainer>
					<AutoColumn gap="md">
						<RowBetween>
							{/* eslint-disable-next-line react/jsx-pascal-case */}
							<TYPE.black color={theme.text2} fontWeight={500} fontSize={14}>
								Recipient
							</TYPE.black>
							{value && activeChain && activeChain.id && (
								<ExternalLink
									href={getEtherscanLink(activeChain.id as ChainId, value, 'address', activeNetwork)}
									style={{ fontSize: '14px' }}
								>
									(View on Etherscan)
								</ExternalLink>
							)}
						</RowBetween>
						<Input
							className="recipient-address-input"
							type="text"
							autoComplete="off"
							autoCorrect="off"
							autoCapitalize="off"
							spellCheck="false"
							placeholder="Wallet Address or ENS name"
							error={error}
							pattern="^(0x[a-fA-F0-9]{40})$"
							onChange={handleInput}
							value={value}
						/>
					</AutoColumn>
				</InputContainer>
			</ContainerRow>
		</InputPanel>
	);
};

export default AddressInputPanel;
