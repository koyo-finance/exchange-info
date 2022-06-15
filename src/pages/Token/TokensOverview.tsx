import TokenTable from 'components/tokens/TokenTable';
import { useKoyoTokens } from 'data/koyo/exchange/useTokens';
import React, { useEffect } from 'react';
import { AutoColumn } from '../../components/Column';
import { TYPE } from '../../theme';
import { PageWrapper } from '../styled';

const TokensOverview: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const tokens = useKoyoTokens();

	return (
		<PageWrapper>
			<AutoColumn gap="lg">
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.main>All Tokens</TYPE.main>
				<TokenTable tokenDatas={tokens} />
			</AutoColumn>
		</PageWrapper>
	);
};

export default TokensOverview;
