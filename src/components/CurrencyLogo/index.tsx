import { SupportedNetwork } from 'constants/networks';
import useHttpLocations from 'hooks/useHttpLocations';
import React, { useMemo } from 'react';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { useCombinedActiveList } from 'state/lists/hooks';
import styled from 'styled-components';
import { isAddress } from 'utils';
import Logo from '../Logo';

// TODO: Refactor with uni-v3 tokenlist nesting methods
export const getTokenLogoURL = (address: string, networkId: SupportedNetwork) => {
	switch (networkId) {
		case SupportedNetwork.BOBA:
			return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`;
		default:
			return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`;
	}
};

const StyledLogo = styled(Logo)<{ size: string }>`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	border-radius: ${({ size }) => size};
	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
	background-color: ${({ theme }) => theme.white};
	color: ${({ theme }) => theme.text4};
`;

export interface CurrencyLogoProps {
	address?: string;
	size?: string;
	style?: React.CSSProperties;
}

const CurrencyLogo: React.FC<CurrencyLogoProps> = ({ address, size = '24px', style, ...rest }) => {
	const bobaLists = useCombinedActiveList()?.[288];

	const [activeNetwork] = useActiveNetworkVersion();

	const checkSummed = isAddress(address);

	const bobaURI = useMemo(() => {
		if (checkSummed && bobaLists?.[checkSummed]) {
			return bobaLists?.[checkSummed].token.logoURI;
		}
		return undefined;
	}, [checkSummed, bobaLists]);
	const uriLocationsBoba = useHttpLocations(bobaURI);

	// Secondary assets are loaded through Balancer
	const tempSources: { [address: string]: string } = useMemo(() => {
		return {
			[`${address}`]: `https://raw.githubusercontent.com/balancer-labs/assets/refactor-for-multichain/assets/${address}.png`
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const srcs: string[] = useMemo(() => {
		const checkSummed = isAddress(address);

		if (checkSummed && address) {
			const override = tempSources[address];
			return [getTokenLogoURL(checkSummed, activeNetwork.id), ...uriLocationsBoba, override];
		}
		return [];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [address, tempSources, uriLocationsBoba]);

	return <StyledLogo size={size} srcs={srcs} alt={'token logo'} style={style} {...rest} />;
};

export default CurrencyLogo;
