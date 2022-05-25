import React from 'react';
import styled from 'styled-components';
import { escapeRegExp } from '../../utils';

const StyledInput = styled.input<{ error?: boolean; fontSize?: string; align?: string }>`
	color: ${({ error, theme }) => (error ? theme.red1 : theme.text1)};
	width: 0;
	position: relative;
	font-weight: 500;
	outline: none;
	border: none;
	flex: 1 1 auto;
	background-color: ${({ theme }) => theme.bg1};
	font-size: ${({ fontSize }) => fontSize ?? '24px'};
	text-align: ${({ align }) => align && align};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0px;
	-webkit-appearance: textfield;

	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	[type='number'] {
		-moz-appearance: textfield;
	}

	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	::placeholder {
		color: ${({ theme }) => theme.text4};
	}
`;

export const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`); // match escaped "." characters via in a non-capturing group
// const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

export interface InnerInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'> {
	value: string | number;
	onUserInput: (input: string) => void;
	error?: boolean;
	fontSize?: string;
	align?: 'right' | 'left';
	prependSymbol?: string;
}

export const InnerInput: React.FC<InnerInputProps> = ({ value, onUserInput, placeholder, prependSymbol, ...rest }) => {
	const enforcer = (nextUserInput: string) => {
		if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
			onUserInput(nextUserInput);
		}
	};

	return (
		<StyledInput
			{...rest}
			value={prependSymbol && value ? prependSymbol + value : value}
			onChange={(event) => {
				if (prependSymbol) {
					const { value } = event.target;

					// cut off prepended symbol
					const formattedValue = value.toString().includes(prependSymbol) ? value.toString().slice(1, value.toString().length + 1) : value;

					// replace commas with periods, because uniswap exclusively uses period as the decimal separator
					enforcer(formattedValue.replace(/,/g, '.'));
				} else {
					enforcer(event.target.value.replace(/,/g, '.'));
				}
			}}
			// universal input options
			inputMode="decimal"
			title="Token Amount"
			autoComplete="off"
			autoCorrect="off"
			// text-specific options
			type="text"
			pattern="^[0-9]*[.,]?[0-9]*$"
			placeholder={placeholder || '0.0'}
			minLength={1}
			maxLength={79}
			spellCheck="false"
		/>
	);
};

export const Input = React.memo(InnerInput);

export default Input;
