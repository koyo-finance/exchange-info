import { ERC20Permit, ERC20Permit__factory } from '@elementfi/elf-council-typechain';
import { ContractMethodArgs, useSmartContractReadCalls } from '@elementfi/react-query-typechain';
import { BigNumberish } from 'ethers';
import { getAddress } from 'ethers/lib/utils';
import { QueryObserverResult } from 'react-query';
import { bobaProvider } from '../useProviders';

export default function useMultiTokenAllowance(
	account: string | null | undefined,
	spender: string | null | undefined,
	tokenAddresses: (string | undefined | null)[] = []
): QueryObserverResult<BigNumberish>[] {
	const tokenContracts: (ERC20Permit | undefined)[] = tokenAddresses.map((tokenAddress) =>
		tokenAddress ? ERC20Permit__factory.connect(tokenAddress, bobaProvider) : undefined
	);

	return useSmartContractReadCalls(tokenContracts, 'allowance', {
		callArgs: [account as string, spender as string].map((addr) => (addr ? getAddress(addr) : addr)) as ContractMethodArgs<
			ERC20Permit,
			'allowance'
		>,
		enabled: Boolean(account && spender && tokenContracts.length !== 0 && tokenContracts.every(Boolean))
	});
}
