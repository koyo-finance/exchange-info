import { ERC20PermitWithMint, ERC20PermitWithMint__factory } from '@elementfi/elf-council-typechain';
import { useSmartContractReadCall } from '@koyofinance/react-query-typechain';
import { BigNumberish } from 'ethers';
import { QueryObserverResult } from 'react-query';
import { bobaProvider } from '../useProviders';

export default function useTokenTotalSupply(tokenAddress: string | null | undefined): QueryObserverResult<BigNumberish> {
	const tokenContract: ERC20PermitWithMint | undefined = tokenAddress
		? ERC20PermitWithMint__factory.connect(tokenAddress, bobaProvider)
		: undefined;

	return useSmartContractReadCall(tokenContract, 'totalSupply()' as 'totalSupply', {
		enabled: Boolean(tokenContract)
	});
}
