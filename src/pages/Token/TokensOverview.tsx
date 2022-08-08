import { DarkGreyCard } from 'components/Card';
import TokenTable from 'components/tokens/TokenTable';
import TopTokenMovers from 'components/tokens/TopTokenMovers';
import { useKoyoTokens } from 'data/koyo/exchange/useTokens';
import React, { useEffect } from 'react';
import { AutoColumn } from '../../components/Column';
import { HideSmall, TYPE } from '../../theme';
import { PageWrapper } from '../styled';

const TokensOverview: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const tokens = useKoyoTokens();

	return (
		<PageWrapper>
			<AutoColumn gap="lg">
				<HideSmall>
					<DarkGreyCard style={{ paddingTop: '12px' }}>
						<AutoColumn gap="md">
							{/* eslint-disable-next-line react/jsx-pascal-case */}
							<TYPE.mediumHeader fontSize="16px">Top Movers</TYPE.mediumHeader>
							<TopTokenMovers tokenDatas={tokens} />
						</AutoColumn>
					</DarkGreyCard>
				</HideSmall>
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<TYPE.main>All Tokens</TYPE.main>
				<TokenTable tokenDatas={tokens} />
			</AutoColumn>
		</PageWrapper>
	);
};

export default TokensOverview;
