import { BigNumber } from '@ethersproject/bignumber';
import { Percent } from '@uniswap/sdk-core';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const MAX_UINT128 = BigNumber.from(2).pow(128).sub(1);

export const ZERO_PERCENT = new Percent('0');
export const ONE_HUNDRED_PERCENT = new Percent('1');
