import { ChainId } from '@koyofinance/core-sdk';
import MULTICALL_ABI from './abi.json';

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
	[ChainId.ETHEREUM]: '',
	[ChainId.MOONBEAM]: '',
	[ChainId.RINKEBY]: '',
	[ChainId.MOONBASE]: '',
	[ChainId.BOBA]: '0xfff0fAf13fA05B55c996821d4cA9E0541C8fa365',
	[ChainId.BOBABEAM]: '',
	[ChainId.BOBA_RINKEBY]: '',
	[ChainId.BOBABASE]: ''
};

export { MULTICALL_ABI, MULTICALL_NETWORKS };
