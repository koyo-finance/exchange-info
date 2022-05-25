import { useActiveWeb3 } from 'hooks/useActiveWeb3';
import Jazzicon from 'jazzicon';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledIdenticonContainer = styled.div`
	height: 1rem;
	width: 1rem;
	border-radius: 1.125rem;
	background-color: ${({ theme }) => theme.bg4};
`;

const Identicon: React.FC = () => {
	const ref = useRef<HTMLDivElement>();

	const { account } = useActiveWeb3();

	useEffect(() => {
		if (account && account.address && ref.current) {
			ref.current.innerHTML = '';
			ref.current.appendChild(Jazzicon(16, parseInt(account.address.slice(2, 10), 16)));
		}
	}, [account]);

	// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
	return <StyledIdenticonContainer ref={ref as any} />;
};

export default Identicon;
