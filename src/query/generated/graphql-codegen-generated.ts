/* tslint:disable */ /* eslint-disable @typescript-eslint/consistent-type-definitions */
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
	return async (): Promise<TData> => {
		const res = await fetch(endpoint, {
			method: 'POST',
			...requestInit,
			body: JSON.stringify({ query, variables })
		});

		const json = await res.json();

		if (json.errors) {
			const { message } = json.errors[0];

			throw new Error(message);
		}

		return json.data;
	};
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	BigDecimal: string;
	BigInt: string;
	Bytes: string;
	Date: any;
	JSONObject: any;
}

export interface Account {
	__typename: 'Account';
	address: Scalars['Bytes'];
	/**    */
	gaugeWeightVotes?: Maybe<Array<GaugeWeightVote>>;
	/**  Liquidity gauges this account contributed to  */
	gauges?: Maybe<Array<GaugeLiquidity>>;
	id: Scalars['ID'];
	internalBalances?: Maybe<Array<AccountInternalBalance>>;
}

export interface AccountGaugeWeightVotesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWeightVote_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<GaugeWeightVote_Filter>;
}

export interface AccountGaugesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeLiquidity_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<GaugeLiquidity_Filter>;
}

export interface AccountInternalBalancesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<AccountInternalBalance_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AccountInternalBalance_Filter>;
}

export interface AccountInternalBalance {
	__typename: 'AccountInternalBalance';
	account?: Maybe<Account>;
	balance: Scalars['BigDecimal'];
	balanceRaw: Scalars['BigInt'];
	id: Scalars['ID'];
	token: Scalars['Bytes'];
}

export interface AccountInternalBalance_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	account?: InputMaybe<Scalars['String']>;
	account_?: InputMaybe<Account_Filter>;
	account_contains?: InputMaybe<Scalars['String']>;
	account_contains_nocase?: InputMaybe<Scalars['String']>;
	account_ends_with?: InputMaybe<Scalars['String']>;
	account_ends_with_nocase?: InputMaybe<Scalars['String']>;
	account_gt?: InputMaybe<Scalars['String']>;
	account_gte?: InputMaybe<Scalars['String']>;
	account_in?: InputMaybe<Array<Scalars['String']>>;
	account_lt?: InputMaybe<Scalars['String']>;
	account_lte?: InputMaybe<Scalars['String']>;
	account_not?: InputMaybe<Scalars['String']>;
	account_not_contains?: InputMaybe<Scalars['String']>;
	account_not_contains_nocase?: InputMaybe<Scalars['String']>;
	account_not_ends_with?: InputMaybe<Scalars['String']>;
	account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	account_not_in?: InputMaybe<Array<Scalars['String']>>;
	account_not_starts_with?: InputMaybe<Scalars['String']>;
	account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	account_starts_with?: InputMaybe<Scalars['String']>;
	account_starts_with_nocase?: InputMaybe<Scalars['String']>;
	balance?: InputMaybe<Scalars['BigDecimal']>;
	balanceRaw?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_gt?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_gte?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
	balanceRaw_lt?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_lte?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_not?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	balance_gt?: InputMaybe<Scalars['BigDecimal']>;
	balance_gte?: InputMaybe<Scalars['BigDecimal']>;
	balance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	balance_lt?: InputMaybe<Scalars['BigDecimal']>;
	balance_lte?: InputMaybe<Scalars['BigDecimal']>;
	balance_not?: InputMaybe<Scalars['BigDecimal']>;
	balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	token?: InputMaybe<Scalars['Bytes']>;
	token_contains?: InputMaybe<Scalars['Bytes']>;
	token_in?: InputMaybe<Array<Scalars['Bytes']>>;
	token_not?: InputMaybe<Scalars['Bytes']>;
	token_not_contains?: InputMaybe<Scalars['Bytes']>;
	token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
}

export type AccountInternalBalance_OrderBy = 'account' | 'balance' | 'balanceRaw' | 'id' | 'token';

export interface Account_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	address?: InputMaybe<Scalars['Bytes']>;
	address_contains?: InputMaybe<Scalars['Bytes']>;
	address_in?: InputMaybe<Array<Scalars['Bytes']>>;
	address_not?: InputMaybe<Scalars['Bytes']>;
	address_not_contains?: InputMaybe<Scalars['Bytes']>;
	address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	gaugeWeightVotes_?: InputMaybe<GaugeWeightVote_Filter>;
	gauges_?: InputMaybe<GaugeLiquidity_Filter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	internalBalances_?: InputMaybe<AccountInternalBalance_Filter>;
}

export type Account_OrderBy = 'address' | 'gaugeWeightVotes' | 'gauges' | 'id' | 'internalBalances';

export interface AmpUpdate {
	__typename: 'AmpUpdate';
	endAmp: Scalars['BigInt'];
	endTimestamp: Scalars['BigInt'];
	id: Scalars['ID'];
	poolId: Pool;
	scheduledTimestamp: Scalars['Int'];
	startAmp: Scalars['BigInt'];
	startTimestamp: Scalars['BigInt'];
}

export interface AmpUpdate_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	endAmp?: InputMaybe<Scalars['BigInt']>;
	endAmp_gt?: InputMaybe<Scalars['BigInt']>;
	endAmp_gte?: InputMaybe<Scalars['BigInt']>;
	endAmp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	endAmp_lt?: InputMaybe<Scalars['BigInt']>;
	endAmp_lte?: InputMaybe<Scalars['BigInt']>;
	endAmp_not?: InputMaybe<Scalars['BigInt']>;
	endAmp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	endTimestamp?: InputMaybe<Scalars['BigInt']>;
	endTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
	endTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
	endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	endTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
	endTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
	endTimestamp_not?: InputMaybe<Scalars['BigInt']>;
	endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	poolId?: InputMaybe<Scalars['String']>;
	poolId_?: InputMaybe<Pool_Filter>;
	poolId_contains?: InputMaybe<Scalars['String']>;
	poolId_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_ends_with?: InputMaybe<Scalars['String']>;
	poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_gt?: InputMaybe<Scalars['String']>;
	poolId_gte?: InputMaybe<Scalars['String']>;
	poolId_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_lt?: InputMaybe<Scalars['String']>;
	poolId_lte?: InputMaybe<Scalars['String']>;
	poolId_not?: InputMaybe<Scalars['String']>;
	poolId_not_contains?: InputMaybe<Scalars['String']>;
	poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_not_starts_with?: InputMaybe<Scalars['String']>;
	poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_starts_with?: InputMaybe<Scalars['String']>;
	poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
	scheduledTimestamp?: InputMaybe<Scalars['Int']>;
	scheduledTimestamp_gt?: InputMaybe<Scalars['Int']>;
	scheduledTimestamp_gte?: InputMaybe<Scalars['Int']>;
	scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
	scheduledTimestamp_lt?: InputMaybe<Scalars['Int']>;
	scheduledTimestamp_lte?: InputMaybe<Scalars['Int']>;
	scheduledTimestamp_not?: InputMaybe<Scalars['Int']>;
	scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
	startAmp?: InputMaybe<Scalars['BigInt']>;
	startAmp_gt?: InputMaybe<Scalars['BigInt']>;
	startAmp_gte?: InputMaybe<Scalars['BigInt']>;
	startAmp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	startAmp_lt?: InputMaybe<Scalars['BigInt']>;
	startAmp_lte?: InputMaybe<Scalars['BigInt']>;
	startAmp_not?: InputMaybe<Scalars['BigInt']>;
	startAmp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	startTimestamp?: InputMaybe<Scalars['BigInt']>;
	startTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
	startTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
	startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	startTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
	startTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
	startTimestamp_not?: InputMaybe<Scalars['BigInt']>;
	startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
}

export type AmpUpdate_OrderBy = 'endAmp' | 'endTimestamp' | 'id' | 'poolId' | 'scheduledTimestamp' | 'startAmp' | 'startTimestamp';

export interface Block {
	__typename: 'Block';
	author?: Maybe<Scalars['String']>;
	difficulty?: Maybe<Scalars['BigInt']>;
	gasLimit?: Maybe<Scalars['BigInt']>;
	gasUsed?: Maybe<Scalars['BigInt']>;
	hash: Scalars['Bytes'];
	id: Scalars['ID'];
	number: Scalars['BigInt'];
	parentHash?: Maybe<Scalars['String']>;
	receiptsRoot?: Maybe<Scalars['String']>;
	size?: Maybe<Scalars['BigInt']>;
	stateRoot?: Maybe<Scalars['String']>;
	timestamp: Scalars['BigInt'];
	totalDifficulty?: Maybe<Scalars['BigInt']>;
	transactionsRoot?: Maybe<Scalars['String']>;
	unclesHash?: Maybe<Scalars['String']>;
}

export interface BlockChangedFilter {
	number_gte: Scalars['Int'];
}

export interface BlockInput {
	hash: Scalars['Bytes'];
	number: Scalars['BigInt'];
}

export interface Block_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	author?: InputMaybe<Scalars['String']>;
	author_contains?: InputMaybe<Scalars['String']>;
	author_contains_nocase?: InputMaybe<Scalars['String']>;
	author_ends_with?: InputMaybe<Scalars['String']>;
	author_ends_with_nocase?: InputMaybe<Scalars['String']>;
	author_gt?: InputMaybe<Scalars['String']>;
	author_gte?: InputMaybe<Scalars['String']>;
	author_in?: InputMaybe<Array<Scalars['String']>>;
	author_lt?: InputMaybe<Scalars['String']>;
	author_lte?: InputMaybe<Scalars['String']>;
	author_not?: InputMaybe<Scalars['String']>;
	author_not_contains?: InputMaybe<Scalars['String']>;
	author_not_contains_nocase?: InputMaybe<Scalars['String']>;
	author_not_ends_with?: InputMaybe<Scalars['String']>;
	author_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	author_not_in?: InputMaybe<Array<Scalars['String']>>;
	author_not_starts_with?: InputMaybe<Scalars['String']>;
	author_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	author_starts_with?: InputMaybe<Scalars['String']>;
	author_starts_with_nocase?: InputMaybe<Scalars['String']>;
	difficulty?: InputMaybe<Scalars['BigInt']>;
	difficulty_gt?: InputMaybe<Scalars['BigInt']>;
	difficulty_gte?: InputMaybe<Scalars['BigInt']>;
	difficulty_in?: InputMaybe<Array<Scalars['BigInt']>>;
	difficulty_lt?: InputMaybe<Scalars['BigInt']>;
	difficulty_lte?: InputMaybe<Scalars['BigInt']>;
	difficulty_not?: InputMaybe<Scalars['BigInt']>;
	difficulty_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gasLimit?: InputMaybe<Scalars['BigInt']>;
	gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
	gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
	gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
	gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
	gasLimit_not?: InputMaybe<Scalars['BigInt']>;
	gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gasUsed?: InputMaybe<Scalars['BigInt']>;
	gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
	gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
	gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
	gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
	gasUsed_not?: InputMaybe<Scalars['BigInt']>;
	gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	number?: InputMaybe<Scalars['BigInt']>;
	number_gt?: InputMaybe<Scalars['BigInt']>;
	number_gte?: InputMaybe<Scalars['BigInt']>;
	number_in?: InputMaybe<Array<Scalars['BigInt']>>;
	number_lt?: InputMaybe<Scalars['BigInt']>;
	number_lte?: InputMaybe<Scalars['BigInt']>;
	number_not?: InputMaybe<Scalars['BigInt']>;
	number_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	parentHash?: InputMaybe<Scalars['String']>;
	parentHash_contains?: InputMaybe<Scalars['String']>;
	parentHash_contains_nocase?: InputMaybe<Scalars['String']>;
	parentHash_ends_with?: InputMaybe<Scalars['String']>;
	parentHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
	parentHash_gt?: InputMaybe<Scalars['String']>;
	parentHash_gte?: InputMaybe<Scalars['String']>;
	parentHash_in?: InputMaybe<Array<Scalars['String']>>;
	parentHash_lt?: InputMaybe<Scalars['String']>;
	parentHash_lte?: InputMaybe<Scalars['String']>;
	parentHash_not?: InputMaybe<Scalars['String']>;
	parentHash_not_contains?: InputMaybe<Scalars['String']>;
	parentHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
	parentHash_not_ends_with?: InputMaybe<Scalars['String']>;
	parentHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	parentHash_not_in?: InputMaybe<Array<Scalars['String']>>;
	parentHash_not_starts_with?: InputMaybe<Scalars['String']>;
	parentHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	parentHash_starts_with?: InputMaybe<Scalars['String']>;
	parentHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
	receiptsRoot?: InputMaybe<Scalars['String']>;
	receiptsRoot_contains?: InputMaybe<Scalars['String']>;
	receiptsRoot_contains_nocase?: InputMaybe<Scalars['String']>;
	receiptsRoot_ends_with?: InputMaybe<Scalars['String']>;
	receiptsRoot_ends_with_nocase?: InputMaybe<Scalars['String']>;
	receiptsRoot_gt?: InputMaybe<Scalars['String']>;
	receiptsRoot_gte?: InputMaybe<Scalars['String']>;
	receiptsRoot_in?: InputMaybe<Array<Scalars['String']>>;
	receiptsRoot_lt?: InputMaybe<Scalars['String']>;
	receiptsRoot_lte?: InputMaybe<Scalars['String']>;
	receiptsRoot_not?: InputMaybe<Scalars['String']>;
	receiptsRoot_not_contains?: InputMaybe<Scalars['String']>;
	receiptsRoot_not_contains_nocase?: InputMaybe<Scalars['String']>;
	receiptsRoot_not_ends_with?: InputMaybe<Scalars['String']>;
	receiptsRoot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	receiptsRoot_not_in?: InputMaybe<Array<Scalars['String']>>;
	receiptsRoot_not_starts_with?: InputMaybe<Scalars['String']>;
	receiptsRoot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	receiptsRoot_starts_with?: InputMaybe<Scalars['String']>;
	receiptsRoot_starts_with_nocase?: InputMaybe<Scalars['String']>;
	size?: InputMaybe<Scalars['BigInt']>;
	size_gt?: InputMaybe<Scalars['BigInt']>;
	size_gte?: InputMaybe<Scalars['BigInt']>;
	size_in?: InputMaybe<Array<Scalars['BigInt']>>;
	size_lt?: InputMaybe<Scalars['BigInt']>;
	size_lte?: InputMaybe<Scalars['BigInt']>;
	size_not?: InputMaybe<Scalars['BigInt']>;
	size_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	stateRoot?: InputMaybe<Scalars['String']>;
	stateRoot_contains?: InputMaybe<Scalars['String']>;
	stateRoot_contains_nocase?: InputMaybe<Scalars['String']>;
	stateRoot_ends_with?: InputMaybe<Scalars['String']>;
	stateRoot_ends_with_nocase?: InputMaybe<Scalars['String']>;
	stateRoot_gt?: InputMaybe<Scalars['String']>;
	stateRoot_gte?: InputMaybe<Scalars['String']>;
	stateRoot_in?: InputMaybe<Array<Scalars['String']>>;
	stateRoot_lt?: InputMaybe<Scalars['String']>;
	stateRoot_lte?: InputMaybe<Scalars['String']>;
	stateRoot_not?: InputMaybe<Scalars['String']>;
	stateRoot_not_contains?: InputMaybe<Scalars['String']>;
	stateRoot_not_contains_nocase?: InputMaybe<Scalars['String']>;
	stateRoot_not_ends_with?: InputMaybe<Scalars['String']>;
	stateRoot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	stateRoot_not_in?: InputMaybe<Array<Scalars['String']>>;
	stateRoot_not_starts_with?: InputMaybe<Scalars['String']>;
	stateRoot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	stateRoot_starts_with?: InputMaybe<Scalars['String']>;
	stateRoot_starts_with_nocase?: InputMaybe<Scalars['String']>;
	timestamp?: InputMaybe<Scalars['BigInt']>;
	timestamp_gt?: InputMaybe<Scalars['BigInt']>;
	timestamp_gte?: InputMaybe<Scalars['BigInt']>;
	timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	timestamp_lt?: InputMaybe<Scalars['BigInt']>;
	timestamp_lte?: InputMaybe<Scalars['BigInt']>;
	timestamp_not?: InputMaybe<Scalars['BigInt']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalDifficulty?: InputMaybe<Scalars['BigInt']>;
	totalDifficulty_gt?: InputMaybe<Scalars['BigInt']>;
	totalDifficulty_gte?: InputMaybe<Scalars['BigInt']>;
	totalDifficulty_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalDifficulty_lt?: InputMaybe<Scalars['BigInt']>;
	totalDifficulty_lte?: InputMaybe<Scalars['BigInt']>;
	totalDifficulty_not?: InputMaybe<Scalars['BigInt']>;
	totalDifficulty_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	transactionsRoot?: InputMaybe<Scalars['String']>;
	transactionsRoot_contains?: InputMaybe<Scalars['String']>;
	transactionsRoot_contains_nocase?: InputMaybe<Scalars['String']>;
	transactionsRoot_ends_with?: InputMaybe<Scalars['String']>;
	transactionsRoot_ends_with_nocase?: InputMaybe<Scalars['String']>;
	transactionsRoot_gt?: InputMaybe<Scalars['String']>;
	transactionsRoot_gte?: InputMaybe<Scalars['String']>;
	transactionsRoot_in?: InputMaybe<Array<Scalars['String']>>;
	transactionsRoot_lt?: InputMaybe<Scalars['String']>;
	transactionsRoot_lte?: InputMaybe<Scalars['String']>;
	transactionsRoot_not?: InputMaybe<Scalars['String']>;
	transactionsRoot_not_contains?: InputMaybe<Scalars['String']>;
	transactionsRoot_not_contains_nocase?: InputMaybe<Scalars['String']>;
	transactionsRoot_not_ends_with?: InputMaybe<Scalars['String']>;
	transactionsRoot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	transactionsRoot_not_in?: InputMaybe<Array<Scalars['String']>>;
	transactionsRoot_not_starts_with?: InputMaybe<Scalars['String']>;
	transactionsRoot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	transactionsRoot_starts_with?: InputMaybe<Scalars['String']>;
	transactionsRoot_starts_with_nocase?: InputMaybe<Scalars['String']>;
	unclesHash?: InputMaybe<Scalars['String']>;
	unclesHash_contains?: InputMaybe<Scalars['String']>;
	unclesHash_contains_nocase?: InputMaybe<Scalars['String']>;
	unclesHash_ends_with?: InputMaybe<Scalars['String']>;
	unclesHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
	unclesHash_gt?: InputMaybe<Scalars['String']>;
	unclesHash_gte?: InputMaybe<Scalars['String']>;
	unclesHash_in?: InputMaybe<Array<Scalars['String']>>;
	unclesHash_lt?: InputMaybe<Scalars['String']>;
	unclesHash_lte?: InputMaybe<Scalars['String']>;
	unclesHash_not?: InputMaybe<Scalars['String']>;
	unclesHash_not_contains?: InputMaybe<Scalars['String']>;
	unclesHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
	unclesHash_not_ends_with?: InputMaybe<Scalars['String']>;
	unclesHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	unclesHash_not_in?: InputMaybe<Array<Scalars['String']>>;
	unclesHash_not_starts_with?: InputMaybe<Scalars['String']>;
	unclesHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	unclesHash_starts_with?: InputMaybe<Scalars['String']>;
	unclesHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export interface Block_Height {
	hash?: InputMaybe<Scalars['Bytes']>;
	number?: InputMaybe<Scalars['Int']>;
	number_gte?: InputMaybe<Scalars['Int']>;
}

export type Block_OrderBy =
	| 'author'
	| 'difficulty'
	| 'gasLimit'
	| 'gasUsed'
	| 'id'
	| 'number'
	| 'parentHash'
	| 'receiptsRoot'
	| 'size'
	| 'stateRoot'
	| 'timestamp'
	| 'totalDifficulty'
	| 'transactionsRoot'
	| 'unclesHash';

export interface CachedEthereumCall {
	__typename: 'CachedEthereumCall';
	block: Block;
	contractAddress: Scalars['Bytes'];
	idHash: Scalars['Bytes'];
	returnValue: Scalars['Bytes'];
}

export interface ChainIndexingStatus {
	chainHeadBlock?: Maybe<Block>;
	earliestBlock?: Maybe<EarliestBlock>;
	lastHealthyBlock?: Maybe<Block>;
	latestBlock?: Maybe<Block>;
	network: Scalars['String'];
}

export interface EarliestBlock {
	__typename: 'EarliestBlock';
	hash: Scalars['Bytes'];
	number: Scalars['BigInt'];
}

export interface EntityChanges {
	__typename: 'EntityChanges';
	deletions: Array<EntityTypeDeletions>;
	updates: Array<EntityTypeUpdates>;
}

export interface EntityTypeDeletions {
	__typename: 'EntityTypeDeletions';
	entities: Array<Scalars['ID']>;
	type: Scalars['String'];
}

export interface EntityTypeUpdates {
	__typename: 'EntityTypeUpdates';
	entities: Array<Scalars['JSONObject']>;
	type: Scalars['String'];
}

export interface EthereumIndexingStatus extends ChainIndexingStatus {
	__typename: 'EthereumIndexingStatus';
	chainHeadBlock?: Maybe<Block>;
	earliestBlock?: Maybe<EarliestBlock>;
	lastHealthyBlock?: Maybe<Block>;
	latestBlock?: Maybe<Block>;
	network: Scalars['String'];
}

export type Feature = 'fullTextSearch' | 'grafting' | 'ipfsOnEthereumContracts' | 'nonFatalErrors';

export interface Gauge {
	__typename: 'Gauge';
	address: Scalars['Bytes'];
	created: Scalars['BigInt'];
	createdAtBlock: Scalars['BigInt'];
	createdAtTransaction: Scalars['Bytes'];
	id: Scalars['ID'];
	killed: Scalars['Boolean'];
	koyo: Koyo;
	name: Scalars['String'];
	pool?: Maybe<Pool>;
	symbol: Scalars['String'];
	type: GaugeType;
	weightVotes?: Maybe<Array<GaugeWeightVote>>;
	weights?: Maybe<Array<GaugeWeight>>;
}

export interface GaugeWeightVotesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWeightVote_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<GaugeWeightVote_Filter>;
}

export interface GaugeWeightsArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWeight_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<GaugeWeight_Filter>;
}

export interface GaugeDeposit {
	__typename: 'GaugeDeposit';
	gauge: Gauge;
	id: Scalars['ID'];
	provider: Account;
	value: Scalars['BigDecimal'];
}

export interface GaugeDeposit_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	gauge?: InputMaybe<Scalars['String']>;
	gauge_?: InputMaybe<Gauge_Filter>;
	gauge_contains?: InputMaybe<Scalars['String']>;
	gauge_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_ends_with?: InputMaybe<Scalars['String']>;
	gauge_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_gt?: InputMaybe<Scalars['String']>;
	gauge_gte?: InputMaybe<Scalars['String']>;
	gauge_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_lt?: InputMaybe<Scalars['String']>;
	gauge_lte?: InputMaybe<Scalars['String']>;
	gauge_not?: InputMaybe<Scalars['String']>;
	gauge_not_contains?: InputMaybe<Scalars['String']>;
	gauge_not_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_not_starts_with?: InputMaybe<Scalars['String']>;
	gauge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_starts_with?: InputMaybe<Scalars['String']>;
	gauge_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	provider?: InputMaybe<Scalars['String']>;
	provider_?: InputMaybe<Account_Filter>;
	provider_contains?: InputMaybe<Scalars['String']>;
	provider_contains_nocase?: InputMaybe<Scalars['String']>;
	provider_ends_with?: InputMaybe<Scalars['String']>;
	provider_ends_with_nocase?: InputMaybe<Scalars['String']>;
	provider_gt?: InputMaybe<Scalars['String']>;
	provider_gte?: InputMaybe<Scalars['String']>;
	provider_in?: InputMaybe<Array<Scalars['String']>>;
	provider_lt?: InputMaybe<Scalars['String']>;
	provider_lte?: InputMaybe<Scalars['String']>;
	provider_not?: InputMaybe<Scalars['String']>;
	provider_not_contains?: InputMaybe<Scalars['String']>;
	provider_not_contains_nocase?: InputMaybe<Scalars['String']>;
	provider_not_ends_with?: InputMaybe<Scalars['String']>;
	provider_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	provider_not_in?: InputMaybe<Array<Scalars['String']>>;
	provider_not_starts_with?: InputMaybe<Scalars['String']>;
	provider_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	provider_starts_with?: InputMaybe<Scalars['String']>;
	provider_starts_with_nocase?: InputMaybe<Scalars['String']>;
	value?: InputMaybe<Scalars['BigDecimal']>;
	value_gt?: InputMaybe<Scalars['BigDecimal']>;
	value_gte?: InputMaybe<Scalars['BigDecimal']>;
	value_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	value_lt?: InputMaybe<Scalars['BigDecimal']>;
	value_lte?: InputMaybe<Scalars['BigDecimal']>;
	value_not?: InputMaybe<Scalars['BigDecimal']>;
	value_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type GaugeDeposit_OrderBy = 'gauge' | 'id' | 'provider' | 'value';

export interface GaugeLiquidity {
	__typename: 'GaugeLiquidity';
	block: Scalars['BigInt'];
	gauge: Gauge;
	id: Scalars['ID'];
	originalBalance: Scalars['BigInt'];
	originalSupply: Scalars['BigInt'];
	timestamp: Scalars['BigInt'];
	transaction: Scalars['Bytes'];
	user: Account;
	workingBalance: Scalars['BigInt'];
	workingSupply: Scalars['BigInt'];
}

export interface GaugeLiquidity_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	block?: InputMaybe<Scalars['BigInt']>;
	block_gt?: InputMaybe<Scalars['BigInt']>;
	block_gte?: InputMaybe<Scalars['BigInt']>;
	block_in?: InputMaybe<Array<Scalars['BigInt']>>;
	block_lt?: InputMaybe<Scalars['BigInt']>;
	block_lte?: InputMaybe<Scalars['BigInt']>;
	block_not?: InputMaybe<Scalars['BigInt']>;
	block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gauge?: InputMaybe<Scalars['String']>;
	gauge_?: InputMaybe<Gauge_Filter>;
	gauge_contains?: InputMaybe<Scalars['String']>;
	gauge_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_ends_with?: InputMaybe<Scalars['String']>;
	gauge_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_gt?: InputMaybe<Scalars['String']>;
	gauge_gte?: InputMaybe<Scalars['String']>;
	gauge_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_lt?: InputMaybe<Scalars['String']>;
	gauge_lte?: InputMaybe<Scalars['String']>;
	gauge_not?: InputMaybe<Scalars['String']>;
	gauge_not_contains?: InputMaybe<Scalars['String']>;
	gauge_not_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_not_starts_with?: InputMaybe<Scalars['String']>;
	gauge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_starts_with?: InputMaybe<Scalars['String']>;
	gauge_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	originalBalance?: InputMaybe<Scalars['BigInt']>;
	originalBalance_gt?: InputMaybe<Scalars['BigInt']>;
	originalBalance_gte?: InputMaybe<Scalars['BigInt']>;
	originalBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
	originalBalance_lt?: InputMaybe<Scalars['BigInt']>;
	originalBalance_lte?: InputMaybe<Scalars['BigInt']>;
	originalBalance_not?: InputMaybe<Scalars['BigInt']>;
	originalBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	originalSupply?: InputMaybe<Scalars['BigInt']>;
	originalSupply_gt?: InputMaybe<Scalars['BigInt']>;
	originalSupply_gte?: InputMaybe<Scalars['BigInt']>;
	originalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
	originalSupply_lt?: InputMaybe<Scalars['BigInt']>;
	originalSupply_lte?: InputMaybe<Scalars['BigInt']>;
	originalSupply_not?: InputMaybe<Scalars['BigInt']>;
	originalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	timestamp?: InputMaybe<Scalars['BigInt']>;
	timestamp_gt?: InputMaybe<Scalars['BigInt']>;
	timestamp_gte?: InputMaybe<Scalars['BigInt']>;
	timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	timestamp_lt?: InputMaybe<Scalars['BigInt']>;
	timestamp_lte?: InputMaybe<Scalars['BigInt']>;
	timestamp_not?: InputMaybe<Scalars['BigInt']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	transaction?: InputMaybe<Scalars['Bytes']>;
	transaction_contains?: InputMaybe<Scalars['Bytes']>;
	transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
	transaction_not?: InputMaybe<Scalars['Bytes']>;
	transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
	transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	user?: InputMaybe<Scalars['String']>;
	user_?: InputMaybe<Account_Filter>;
	user_contains?: InputMaybe<Scalars['String']>;
	user_contains_nocase?: InputMaybe<Scalars['String']>;
	user_ends_with?: InputMaybe<Scalars['String']>;
	user_ends_with_nocase?: InputMaybe<Scalars['String']>;
	user_gt?: InputMaybe<Scalars['String']>;
	user_gte?: InputMaybe<Scalars['String']>;
	user_in?: InputMaybe<Array<Scalars['String']>>;
	user_lt?: InputMaybe<Scalars['String']>;
	user_lte?: InputMaybe<Scalars['String']>;
	user_not?: InputMaybe<Scalars['String']>;
	user_not_contains?: InputMaybe<Scalars['String']>;
	user_not_contains_nocase?: InputMaybe<Scalars['String']>;
	user_not_ends_with?: InputMaybe<Scalars['String']>;
	user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	user_not_in?: InputMaybe<Array<Scalars['String']>>;
	user_not_starts_with?: InputMaybe<Scalars['String']>;
	user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	user_starts_with?: InputMaybe<Scalars['String']>;
	user_starts_with_nocase?: InputMaybe<Scalars['String']>;
	workingBalance?: InputMaybe<Scalars['BigInt']>;
	workingBalance_gt?: InputMaybe<Scalars['BigInt']>;
	workingBalance_gte?: InputMaybe<Scalars['BigInt']>;
	workingBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
	workingBalance_lt?: InputMaybe<Scalars['BigInt']>;
	workingBalance_lte?: InputMaybe<Scalars['BigInt']>;
	workingBalance_not?: InputMaybe<Scalars['BigInt']>;
	workingBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	workingSupply?: InputMaybe<Scalars['BigInt']>;
	workingSupply_gt?: InputMaybe<Scalars['BigInt']>;
	workingSupply_gte?: InputMaybe<Scalars['BigInt']>;
	workingSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
	workingSupply_lt?: InputMaybe<Scalars['BigInt']>;
	workingSupply_lte?: InputMaybe<Scalars['BigInt']>;
	workingSupply_not?: InputMaybe<Scalars['BigInt']>;
	workingSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
}

export type GaugeLiquidity_OrderBy =
	| 'block'
	| 'gauge'
	| 'id'
	| 'originalBalance'
	| 'originalSupply'
	| 'timestamp'
	| 'transaction'
	| 'user'
	| 'workingBalance'
	| 'workingSupply';

export interface GaugeTotalWeight {
	__typename: 'GaugeTotalWeight';
	id: Scalars['ID'];
	time: Scalars['BigInt'];
	weight: Scalars['BigDecimal'];
}

export interface GaugeTotalWeight_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	time?: InputMaybe<Scalars['BigInt']>;
	time_gt?: InputMaybe<Scalars['BigInt']>;
	time_gte?: InputMaybe<Scalars['BigInt']>;
	time_in?: InputMaybe<Array<Scalars['BigInt']>>;
	time_lt?: InputMaybe<Scalars['BigInt']>;
	time_lte?: InputMaybe<Scalars['BigInt']>;
	time_not?: InputMaybe<Scalars['BigInt']>;
	time_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	weight?: InputMaybe<Scalars['BigDecimal']>;
	weight_gt?: InputMaybe<Scalars['BigDecimal']>;
	weight_gte?: InputMaybe<Scalars['BigDecimal']>;
	weight_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	weight_lt?: InputMaybe<Scalars['BigDecimal']>;
	weight_lte?: InputMaybe<Scalars['BigDecimal']>;
	weight_not?: InputMaybe<Scalars['BigDecimal']>;
	weight_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type GaugeTotalWeight_OrderBy = 'id' | 'time' | 'weight';

export interface GaugeType {
	__typename: 'GaugeType';
	gaugeCount: Scalars['BigInt'];
	gauges?: Maybe<Array<Gauge>>;
	id: Scalars['ID'];
	name: Scalars['String'];
	weights?: Maybe<Array<GaugeTypeWeight>>;
}

export interface GaugeTypeGaugesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Gauge_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<Gauge_Filter>;
}

export interface GaugeTypeWeightsArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeTypeWeight_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<GaugeTypeWeight_Filter>;
}

export interface GaugeTypeWeight {
	__typename: 'GaugeTypeWeight';
	id: Scalars['ID'];
	time: Scalars['BigInt'];
	type: GaugeType;
	weight: Scalars['BigDecimal'];
}

export interface GaugeTypeWeight_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	time?: InputMaybe<Scalars['BigInt']>;
	time_gt?: InputMaybe<Scalars['BigInt']>;
	time_gte?: InputMaybe<Scalars['BigInt']>;
	time_in?: InputMaybe<Array<Scalars['BigInt']>>;
	time_lt?: InputMaybe<Scalars['BigInt']>;
	time_lte?: InputMaybe<Scalars['BigInt']>;
	time_not?: InputMaybe<Scalars['BigInt']>;
	time_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	type?: InputMaybe<Scalars['String']>;
	type_?: InputMaybe<GaugeType_Filter>;
	type_contains?: InputMaybe<Scalars['String']>;
	type_contains_nocase?: InputMaybe<Scalars['String']>;
	type_ends_with?: InputMaybe<Scalars['String']>;
	type_ends_with_nocase?: InputMaybe<Scalars['String']>;
	type_gt?: InputMaybe<Scalars['String']>;
	type_gte?: InputMaybe<Scalars['String']>;
	type_in?: InputMaybe<Array<Scalars['String']>>;
	type_lt?: InputMaybe<Scalars['String']>;
	type_lte?: InputMaybe<Scalars['String']>;
	type_not?: InputMaybe<Scalars['String']>;
	type_not_contains?: InputMaybe<Scalars['String']>;
	type_not_contains_nocase?: InputMaybe<Scalars['String']>;
	type_not_ends_with?: InputMaybe<Scalars['String']>;
	type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	type_not_in?: InputMaybe<Array<Scalars['String']>>;
	type_not_starts_with?: InputMaybe<Scalars['String']>;
	type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	type_starts_with?: InputMaybe<Scalars['String']>;
	type_starts_with_nocase?: InputMaybe<Scalars['String']>;
	weight?: InputMaybe<Scalars['BigDecimal']>;
	weight_gt?: InputMaybe<Scalars['BigDecimal']>;
	weight_gte?: InputMaybe<Scalars['BigDecimal']>;
	weight_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	weight_lt?: InputMaybe<Scalars['BigDecimal']>;
	weight_lte?: InputMaybe<Scalars['BigDecimal']>;
	weight_not?: InputMaybe<Scalars['BigDecimal']>;
	weight_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type GaugeTypeWeight_OrderBy = 'id' | 'time' | 'type' | 'weight';

export interface GaugeType_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	gaugeCount?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_gt?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_gte?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gaugeCount_lt?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_lte?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_not?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gauges_?: InputMaybe<Gauge_Filter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	name?: InputMaybe<Scalars['String']>;
	name_contains?: InputMaybe<Scalars['String']>;
	name_contains_nocase?: InputMaybe<Scalars['String']>;
	name_ends_with?: InputMaybe<Scalars['String']>;
	name_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_gt?: InputMaybe<Scalars['String']>;
	name_gte?: InputMaybe<Scalars['String']>;
	name_in?: InputMaybe<Array<Scalars['String']>>;
	name_lt?: InputMaybe<Scalars['String']>;
	name_lte?: InputMaybe<Scalars['String']>;
	name_not?: InputMaybe<Scalars['String']>;
	name_not_contains?: InputMaybe<Scalars['String']>;
	name_not_contains_nocase?: InputMaybe<Scalars['String']>;
	name_not_ends_with?: InputMaybe<Scalars['String']>;
	name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_not_in?: InputMaybe<Array<Scalars['String']>>;
	name_not_starts_with?: InputMaybe<Scalars['String']>;
	name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	name_starts_with?: InputMaybe<Scalars['String']>;
	name_starts_with_nocase?: InputMaybe<Scalars['String']>;
	weights_?: InputMaybe<GaugeTypeWeight_Filter>;
}

export type GaugeType_OrderBy = 'gaugeCount' | 'gauges' | 'id' | 'name' | 'weights';

export interface GaugeWeight {
	__typename: 'GaugeWeight';
	gauge: Gauge;
	id: Scalars['ID'];
	time: Scalars['BigInt'];
	weight: Scalars['BigDecimal'];
}

export interface GaugeWeightVote {
	__typename: 'GaugeWeightVote';
	gauge: Gauge;
	id: Scalars['ID'];
	time: Scalars['BigInt'];
	user: Account;
	weight: Scalars['BigDecimal'];
}

export interface GaugeWeightVote_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	gauge?: InputMaybe<Scalars['String']>;
	gauge_?: InputMaybe<Gauge_Filter>;
	gauge_contains?: InputMaybe<Scalars['String']>;
	gauge_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_ends_with?: InputMaybe<Scalars['String']>;
	gauge_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_gt?: InputMaybe<Scalars['String']>;
	gauge_gte?: InputMaybe<Scalars['String']>;
	gauge_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_lt?: InputMaybe<Scalars['String']>;
	gauge_lte?: InputMaybe<Scalars['String']>;
	gauge_not?: InputMaybe<Scalars['String']>;
	gauge_not_contains?: InputMaybe<Scalars['String']>;
	gauge_not_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_not_starts_with?: InputMaybe<Scalars['String']>;
	gauge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_starts_with?: InputMaybe<Scalars['String']>;
	gauge_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	time?: InputMaybe<Scalars['BigInt']>;
	time_gt?: InputMaybe<Scalars['BigInt']>;
	time_gte?: InputMaybe<Scalars['BigInt']>;
	time_in?: InputMaybe<Array<Scalars['BigInt']>>;
	time_lt?: InputMaybe<Scalars['BigInt']>;
	time_lte?: InputMaybe<Scalars['BigInt']>;
	time_not?: InputMaybe<Scalars['BigInt']>;
	time_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	user?: InputMaybe<Scalars['String']>;
	user_?: InputMaybe<Account_Filter>;
	user_contains?: InputMaybe<Scalars['String']>;
	user_contains_nocase?: InputMaybe<Scalars['String']>;
	user_ends_with?: InputMaybe<Scalars['String']>;
	user_ends_with_nocase?: InputMaybe<Scalars['String']>;
	user_gt?: InputMaybe<Scalars['String']>;
	user_gte?: InputMaybe<Scalars['String']>;
	user_in?: InputMaybe<Array<Scalars['String']>>;
	user_lt?: InputMaybe<Scalars['String']>;
	user_lte?: InputMaybe<Scalars['String']>;
	user_not?: InputMaybe<Scalars['String']>;
	user_not_contains?: InputMaybe<Scalars['String']>;
	user_not_contains_nocase?: InputMaybe<Scalars['String']>;
	user_not_ends_with?: InputMaybe<Scalars['String']>;
	user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	user_not_in?: InputMaybe<Array<Scalars['String']>>;
	user_not_starts_with?: InputMaybe<Scalars['String']>;
	user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	user_starts_with?: InputMaybe<Scalars['String']>;
	user_starts_with_nocase?: InputMaybe<Scalars['String']>;
	weight?: InputMaybe<Scalars['BigDecimal']>;
	weight_gt?: InputMaybe<Scalars['BigDecimal']>;
	weight_gte?: InputMaybe<Scalars['BigDecimal']>;
	weight_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	weight_lt?: InputMaybe<Scalars['BigDecimal']>;
	weight_lte?: InputMaybe<Scalars['BigDecimal']>;
	weight_not?: InputMaybe<Scalars['BigDecimal']>;
	weight_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type GaugeWeightVote_OrderBy = 'gauge' | 'id' | 'time' | 'user' | 'weight';

export interface GaugeWeight_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	gauge?: InputMaybe<Scalars['String']>;
	gauge_?: InputMaybe<Gauge_Filter>;
	gauge_contains?: InputMaybe<Scalars['String']>;
	gauge_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_ends_with?: InputMaybe<Scalars['String']>;
	gauge_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_gt?: InputMaybe<Scalars['String']>;
	gauge_gte?: InputMaybe<Scalars['String']>;
	gauge_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_lt?: InputMaybe<Scalars['String']>;
	gauge_lte?: InputMaybe<Scalars['String']>;
	gauge_not?: InputMaybe<Scalars['String']>;
	gauge_not_contains?: InputMaybe<Scalars['String']>;
	gauge_not_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_not_starts_with?: InputMaybe<Scalars['String']>;
	gauge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_starts_with?: InputMaybe<Scalars['String']>;
	gauge_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	time?: InputMaybe<Scalars['BigInt']>;
	time_gt?: InputMaybe<Scalars['BigInt']>;
	time_gte?: InputMaybe<Scalars['BigInt']>;
	time_in?: InputMaybe<Array<Scalars['BigInt']>>;
	time_lt?: InputMaybe<Scalars['BigInt']>;
	time_lte?: InputMaybe<Scalars['BigInt']>;
	time_not?: InputMaybe<Scalars['BigInt']>;
	time_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	weight?: InputMaybe<Scalars['BigDecimal']>;
	weight_gt?: InputMaybe<Scalars['BigDecimal']>;
	weight_gte?: InputMaybe<Scalars['BigDecimal']>;
	weight_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	weight_lt?: InputMaybe<Scalars['BigDecimal']>;
	weight_lte?: InputMaybe<Scalars['BigDecimal']>;
	weight_not?: InputMaybe<Scalars['BigDecimal']>;
	weight_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type GaugeWeight_OrderBy = 'gauge' | 'id' | 'time' | 'weight';

export interface GaugeWithdraw {
	__typename: 'GaugeWithdraw';
	gauge: Gauge;
	id: Scalars['ID'];
	provider: Account;
	value: Scalars['BigDecimal'];
}

export interface GaugeWithdraw_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	gauge?: InputMaybe<Scalars['String']>;
	gauge_?: InputMaybe<Gauge_Filter>;
	gauge_contains?: InputMaybe<Scalars['String']>;
	gauge_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_ends_with?: InputMaybe<Scalars['String']>;
	gauge_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_gt?: InputMaybe<Scalars['String']>;
	gauge_gte?: InputMaybe<Scalars['String']>;
	gauge_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_lt?: InputMaybe<Scalars['String']>;
	gauge_lte?: InputMaybe<Scalars['String']>;
	gauge_not?: InputMaybe<Scalars['String']>;
	gauge_not_contains?: InputMaybe<Scalars['String']>;
	gauge_not_contains_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with?: InputMaybe<Scalars['String']>;
	gauge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_not_in?: InputMaybe<Array<Scalars['String']>>;
	gauge_not_starts_with?: InputMaybe<Scalars['String']>;
	gauge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	gauge_starts_with?: InputMaybe<Scalars['String']>;
	gauge_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	provider?: InputMaybe<Scalars['String']>;
	provider_?: InputMaybe<Account_Filter>;
	provider_contains?: InputMaybe<Scalars['String']>;
	provider_contains_nocase?: InputMaybe<Scalars['String']>;
	provider_ends_with?: InputMaybe<Scalars['String']>;
	provider_ends_with_nocase?: InputMaybe<Scalars['String']>;
	provider_gt?: InputMaybe<Scalars['String']>;
	provider_gte?: InputMaybe<Scalars['String']>;
	provider_in?: InputMaybe<Array<Scalars['String']>>;
	provider_lt?: InputMaybe<Scalars['String']>;
	provider_lte?: InputMaybe<Scalars['String']>;
	provider_not?: InputMaybe<Scalars['String']>;
	provider_not_contains?: InputMaybe<Scalars['String']>;
	provider_not_contains_nocase?: InputMaybe<Scalars['String']>;
	provider_not_ends_with?: InputMaybe<Scalars['String']>;
	provider_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	provider_not_in?: InputMaybe<Array<Scalars['String']>>;
	provider_not_starts_with?: InputMaybe<Scalars['String']>;
	provider_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	provider_starts_with?: InputMaybe<Scalars['String']>;
	provider_starts_with_nocase?: InputMaybe<Scalars['String']>;
	value?: InputMaybe<Scalars['BigDecimal']>;
	value_gt?: InputMaybe<Scalars['BigDecimal']>;
	value_gte?: InputMaybe<Scalars['BigDecimal']>;
	value_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	value_lt?: InputMaybe<Scalars['BigDecimal']>;
	value_lte?: InputMaybe<Scalars['BigDecimal']>;
	value_not?: InputMaybe<Scalars['BigDecimal']>;
	value_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type GaugeWithdraw_OrderBy = 'gauge' | 'id' | 'provider' | 'value';

export interface Gauge_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	address?: InputMaybe<Scalars['Bytes']>;
	address_contains?: InputMaybe<Scalars['Bytes']>;
	address_in?: InputMaybe<Array<Scalars['Bytes']>>;
	address_not?: InputMaybe<Scalars['Bytes']>;
	address_not_contains?: InputMaybe<Scalars['Bytes']>;
	address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	created?: InputMaybe<Scalars['BigInt']>;
	createdAtBlock?: InputMaybe<Scalars['BigInt']>;
	createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
	createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
	createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
	createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
	createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
	createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
	createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	createdAtTransaction?: InputMaybe<Scalars['Bytes']>;
	createdAtTransaction_contains?: InputMaybe<Scalars['Bytes']>;
	createdAtTransaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
	createdAtTransaction_not?: InputMaybe<Scalars['Bytes']>;
	createdAtTransaction_not_contains?: InputMaybe<Scalars['Bytes']>;
	createdAtTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	created_gt?: InputMaybe<Scalars['BigInt']>;
	created_gte?: InputMaybe<Scalars['BigInt']>;
	created_in?: InputMaybe<Array<Scalars['BigInt']>>;
	created_lt?: InputMaybe<Scalars['BigInt']>;
	created_lte?: InputMaybe<Scalars['BigInt']>;
	created_not?: InputMaybe<Scalars['BigInt']>;
	created_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	killed?: InputMaybe<Scalars['Boolean']>;
	killed_in?: InputMaybe<Array<Scalars['Boolean']>>;
	killed_not?: InputMaybe<Scalars['Boolean']>;
	killed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
	koyo?: InputMaybe<Scalars['String']>;
	koyo_?: InputMaybe<Koyo_Filter>;
	koyo_contains?: InputMaybe<Scalars['String']>;
	koyo_contains_nocase?: InputMaybe<Scalars['String']>;
	koyo_ends_with?: InputMaybe<Scalars['String']>;
	koyo_ends_with_nocase?: InputMaybe<Scalars['String']>;
	koyo_gt?: InputMaybe<Scalars['String']>;
	koyo_gte?: InputMaybe<Scalars['String']>;
	koyo_in?: InputMaybe<Array<Scalars['String']>>;
	koyo_lt?: InputMaybe<Scalars['String']>;
	koyo_lte?: InputMaybe<Scalars['String']>;
	koyo_not?: InputMaybe<Scalars['String']>;
	koyo_not_contains?: InputMaybe<Scalars['String']>;
	koyo_not_contains_nocase?: InputMaybe<Scalars['String']>;
	koyo_not_ends_with?: InputMaybe<Scalars['String']>;
	koyo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	koyo_not_in?: InputMaybe<Array<Scalars['String']>>;
	koyo_not_starts_with?: InputMaybe<Scalars['String']>;
	koyo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	koyo_starts_with?: InputMaybe<Scalars['String']>;
	koyo_starts_with_nocase?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	name_contains?: InputMaybe<Scalars['String']>;
	name_contains_nocase?: InputMaybe<Scalars['String']>;
	name_ends_with?: InputMaybe<Scalars['String']>;
	name_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_gt?: InputMaybe<Scalars['String']>;
	name_gte?: InputMaybe<Scalars['String']>;
	name_in?: InputMaybe<Array<Scalars['String']>>;
	name_lt?: InputMaybe<Scalars['String']>;
	name_lte?: InputMaybe<Scalars['String']>;
	name_not?: InputMaybe<Scalars['String']>;
	name_not_contains?: InputMaybe<Scalars['String']>;
	name_not_contains_nocase?: InputMaybe<Scalars['String']>;
	name_not_ends_with?: InputMaybe<Scalars['String']>;
	name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_not_in?: InputMaybe<Array<Scalars['String']>>;
	name_not_starts_with?: InputMaybe<Scalars['String']>;
	name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	name_starts_with?: InputMaybe<Scalars['String']>;
	name_starts_with_nocase?: InputMaybe<Scalars['String']>;
	pool?: InputMaybe<Scalars['String']>;
	pool_?: InputMaybe<Pool_Filter>;
	pool_contains?: InputMaybe<Scalars['String']>;
	pool_contains_nocase?: InputMaybe<Scalars['String']>;
	pool_ends_with?: InputMaybe<Scalars['String']>;
	pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
	pool_gt?: InputMaybe<Scalars['String']>;
	pool_gte?: InputMaybe<Scalars['String']>;
	pool_in?: InputMaybe<Array<Scalars['String']>>;
	pool_lt?: InputMaybe<Scalars['String']>;
	pool_lte?: InputMaybe<Scalars['String']>;
	pool_not?: InputMaybe<Scalars['String']>;
	pool_not_contains?: InputMaybe<Scalars['String']>;
	pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
	pool_not_ends_with?: InputMaybe<Scalars['String']>;
	pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	pool_not_in?: InputMaybe<Array<Scalars['String']>>;
	pool_not_starts_with?: InputMaybe<Scalars['String']>;
	pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	pool_starts_with?: InputMaybe<Scalars['String']>;
	pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
	symbol?: InputMaybe<Scalars['String']>;
	symbol_contains?: InputMaybe<Scalars['String']>;
	symbol_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_ends_with?: InputMaybe<Scalars['String']>;
	symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_gt?: InputMaybe<Scalars['String']>;
	symbol_gte?: InputMaybe<Scalars['String']>;
	symbol_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_lt?: InputMaybe<Scalars['String']>;
	symbol_lte?: InputMaybe<Scalars['String']>;
	symbol_not?: InputMaybe<Scalars['String']>;
	symbol_not_contains?: InputMaybe<Scalars['String']>;
	symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_not_starts_with?: InputMaybe<Scalars['String']>;
	symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_starts_with?: InputMaybe<Scalars['String']>;
	symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
	type?: InputMaybe<Scalars['String']>;
	type_?: InputMaybe<GaugeType_Filter>;
	type_contains?: InputMaybe<Scalars['String']>;
	type_contains_nocase?: InputMaybe<Scalars['String']>;
	type_ends_with?: InputMaybe<Scalars['String']>;
	type_ends_with_nocase?: InputMaybe<Scalars['String']>;
	type_gt?: InputMaybe<Scalars['String']>;
	type_gte?: InputMaybe<Scalars['String']>;
	type_in?: InputMaybe<Array<Scalars['String']>>;
	type_lt?: InputMaybe<Scalars['String']>;
	type_lte?: InputMaybe<Scalars['String']>;
	type_not?: InputMaybe<Scalars['String']>;
	type_not_contains?: InputMaybe<Scalars['String']>;
	type_not_contains_nocase?: InputMaybe<Scalars['String']>;
	type_not_ends_with?: InputMaybe<Scalars['String']>;
	type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	type_not_in?: InputMaybe<Array<Scalars['String']>>;
	type_not_starts_with?: InputMaybe<Scalars['String']>;
	type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	type_starts_with?: InputMaybe<Scalars['String']>;
	type_starts_with_nocase?: InputMaybe<Scalars['String']>;
	weightVotes_?: InputMaybe<GaugeWeightVote_Filter>;
	weights_?: InputMaybe<GaugeWeight_Filter>;
}

export type Gauge_OrderBy =
	| 'address'
	| 'created'
	| 'createdAtBlock'
	| 'createdAtTransaction'
	| 'id'
	| 'killed'
	| 'koyo'
	| 'name'
	| 'pool'
	| 'symbol'
	| 'type'
	| 'weightVotes'
	| 'weights';

export type Health =
	/** Subgraph halted due to errors */
	| 'failed'
	/** Subgraph syncing normally */
	| 'healthy'
	/** Subgraph syncing but with errors */
	| 'unhealthy';

export type InvestType = 'Exit' | 'Join';

export interface JoinExit {
	__typename: 'JoinExit';
	account: Account;
	amounts: Array<Scalars['BigDecimal']>;
	id: Scalars['ID'];
	pool: Pool;
	sender: Scalars['Bytes'];
	timestamp: Scalars['Int'];
	tx: Scalars['Bytes'];
	type: InvestType;
	valueUSD: Scalars['BigDecimal'];
}

export interface JoinExit_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	account?: InputMaybe<Scalars['String']>;
	account_?: InputMaybe<Account_Filter>;
	account_contains?: InputMaybe<Scalars['String']>;
	account_contains_nocase?: InputMaybe<Scalars['String']>;
	account_ends_with?: InputMaybe<Scalars['String']>;
	account_ends_with_nocase?: InputMaybe<Scalars['String']>;
	account_gt?: InputMaybe<Scalars['String']>;
	account_gte?: InputMaybe<Scalars['String']>;
	account_in?: InputMaybe<Array<Scalars['String']>>;
	account_lt?: InputMaybe<Scalars['String']>;
	account_lte?: InputMaybe<Scalars['String']>;
	account_not?: InputMaybe<Scalars['String']>;
	account_not_contains?: InputMaybe<Scalars['String']>;
	account_not_contains_nocase?: InputMaybe<Scalars['String']>;
	account_not_ends_with?: InputMaybe<Scalars['String']>;
	account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	account_not_in?: InputMaybe<Array<Scalars['String']>>;
	account_not_starts_with?: InputMaybe<Scalars['String']>;
	account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	account_starts_with?: InputMaybe<Scalars['String']>;
	account_starts_with_nocase?: InputMaybe<Scalars['String']>;
	amounts?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	pool?: InputMaybe<Scalars['String']>;
	pool_?: InputMaybe<Pool_Filter>;
	pool_contains?: InputMaybe<Scalars['String']>;
	pool_contains_nocase?: InputMaybe<Scalars['String']>;
	pool_ends_with?: InputMaybe<Scalars['String']>;
	pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
	pool_gt?: InputMaybe<Scalars['String']>;
	pool_gte?: InputMaybe<Scalars['String']>;
	pool_in?: InputMaybe<Array<Scalars['String']>>;
	pool_lt?: InputMaybe<Scalars['String']>;
	pool_lte?: InputMaybe<Scalars['String']>;
	pool_not?: InputMaybe<Scalars['String']>;
	pool_not_contains?: InputMaybe<Scalars['String']>;
	pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
	pool_not_ends_with?: InputMaybe<Scalars['String']>;
	pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	pool_not_in?: InputMaybe<Array<Scalars['String']>>;
	pool_not_starts_with?: InputMaybe<Scalars['String']>;
	pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	pool_starts_with?: InputMaybe<Scalars['String']>;
	pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
	sender?: InputMaybe<Scalars['Bytes']>;
	sender_contains?: InputMaybe<Scalars['Bytes']>;
	sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
	sender_not?: InputMaybe<Scalars['Bytes']>;
	sender_not_contains?: InputMaybe<Scalars['Bytes']>;
	sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	timestamp?: InputMaybe<Scalars['Int']>;
	timestamp_gt?: InputMaybe<Scalars['Int']>;
	timestamp_gte?: InputMaybe<Scalars['Int']>;
	timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
	timestamp_lt?: InputMaybe<Scalars['Int']>;
	timestamp_lte?: InputMaybe<Scalars['Int']>;
	timestamp_not?: InputMaybe<Scalars['Int']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
	tx?: InputMaybe<Scalars['Bytes']>;
	tx_contains?: InputMaybe<Scalars['Bytes']>;
	tx_in?: InputMaybe<Array<Scalars['Bytes']>>;
	tx_not?: InputMaybe<Scalars['Bytes']>;
	tx_not_contains?: InputMaybe<Scalars['Bytes']>;
	tx_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	type?: InputMaybe<InvestType>;
	type_in?: InputMaybe<Array<InvestType>>;
	type_not?: InputMaybe<InvestType>;
	type_not_in?: InputMaybe<Array<InvestType>>;
	valueUSD?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	valueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type JoinExit_OrderBy = 'account' | 'amounts' | 'id' | 'pool' | 'sender' | 'timestamp' | 'tx' | 'type' | 'valueUSD';

export interface Koyo {
	__typename: 'Koyo';
	/**  Address of the Kōyō vault  */
	address: Scalars['Bytes'];
	/**  Number of gauges registered  */
	gaugeCount: Scalars['BigInt'];
	/**  Number of gauge types registered  */
	gaugeTypeCount: Scalars['BigInt'];
	gauges?: Maybe<Array<Gauge>>;
	id: Scalars['ID'];
	/**  Number of pools registered  */
	poolCount: Scalars['Int'];
	/**  List of registered pools  */
	pools?: Maybe<Array<Pool>>;
	totalLiquidity: Scalars['BigDecimal'];
	totalSwapCount: Scalars['BigInt'];
	totalSwapFee: Scalars['BigDecimal'];
	totalSwapVolume: Scalars['BigDecimal'];
}

export interface KoyoGaugesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Gauge_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<Gauge_Filter>;
}

export interface KoyoPoolsArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Pool_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<Pool_Filter>;
}

export interface KoyoSnapshot {
	__typename: 'KoyoSnapshot';
	address: Scalars['Bytes'];
	gaugeCount: Scalars['BigInt'];
	gaugeTypeCount: Scalars['BigInt'];
	id: Scalars['ID'];
	koyo: Koyo;
	poolCount: Scalars['Int'];
	timestamp: Scalars['Int'];
	totalLiquidity: Scalars['BigDecimal'];
	totalSwapCount: Scalars['BigInt'];
	totalSwapFee: Scalars['BigDecimal'];
	totalSwapVolume: Scalars['BigDecimal'];
	vault: Koyo;
}

export interface KoyoSnapshot_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	address?: InputMaybe<Scalars['Bytes']>;
	address_contains?: InputMaybe<Scalars['Bytes']>;
	address_in?: InputMaybe<Array<Scalars['Bytes']>>;
	address_not?: InputMaybe<Scalars['Bytes']>;
	address_not_contains?: InputMaybe<Scalars['Bytes']>;
	address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	gaugeCount?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_gt?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_gte?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gaugeCount_lt?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_lte?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_not?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gaugeTypeCount?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_gt?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_gte?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gaugeTypeCount_lt?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_lte?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_not?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	koyo?: InputMaybe<Scalars['String']>;
	koyo_?: InputMaybe<Koyo_Filter>;
	koyo_contains?: InputMaybe<Scalars['String']>;
	koyo_contains_nocase?: InputMaybe<Scalars['String']>;
	koyo_ends_with?: InputMaybe<Scalars['String']>;
	koyo_ends_with_nocase?: InputMaybe<Scalars['String']>;
	koyo_gt?: InputMaybe<Scalars['String']>;
	koyo_gte?: InputMaybe<Scalars['String']>;
	koyo_in?: InputMaybe<Array<Scalars['String']>>;
	koyo_lt?: InputMaybe<Scalars['String']>;
	koyo_lte?: InputMaybe<Scalars['String']>;
	koyo_not?: InputMaybe<Scalars['String']>;
	koyo_not_contains?: InputMaybe<Scalars['String']>;
	koyo_not_contains_nocase?: InputMaybe<Scalars['String']>;
	koyo_not_ends_with?: InputMaybe<Scalars['String']>;
	koyo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	koyo_not_in?: InputMaybe<Array<Scalars['String']>>;
	koyo_not_starts_with?: InputMaybe<Scalars['String']>;
	koyo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	koyo_starts_with?: InputMaybe<Scalars['String']>;
	koyo_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolCount?: InputMaybe<Scalars['Int']>;
	poolCount_gt?: InputMaybe<Scalars['Int']>;
	poolCount_gte?: InputMaybe<Scalars['Int']>;
	poolCount_in?: InputMaybe<Array<Scalars['Int']>>;
	poolCount_lt?: InputMaybe<Scalars['Int']>;
	poolCount_lte?: InputMaybe<Scalars['Int']>;
	poolCount_not?: InputMaybe<Scalars['Int']>;
	poolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
	timestamp?: InputMaybe<Scalars['Int']>;
	timestamp_gt?: InputMaybe<Scalars['Int']>;
	timestamp_gte?: InputMaybe<Scalars['Int']>;
	timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
	timestamp_lt?: InputMaybe<Scalars['Int']>;
	timestamp_lte?: InputMaybe<Scalars['Int']>;
	timestamp_not?: InputMaybe<Scalars['Int']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
	totalLiquidity?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapCount?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_gt?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_gte?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalSwapCount_lt?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_lte?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_not?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalSwapFee?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	vault?: InputMaybe<Scalars['String']>;
	vault_?: InputMaybe<Koyo_Filter>;
	vault_contains?: InputMaybe<Scalars['String']>;
	vault_contains_nocase?: InputMaybe<Scalars['String']>;
	vault_ends_with?: InputMaybe<Scalars['String']>;
	vault_ends_with_nocase?: InputMaybe<Scalars['String']>;
	vault_gt?: InputMaybe<Scalars['String']>;
	vault_gte?: InputMaybe<Scalars['String']>;
	vault_in?: InputMaybe<Array<Scalars['String']>>;
	vault_lt?: InputMaybe<Scalars['String']>;
	vault_lte?: InputMaybe<Scalars['String']>;
	vault_not?: InputMaybe<Scalars['String']>;
	vault_not_contains?: InputMaybe<Scalars['String']>;
	vault_not_contains_nocase?: InputMaybe<Scalars['String']>;
	vault_not_ends_with?: InputMaybe<Scalars['String']>;
	vault_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	vault_not_in?: InputMaybe<Array<Scalars['String']>>;
	vault_not_starts_with?: InputMaybe<Scalars['String']>;
	vault_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	vault_starts_with?: InputMaybe<Scalars['String']>;
	vault_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export type KoyoSnapshot_OrderBy =
	| 'address'
	| 'gaugeCount'
	| 'gaugeTypeCount'
	| 'id'
	| 'koyo'
	| 'poolCount'
	| 'timestamp'
	| 'totalLiquidity'
	| 'totalSwapCount'
	| 'totalSwapFee'
	| 'totalSwapVolume'
	| 'vault';

export interface Koyo_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	address?: InputMaybe<Scalars['Bytes']>;
	address_contains?: InputMaybe<Scalars['Bytes']>;
	address_in?: InputMaybe<Array<Scalars['Bytes']>>;
	address_not?: InputMaybe<Scalars['Bytes']>;
	address_not_contains?: InputMaybe<Scalars['Bytes']>;
	address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	gaugeCount?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_gt?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_gte?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gaugeCount_lt?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_lte?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_not?: InputMaybe<Scalars['BigInt']>;
	gaugeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gaugeTypeCount?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_gt?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_gte?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gaugeTypeCount_lt?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_lte?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_not?: InputMaybe<Scalars['BigInt']>;
	gaugeTypeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gauges_?: InputMaybe<Gauge_Filter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	poolCount?: InputMaybe<Scalars['Int']>;
	poolCount_gt?: InputMaybe<Scalars['Int']>;
	poolCount_gte?: InputMaybe<Scalars['Int']>;
	poolCount_in?: InputMaybe<Array<Scalars['Int']>>;
	poolCount_lt?: InputMaybe<Scalars['Int']>;
	poolCount_lte?: InputMaybe<Scalars['Int']>;
	poolCount_not?: InputMaybe<Scalars['Int']>;
	poolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
	pools_?: InputMaybe<Pool_Filter>;
	totalLiquidity?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapCount?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_gt?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_gte?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalSwapCount_lt?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_lte?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_not?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalSwapFee?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type Koyo_OrderBy =
	| 'address'
	| 'gaugeCount'
	| 'gaugeTypeCount'
	| 'gauges'
	| 'id'
	| 'poolCount'
	| 'pools'
	| 'totalLiquidity'
	| 'totalSwapCount'
	| 'totalSwapFee'
	| 'totalSwapVolume';

export interface LatestPrice {
	__typename: 'LatestPrice';
	asset: Scalars['Bytes'];
	block: Scalars['BigInt'];
	id: Scalars['ID'];
	poolId: Pool;
	price: Scalars['BigDecimal'];
	priceUSD: Scalars['BigDecimal'];
	pricingAsset: Scalars['Bytes'];
}

export interface LatestPrice_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	asset?: InputMaybe<Scalars['Bytes']>;
	asset_contains?: InputMaybe<Scalars['Bytes']>;
	asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
	asset_not?: InputMaybe<Scalars['Bytes']>;
	asset_not_contains?: InputMaybe<Scalars['Bytes']>;
	asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	block?: InputMaybe<Scalars['BigInt']>;
	block_gt?: InputMaybe<Scalars['BigInt']>;
	block_gte?: InputMaybe<Scalars['BigInt']>;
	block_in?: InputMaybe<Array<Scalars['BigInt']>>;
	block_lt?: InputMaybe<Scalars['BigInt']>;
	block_lte?: InputMaybe<Scalars['BigInt']>;
	block_not?: InputMaybe<Scalars['BigInt']>;
	block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	poolId?: InputMaybe<Scalars['String']>;
	poolId_?: InputMaybe<Pool_Filter>;
	poolId_contains?: InputMaybe<Scalars['String']>;
	poolId_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_ends_with?: InputMaybe<Scalars['String']>;
	poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_gt?: InputMaybe<Scalars['String']>;
	poolId_gte?: InputMaybe<Scalars['String']>;
	poolId_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_lt?: InputMaybe<Scalars['String']>;
	poolId_lte?: InputMaybe<Scalars['String']>;
	poolId_not?: InputMaybe<Scalars['String']>;
	poolId_not_contains?: InputMaybe<Scalars['String']>;
	poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_not_starts_with?: InputMaybe<Scalars['String']>;
	poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_starts_with?: InputMaybe<Scalars['String']>;
	poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
	price?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	price_gt?: InputMaybe<Scalars['BigDecimal']>;
	price_gte?: InputMaybe<Scalars['BigDecimal']>;
	price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	price_lt?: InputMaybe<Scalars['BigDecimal']>;
	price_lte?: InputMaybe<Scalars['BigDecimal']>;
	price_not?: InputMaybe<Scalars['BigDecimal']>;
	price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	pricingAsset?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_contains?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']>>;
	pricingAsset_not?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
}

export type LatestPrice_OrderBy = 'asset' | 'block' | 'id' | 'poolId' | 'price' | 'priceUSD' | 'pricingAsset';

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';

export interface PartialBlock {
	__typename: 'PartialBlock';
	hash?: Maybe<Scalars['Bytes']>;
	number: Scalars['BigInt'];
}

export interface Pool {
	__typename: 'Pool';
	address: Scalars['Bytes'];
	amp?: Maybe<Scalars['BigInt']>;
	createTime: Scalars['Int'];
	factory?: Maybe<Scalars['Bytes']>;
	historicalValues?: Maybe<Array<PoolHistoricalLiquidity>>;
	holdersCount: Scalars['BigInt'];
	id: Scalars['ID'];
	name?: Maybe<Scalars['String']>;
	owner?: Maybe<Account>;
	poolType?: Maybe<Scalars['String']>;
	shares?: Maybe<Array<PoolShare>>;
	strategyType: Scalars['Int'];
	swapEnabled: Scalars['Boolean'];
	swapFee: Scalars['BigDecimal'];
	swaps?: Maybe<Array<Swap>>;
	swapsCount: Scalars['BigInt'];
	symbol?: Maybe<Scalars['String']>;
	tokens?: Maybe<Array<PoolToken>>;
	tokensList: Array<Scalars['Bytes']>;
	totalLiquidity: Scalars['BigDecimal'];
	totalShares: Scalars['BigDecimal'];
	totalSharesRaw: Scalars['BigInt'];
	totalSwapFee: Scalars['BigDecimal'];
	totalSwapVolume: Scalars['BigDecimal'];
	totalWeight?: Maybe<Scalars['BigDecimal']>;
	tx?: Maybe<Scalars['Bytes']>;
	vault: Koyo;
}

export interface PoolHistoricalValuesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface PoolSharesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolShare_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PoolShare_Filter>;
}

export interface PoolSwapsArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Swap_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<Swap_Filter>;
}

export interface PoolTokensArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolToken_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PoolToken_Filter>;
}

export interface PoolHistoricalLiquidity {
	__typename: 'PoolHistoricalLiquidity';
	block: Scalars['BigInt'];
	id: Scalars['ID'];
	poolId: Pool;
	poolLiquidity: Scalars['BigDecimal'];
	poolShareValue: Scalars['BigDecimal'];
	poolTotalShares: Scalars['BigDecimal'];
	pricingAsset: Scalars['Bytes'];
}

export interface PoolHistoricalLiquidity_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	block?: InputMaybe<Scalars['BigInt']>;
	block_gt?: InputMaybe<Scalars['BigInt']>;
	block_gte?: InputMaybe<Scalars['BigInt']>;
	block_in?: InputMaybe<Array<Scalars['BigInt']>>;
	block_lt?: InputMaybe<Scalars['BigInt']>;
	block_lte?: InputMaybe<Scalars['BigInt']>;
	block_not?: InputMaybe<Scalars['BigInt']>;
	block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	poolId?: InputMaybe<Scalars['String']>;
	poolId_?: InputMaybe<Pool_Filter>;
	poolId_contains?: InputMaybe<Scalars['String']>;
	poolId_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_ends_with?: InputMaybe<Scalars['String']>;
	poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_gt?: InputMaybe<Scalars['String']>;
	poolId_gte?: InputMaybe<Scalars['String']>;
	poolId_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_lt?: InputMaybe<Scalars['String']>;
	poolId_lte?: InputMaybe<Scalars['String']>;
	poolId_not?: InputMaybe<Scalars['String']>;
	poolId_not_contains?: InputMaybe<Scalars['String']>;
	poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_not_starts_with?: InputMaybe<Scalars['String']>;
	poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_starts_with?: InputMaybe<Scalars['String']>;
	poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolLiquidity?: InputMaybe<Scalars['BigDecimal']>;
	poolLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
	poolLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
	poolLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	poolLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
	poolLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
	poolLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
	poolLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	poolShareValue?: InputMaybe<Scalars['BigDecimal']>;
	poolShareValue_gt?: InputMaybe<Scalars['BigDecimal']>;
	poolShareValue_gte?: InputMaybe<Scalars['BigDecimal']>;
	poolShareValue_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	poolShareValue_lt?: InputMaybe<Scalars['BigDecimal']>;
	poolShareValue_lte?: InputMaybe<Scalars['BigDecimal']>;
	poolShareValue_not?: InputMaybe<Scalars['BigDecimal']>;
	poolShareValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	poolTotalShares?: InputMaybe<Scalars['BigDecimal']>;
	poolTotalShares_gt?: InputMaybe<Scalars['BigDecimal']>;
	poolTotalShares_gte?: InputMaybe<Scalars['BigDecimal']>;
	poolTotalShares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	poolTotalShares_lt?: InputMaybe<Scalars['BigDecimal']>;
	poolTotalShares_lte?: InputMaybe<Scalars['BigDecimal']>;
	poolTotalShares_not?: InputMaybe<Scalars['BigDecimal']>;
	poolTotalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	pricingAsset?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_contains?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']>>;
	pricingAsset_not?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
}

export type PoolHistoricalLiquidity_OrderBy = 'block' | 'id' | 'poolId' | 'poolLiquidity' | 'poolShareValue' | 'poolTotalShares' | 'pricingAsset';

export interface PoolShare {
	__typename: 'PoolShare';
	account: Account;
	balance: Scalars['BigDecimal'];
	id: Scalars['ID'];
	poolId: Pool;
}

export interface PoolShare_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	account?: InputMaybe<Scalars['String']>;
	account_?: InputMaybe<Account_Filter>;
	account_contains?: InputMaybe<Scalars['String']>;
	account_contains_nocase?: InputMaybe<Scalars['String']>;
	account_ends_with?: InputMaybe<Scalars['String']>;
	account_ends_with_nocase?: InputMaybe<Scalars['String']>;
	account_gt?: InputMaybe<Scalars['String']>;
	account_gte?: InputMaybe<Scalars['String']>;
	account_in?: InputMaybe<Array<Scalars['String']>>;
	account_lt?: InputMaybe<Scalars['String']>;
	account_lte?: InputMaybe<Scalars['String']>;
	account_not?: InputMaybe<Scalars['String']>;
	account_not_contains?: InputMaybe<Scalars['String']>;
	account_not_contains_nocase?: InputMaybe<Scalars['String']>;
	account_not_ends_with?: InputMaybe<Scalars['String']>;
	account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	account_not_in?: InputMaybe<Array<Scalars['String']>>;
	account_not_starts_with?: InputMaybe<Scalars['String']>;
	account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	account_starts_with?: InputMaybe<Scalars['String']>;
	account_starts_with_nocase?: InputMaybe<Scalars['String']>;
	balance?: InputMaybe<Scalars['BigDecimal']>;
	balance_gt?: InputMaybe<Scalars['BigDecimal']>;
	balance_gte?: InputMaybe<Scalars['BigDecimal']>;
	balance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	balance_lt?: InputMaybe<Scalars['BigDecimal']>;
	balance_lte?: InputMaybe<Scalars['BigDecimal']>;
	balance_not?: InputMaybe<Scalars['BigDecimal']>;
	balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	poolId?: InputMaybe<Scalars['String']>;
	poolId_?: InputMaybe<Pool_Filter>;
	poolId_contains?: InputMaybe<Scalars['String']>;
	poolId_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_ends_with?: InputMaybe<Scalars['String']>;
	poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_gt?: InputMaybe<Scalars['String']>;
	poolId_gte?: InputMaybe<Scalars['String']>;
	poolId_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_lt?: InputMaybe<Scalars['String']>;
	poolId_lte?: InputMaybe<Scalars['String']>;
	poolId_not?: InputMaybe<Scalars['String']>;
	poolId_not_contains?: InputMaybe<Scalars['String']>;
	poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_not_starts_with?: InputMaybe<Scalars['String']>;
	poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_starts_with?: InputMaybe<Scalars['String']>;
	poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export type PoolShare_OrderBy = 'account' | 'balance' | 'id' | 'poolId';

export interface PoolSnapshot {
	__typename: 'PoolSnapshot';
	amounts: Array<Scalars['BigDecimal']>;
	holdersCount: Scalars['BigInt'];
	id: Scalars['ID'];
	pool: Pool;
	swapFees: Scalars['BigDecimal'];
	swapVolume: Scalars['BigDecimal'];
	swapsCount: Scalars['BigInt'];
	timestamp: Scalars['Int'];
	totalLiquidity: Scalars['BigDecimal'];
	totalShares: Scalars['BigDecimal'];
	totalSwapFee: Scalars['BigDecimal'];
	totalSwapVolume: Scalars['BigDecimal'];
}

export interface PoolSnapshot_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	amounts?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
	holdersCount?: InputMaybe<Scalars['BigInt']>;
	holdersCount_gt?: InputMaybe<Scalars['BigInt']>;
	holdersCount_gte?: InputMaybe<Scalars['BigInt']>;
	holdersCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	holdersCount_lt?: InputMaybe<Scalars['BigInt']>;
	holdersCount_lte?: InputMaybe<Scalars['BigInt']>;
	holdersCount_not?: InputMaybe<Scalars['BigInt']>;
	holdersCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	pool?: InputMaybe<Scalars['String']>;
	pool_?: InputMaybe<Pool_Filter>;
	pool_contains?: InputMaybe<Scalars['String']>;
	pool_contains_nocase?: InputMaybe<Scalars['String']>;
	pool_ends_with?: InputMaybe<Scalars['String']>;
	pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
	pool_gt?: InputMaybe<Scalars['String']>;
	pool_gte?: InputMaybe<Scalars['String']>;
	pool_in?: InputMaybe<Array<Scalars['String']>>;
	pool_lt?: InputMaybe<Scalars['String']>;
	pool_lte?: InputMaybe<Scalars['String']>;
	pool_not?: InputMaybe<Scalars['String']>;
	pool_not_contains?: InputMaybe<Scalars['String']>;
	pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
	pool_not_ends_with?: InputMaybe<Scalars['String']>;
	pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	pool_not_in?: InputMaybe<Array<Scalars['String']>>;
	pool_not_starts_with?: InputMaybe<Scalars['String']>;
	pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	pool_starts_with?: InputMaybe<Scalars['String']>;
	pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
	swapFees?: InputMaybe<Scalars['BigDecimal']>;
	swapFees_gt?: InputMaybe<Scalars['BigDecimal']>;
	swapFees_gte?: InputMaybe<Scalars['BigDecimal']>;
	swapFees_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	swapFees_lt?: InputMaybe<Scalars['BigDecimal']>;
	swapFees_lte?: InputMaybe<Scalars['BigDecimal']>;
	swapFees_not?: InputMaybe<Scalars['BigDecimal']>;
	swapFees_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	swapVolume?: InputMaybe<Scalars['BigDecimal']>;
	swapVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
	swapVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
	swapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	swapVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
	swapVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
	swapVolume_not?: InputMaybe<Scalars['BigDecimal']>;
	swapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	swapsCount?: InputMaybe<Scalars['BigInt']>;
	swapsCount_gt?: InputMaybe<Scalars['BigInt']>;
	swapsCount_gte?: InputMaybe<Scalars['BigInt']>;
	swapsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	swapsCount_lt?: InputMaybe<Scalars['BigInt']>;
	swapsCount_lte?: InputMaybe<Scalars['BigInt']>;
	swapsCount_not?: InputMaybe<Scalars['BigInt']>;
	swapsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	timestamp?: InputMaybe<Scalars['Int']>;
	timestamp_gt?: InputMaybe<Scalars['Int']>;
	timestamp_gte?: InputMaybe<Scalars['Int']>;
	timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
	timestamp_lt?: InputMaybe<Scalars['Int']>;
	timestamp_lte?: InputMaybe<Scalars['Int']>;
	timestamp_not?: InputMaybe<Scalars['Int']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
	totalLiquidity?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalShares?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalShares_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_not?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapFee?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type PoolSnapshot_OrderBy =
	| 'amounts'
	| 'holdersCount'
	| 'id'
	| 'pool'
	| 'swapFees'
	| 'swapVolume'
	| 'swapsCount'
	| 'timestamp'
	| 'totalLiquidity'
	| 'totalShares'
	| 'totalSwapFee'
	| 'totalSwapVolume';

export interface PoolToken {
	__typename: 'PoolToken';
	address: Scalars['String'];
	balance: Scalars['BigDecimal'];
	balanceRaw: Scalars['BigInt'];
	decimals: Scalars['Int'];
	id: Scalars['ID'];
	invested: Scalars['BigDecimal'];
	name: Scalars['String'];
	poolId: Pool;
	priceRate: Scalars['BigDecimal'];
	symbol: Scalars['String'];
	token: Token;
	weight?: Maybe<Scalars['BigDecimal']>;
}

export interface PoolToken_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	address?: InputMaybe<Scalars['String']>;
	address_contains?: InputMaybe<Scalars['String']>;
	address_contains_nocase?: InputMaybe<Scalars['String']>;
	address_ends_with?: InputMaybe<Scalars['String']>;
	address_ends_with_nocase?: InputMaybe<Scalars['String']>;
	address_gt?: InputMaybe<Scalars['String']>;
	address_gte?: InputMaybe<Scalars['String']>;
	address_in?: InputMaybe<Array<Scalars['String']>>;
	address_lt?: InputMaybe<Scalars['String']>;
	address_lte?: InputMaybe<Scalars['String']>;
	address_not?: InputMaybe<Scalars['String']>;
	address_not_contains?: InputMaybe<Scalars['String']>;
	address_not_contains_nocase?: InputMaybe<Scalars['String']>;
	address_not_ends_with?: InputMaybe<Scalars['String']>;
	address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	address_not_in?: InputMaybe<Array<Scalars['String']>>;
	address_not_starts_with?: InputMaybe<Scalars['String']>;
	address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	address_starts_with?: InputMaybe<Scalars['String']>;
	address_starts_with_nocase?: InputMaybe<Scalars['String']>;
	balance?: InputMaybe<Scalars['BigDecimal']>;
	balanceRaw?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_gt?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_gte?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
	balanceRaw_lt?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_lte?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_not?: InputMaybe<Scalars['BigInt']>;
	balanceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	balance_gt?: InputMaybe<Scalars['BigDecimal']>;
	balance_gte?: InputMaybe<Scalars['BigDecimal']>;
	balance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	balance_lt?: InputMaybe<Scalars['BigDecimal']>;
	balance_lte?: InputMaybe<Scalars['BigDecimal']>;
	balance_not?: InputMaybe<Scalars['BigDecimal']>;
	balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	decimals?: InputMaybe<Scalars['Int']>;
	decimals_gt?: InputMaybe<Scalars['Int']>;
	decimals_gte?: InputMaybe<Scalars['Int']>;
	decimals_in?: InputMaybe<Array<Scalars['Int']>>;
	decimals_lt?: InputMaybe<Scalars['Int']>;
	decimals_lte?: InputMaybe<Scalars['Int']>;
	decimals_not?: InputMaybe<Scalars['Int']>;
	decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	invested?: InputMaybe<Scalars['BigDecimal']>;
	invested_gt?: InputMaybe<Scalars['BigDecimal']>;
	invested_gte?: InputMaybe<Scalars['BigDecimal']>;
	invested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	invested_lt?: InputMaybe<Scalars['BigDecimal']>;
	invested_lte?: InputMaybe<Scalars['BigDecimal']>;
	invested_not?: InputMaybe<Scalars['BigDecimal']>;
	invested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	name?: InputMaybe<Scalars['String']>;
	name_contains?: InputMaybe<Scalars['String']>;
	name_contains_nocase?: InputMaybe<Scalars['String']>;
	name_ends_with?: InputMaybe<Scalars['String']>;
	name_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_gt?: InputMaybe<Scalars['String']>;
	name_gte?: InputMaybe<Scalars['String']>;
	name_in?: InputMaybe<Array<Scalars['String']>>;
	name_lt?: InputMaybe<Scalars['String']>;
	name_lte?: InputMaybe<Scalars['String']>;
	name_not?: InputMaybe<Scalars['String']>;
	name_not_contains?: InputMaybe<Scalars['String']>;
	name_not_contains_nocase?: InputMaybe<Scalars['String']>;
	name_not_ends_with?: InputMaybe<Scalars['String']>;
	name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_not_in?: InputMaybe<Array<Scalars['String']>>;
	name_not_starts_with?: InputMaybe<Scalars['String']>;
	name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	name_starts_with?: InputMaybe<Scalars['String']>;
	name_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolId?: InputMaybe<Scalars['String']>;
	poolId_?: InputMaybe<Pool_Filter>;
	poolId_contains?: InputMaybe<Scalars['String']>;
	poolId_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_ends_with?: InputMaybe<Scalars['String']>;
	poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_gt?: InputMaybe<Scalars['String']>;
	poolId_gte?: InputMaybe<Scalars['String']>;
	poolId_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_lt?: InputMaybe<Scalars['String']>;
	poolId_lte?: InputMaybe<Scalars['String']>;
	poolId_not?: InputMaybe<Scalars['String']>;
	poolId_not_contains?: InputMaybe<Scalars['String']>;
	poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_not_starts_with?: InputMaybe<Scalars['String']>;
	poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_starts_with?: InputMaybe<Scalars['String']>;
	poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
	priceRate?: InputMaybe<Scalars['BigDecimal']>;
	priceRate_gt?: InputMaybe<Scalars['BigDecimal']>;
	priceRate_gte?: InputMaybe<Scalars['BigDecimal']>;
	priceRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	priceRate_lt?: InputMaybe<Scalars['BigDecimal']>;
	priceRate_lte?: InputMaybe<Scalars['BigDecimal']>;
	priceRate_not?: InputMaybe<Scalars['BigDecimal']>;
	priceRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	symbol?: InputMaybe<Scalars['String']>;
	symbol_contains?: InputMaybe<Scalars['String']>;
	symbol_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_ends_with?: InputMaybe<Scalars['String']>;
	symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_gt?: InputMaybe<Scalars['String']>;
	symbol_gte?: InputMaybe<Scalars['String']>;
	symbol_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_lt?: InputMaybe<Scalars['String']>;
	symbol_lte?: InputMaybe<Scalars['String']>;
	symbol_not?: InputMaybe<Scalars['String']>;
	symbol_not_contains?: InputMaybe<Scalars['String']>;
	symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_not_starts_with?: InputMaybe<Scalars['String']>;
	symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_starts_with?: InputMaybe<Scalars['String']>;
	symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
	token?: InputMaybe<Scalars['String']>;
	token_?: InputMaybe<Token_Filter>;
	token_contains?: InputMaybe<Scalars['String']>;
	token_contains_nocase?: InputMaybe<Scalars['String']>;
	token_ends_with?: InputMaybe<Scalars['String']>;
	token_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token_gt?: InputMaybe<Scalars['String']>;
	token_gte?: InputMaybe<Scalars['String']>;
	token_in?: InputMaybe<Array<Scalars['String']>>;
	token_lt?: InputMaybe<Scalars['String']>;
	token_lte?: InputMaybe<Scalars['String']>;
	token_not?: InputMaybe<Scalars['String']>;
	token_not_contains?: InputMaybe<Scalars['String']>;
	token_not_contains_nocase?: InputMaybe<Scalars['String']>;
	token_not_ends_with?: InputMaybe<Scalars['String']>;
	token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token_not_in?: InputMaybe<Array<Scalars['String']>>;
	token_not_starts_with?: InputMaybe<Scalars['String']>;
	token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	token_starts_with?: InputMaybe<Scalars['String']>;
	token_starts_with_nocase?: InputMaybe<Scalars['String']>;
	weight?: InputMaybe<Scalars['BigDecimal']>;
	weight_gt?: InputMaybe<Scalars['BigDecimal']>;
	weight_gte?: InputMaybe<Scalars['BigDecimal']>;
	weight_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	weight_lt?: InputMaybe<Scalars['BigDecimal']>;
	weight_lte?: InputMaybe<Scalars['BigDecimal']>;
	weight_not?: InputMaybe<Scalars['BigDecimal']>;
	weight_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type PoolToken_OrderBy =
	| 'address'
	| 'balance'
	| 'balanceRaw'
	| 'decimals'
	| 'id'
	| 'invested'
	| 'name'
	| 'poolId'
	| 'priceRate'
	| 'symbol'
	| 'token'
	| 'weight';

export interface Pool_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	address?: InputMaybe<Scalars['Bytes']>;
	address_contains?: InputMaybe<Scalars['Bytes']>;
	address_in?: InputMaybe<Array<Scalars['Bytes']>>;
	address_not?: InputMaybe<Scalars['Bytes']>;
	address_not_contains?: InputMaybe<Scalars['Bytes']>;
	address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	amp?: InputMaybe<Scalars['BigInt']>;
	amp_gt?: InputMaybe<Scalars['BigInt']>;
	amp_gte?: InputMaybe<Scalars['BigInt']>;
	amp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	amp_lt?: InputMaybe<Scalars['BigInt']>;
	amp_lte?: InputMaybe<Scalars['BigInt']>;
	amp_not?: InputMaybe<Scalars['BigInt']>;
	amp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	createTime?: InputMaybe<Scalars['Int']>;
	createTime_gt?: InputMaybe<Scalars['Int']>;
	createTime_gte?: InputMaybe<Scalars['Int']>;
	createTime_in?: InputMaybe<Array<Scalars['Int']>>;
	createTime_lt?: InputMaybe<Scalars['Int']>;
	createTime_lte?: InputMaybe<Scalars['Int']>;
	createTime_not?: InputMaybe<Scalars['Int']>;
	createTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
	factory?: InputMaybe<Scalars['Bytes']>;
	factory_contains?: InputMaybe<Scalars['Bytes']>;
	factory_in?: InputMaybe<Array<Scalars['Bytes']>>;
	factory_not?: InputMaybe<Scalars['Bytes']>;
	factory_not_contains?: InputMaybe<Scalars['Bytes']>;
	factory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	historicalValues_?: InputMaybe<PoolHistoricalLiquidity_Filter>;
	holdersCount?: InputMaybe<Scalars['BigInt']>;
	holdersCount_gt?: InputMaybe<Scalars['BigInt']>;
	holdersCount_gte?: InputMaybe<Scalars['BigInt']>;
	holdersCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	holdersCount_lt?: InputMaybe<Scalars['BigInt']>;
	holdersCount_lte?: InputMaybe<Scalars['BigInt']>;
	holdersCount_not?: InputMaybe<Scalars['BigInt']>;
	holdersCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	name?: InputMaybe<Scalars['String']>;
	name_contains?: InputMaybe<Scalars['String']>;
	name_contains_nocase?: InputMaybe<Scalars['String']>;
	name_ends_with?: InputMaybe<Scalars['String']>;
	name_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_gt?: InputMaybe<Scalars['String']>;
	name_gte?: InputMaybe<Scalars['String']>;
	name_in?: InputMaybe<Array<Scalars['String']>>;
	name_lt?: InputMaybe<Scalars['String']>;
	name_lte?: InputMaybe<Scalars['String']>;
	name_not?: InputMaybe<Scalars['String']>;
	name_not_contains?: InputMaybe<Scalars['String']>;
	name_not_contains_nocase?: InputMaybe<Scalars['String']>;
	name_not_ends_with?: InputMaybe<Scalars['String']>;
	name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_not_in?: InputMaybe<Array<Scalars['String']>>;
	name_not_starts_with?: InputMaybe<Scalars['String']>;
	name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	name_starts_with?: InputMaybe<Scalars['String']>;
	name_starts_with_nocase?: InputMaybe<Scalars['String']>;
	owner?: InputMaybe<Scalars['String']>;
	owner_?: InputMaybe<Account_Filter>;
	owner_contains?: InputMaybe<Scalars['String']>;
	owner_contains_nocase?: InputMaybe<Scalars['String']>;
	owner_ends_with?: InputMaybe<Scalars['String']>;
	owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
	owner_gt?: InputMaybe<Scalars['String']>;
	owner_gte?: InputMaybe<Scalars['String']>;
	owner_in?: InputMaybe<Array<Scalars['String']>>;
	owner_lt?: InputMaybe<Scalars['String']>;
	owner_lte?: InputMaybe<Scalars['String']>;
	owner_not?: InputMaybe<Scalars['String']>;
	owner_not_contains?: InputMaybe<Scalars['String']>;
	owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
	owner_not_ends_with?: InputMaybe<Scalars['String']>;
	owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	owner_not_in?: InputMaybe<Array<Scalars['String']>>;
	owner_not_starts_with?: InputMaybe<Scalars['String']>;
	owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	owner_starts_with?: InputMaybe<Scalars['String']>;
	owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolType?: InputMaybe<Scalars['String']>;
	poolType_contains?: InputMaybe<Scalars['String']>;
	poolType_contains_nocase?: InputMaybe<Scalars['String']>;
	poolType_ends_with?: InputMaybe<Scalars['String']>;
	poolType_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolType_gt?: InputMaybe<Scalars['String']>;
	poolType_gte?: InputMaybe<Scalars['String']>;
	poolType_in?: InputMaybe<Array<Scalars['String']>>;
	poolType_lt?: InputMaybe<Scalars['String']>;
	poolType_lte?: InputMaybe<Scalars['String']>;
	poolType_not?: InputMaybe<Scalars['String']>;
	poolType_not_contains?: InputMaybe<Scalars['String']>;
	poolType_not_contains_nocase?: InputMaybe<Scalars['String']>;
	poolType_not_ends_with?: InputMaybe<Scalars['String']>;
	poolType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolType_not_in?: InputMaybe<Array<Scalars['String']>>;
	poolType_not_starts_with?: InputMaybe<Scalars['String']>;
	poolType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolType_starts_with?: InputMaybe<Scalars['String']>;
	poolType_starts_with_nocase?: InputMaybe<Scalars['String']>;
	shares_?: InputMaybe<PoolShare_Filter>;
	strategyType?: InputMaybe<Scalars['Int']>;
	strategyType_gt?: InputMaybe<Scalars['Int']>;
	strategyType_gte?: InputMaybe<Scalars['Int']>;
	strategyType_in?: InputMaybe<Array<Scalars['Int']>>;
	strategyType_lt?: InputMaybe<Scalars['Int']>;
	strategyType_lte?: InputMaybe<Scalars['Int']>;
	strategyType_not?: InputMaybe<Scalars['Int']>;
	strategyType_not_in?: InputMaybe<Array<Scalars['Int']>>;
	swapEnabled?: InputMaybe<Scalars['Boolean']>;
	swapEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
	swapEnabled_not?: InputMaybe<Scalars['Boolean']>;
	swapEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
	swapFee?: InputMaybe<Scalars['BigDecimal']>;
	swapFee_gt?: InputMaybe<Scalars['BigDecimal']>;
	swapFee_gte?: InputMaybe<Scalars['BigDecimal']>;
	swapFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	swapFee_lt?: InputMaybe<Scalars['BigDecimal']>;
	swapFee_lte?: InputMaybe<Scalars['BigDecimal']>;
	swapFee_not?: InputMaybe<Scalars['BigDecimal']>;
	swapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	swapsCount?: InputMaybe<Scalars['BigInt']>;
	swapsCount_gt?: InputMaybe<Scalars['BigInt']>;
	swapsCount_gte?: InputMaybe<Scalars['BigInt']>;
	swapsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	swapsCount_lt?: InputMaybe<Scalars['BigInt']>;
	swapsCount_lte?: InputMaybe<Scalars['BigInt']>;
	swapsCount_not?: InputMaybe<Scalars['BigInt']>;
	swapsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	swaps_?: InputMaybe<Swap_Filter>;
	symbol?: InputMaybe<Scalars['String']>;
	symbol_contains?: InputMaybe<Scalars['String']>;
	symbol_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_ends_with?: InputMaybe<Scalars['String']>;
	symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_gt?: InputMaybe<Scalars['String']>;
	symbol_gte?: InputMaybe<Scalars['String']>;
	symbol_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_lt?: InputMaybe<Scalars['String']>;
	symbol_lte?: InputMaybe<Scalars['String']>;
	symbol_not?: InputMaybe<Scalars['String']>;
	symbol_not_contains?: InputMaybe<Scalars['String']>;
	symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_not_starts_with?: InputMaybe<Scalars['String']>;
	symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_starts_with?: InputMaybe<Scalars['String']>;
	symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
	tokensList?: InputMaybe<Array<Scalars['Bytes']>>;
	tokensList_contains?: InputMaybe<Array<Scalars['Bytes']>>;
	tokensList_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
	tokensList_not?: InputMaybe<Array<Scalars['Bytes']>>;
	tokensList_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
	tokensList_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
	tokens_?: InputMaybe<PoolToken_Filter>;
	totalLiquidity?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
	totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalShares?: InputMaybe<Scalars['BigDecimal']>;
	totalSharesRaw?: InputMaybe<Scalars['BigInt']>;
	totalSharesRaw_gt?: InputMaybe<Scalars['BigInt']>;
	totalSharesRaw_gte?: InputMaybe<Scalars['BigInt']>;
	totalSharesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalSharesRaw_lt?: InputMaybe<Scalars['BigInt']>;
	totalSharesRaw_lte?: InputMaybe<Scalars['BigInt']>;
	totalSharesRaw_not?: InputMaybe<Scalars['BigInt']>;
	totalSharesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalShares_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalShares_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_not?: InputMaybe<Scalars['BigDecimal']>;
	totalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapFee?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalWeight?: InputMaybe<Scalars['BigDecimal']>;
	totalWeight_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalWeight_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalWeight_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalWeight_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalWeight_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalWeight_not?: InputMaybe<Scalars['BigDecimal']>;
	totalWeight_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	tx?: InputMaybe<Scalars['Bytes']>;
	tx_contains?: InputMaybe<Scalars['Bytes']>;
	tx_in?: InputMaybe<Array<Scalars['Bytes']>>;
	tx_not?: InputMaybe<Scalars['Bytes']>;
	tx_not_contains?: InputMaybe<Scalars['Bytes']>;
	tx_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	vault?: InputMaybe<Scalars['String']>;
	vault_?: InputMaybe<Koyo_Filter>;
	vault_contains?: InputMaybe<Scalars['String']>;
	vault_contains_nocase?: InputMaybe<Scalars['String']>;
	vault_ends_with?: InputMaybe<Scalars['String']>;
	vault_ends_with_nocase?: InputMaybe<Scalars['String']>;
	vault_gt?: InputMaybe<Scalars['String']>;
	vault_gte?: InputMaybe<Scalars['String']>;
	vault_in?: InputMaybe<Array<Scalars['String']>>;
	vault_lt?: InputMaybe<Scalars['String']>;
	vault_lte?: InputMaybe<Scalars['String']>;
	vault_not?: InputMaybe<Scalars['String']>;
	vault_not_contains?: InputMaybe<Scalars['String']>;
	vault_not_contains_nocase?: InputMaybe<Scalars['String']>;
	vault_not_ends_with?: InputMaybe<Scalars['String']>;
	vault_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	vault_not_in?: InputMaybe<Array<Scalars['String']>>;
	vault_not_starts_with?: InputMaybe<Scalars['String']>;
	vault_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	vault_starts_with?: InputMaybe<Scalars['String']>;
	vault_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export type Pool_OrderBy =
	| 'address'
	| 'amp'
	| 'createTime'
	| 'factory'
	| 'historicalValues'
	| 'holdersCount'
	| 'id'
	| 'name'
	| 'owner'
	| 'poolType'
	| 'shares'
	| 'strategyType'
	| 'swapEnabled'
	| 'swapFee'
	| 'swaps'
	| 'swapsCount'
	| 'symbol'
	| 'tokens'
	| 'tokensList'
	| 'totalLiquidity'
	| 'totalShares'
	| 'totalSharesRaw'
	| 'totalSwapFee'
	| 'totalSwapVolume'
	| 'totalWeight'
	| 'tx'
	| 'vault';

export interface ProofOfIndexingRequest {
	block: BlockInput;
	deployment: Scalars['String'];
}

export interface ProofOfIndexingResult {
	__typename: 'ProofOfIndexingResult';
	block: Block;
	deployment: Scalars['String'];
	/** There may not be a proof of indexing available for the deployment and block */
	proofOfIndexing?: Maybe<Scalars['Bytes']>;
}

export interface PublicProofOfIndexingRequest {
	blockNumber: Scalars['BigInt'];
	deployment: Scalars['String'];
}

export interface PublicProofOfIndexingResult {
	__typename: 'PublicProofOfIndexingResult';
	block: PartialBlock;
	deployment: Scalars['String'];
	proofOfIndexing: Scalars['Bytes'];
}

export interface Query {
	__typename: 'Query';
	/** Access to subgraph metadata */
	_meta?: Maybe<_Meta_>;
	account?: Maybe<Account>;
	accountInternalBalance?: Maybe<AccountInternalBalance>;
	accountInternalBalances: Array<AccountInternalBalance>;
	accounts: Array<Account>;
	ampUpdate?: Maybe<AmpUpdate>;
	ampUpdates: Array<AmpUpdate>;
	block?: Maybe<Block>;
	blockData?: Maybe<Scalars['JSONObject']>;
	blocks: Array<Block>;
	cachedEthereumCalls?: Maybe<Array<CachedEthereumCall>>;
	entityChangesInBlock: EntityChanges;
	gauge?: Maybe<Gauge>;
	gaugeDeposit?: Maybe<GaugeDeposit>;
	gaugeDeposits: Array<GaugeDeposit>;
	gaugeLiquidities: Array<GaugeLiquidity>;
	gaugeLiquidity?: Maybe<GaugeLiquidity>;
	gaugeTotalWeight?: Maybe<GaugeTotalWeight>;
	gaugeTotalWeights: Array<GaugeTotalWeight>;
	gaugeType?: Maybe<GaugeType>;
	gaugeTypeWeight?: Maybe<GaugeTypeWeight>;
	gaugeTypeWeights: Array<GaugeTypeWeight>;
	gaugeTypes: Array<GaugeType>;
	gaugeWeight?: Maybe<GaugeWeight>;
	gaugeWeightVote?: Maybe<GaugeWeightVote>;
	gaugeWeightVotes: Array<GaugeWeightVote>;
	gaugeWeights: Array<GaugeWeight>;
	gaugeWithdraw?: Maybe<GaugeWithdraw>;
	gaugeWithdraws: Array<GaugeWithdraw>;
	gauges: Array<Gauge>;
	indexingStatusForCurrentVersion?: Maybe<SubgraphIndexingStatus>;
	indexingStatusForPendingVersion?: Maybe<SubgraphIndexingStatus>;
	indexingStatuses: Array<SubgraphIndexingStatus>;
	indexingStatusesForSubgraphName: Array<SubgraphIndexingStatus>;
	joinExit?: Maybe<JoinExit>;
	joinExits: Array<JoinExit>;
	koyo?: Maybe<Koyo>;
	koyoSnapshot?: Maybe<KoyoSnapshot>;
	koyoSnapshots: Array<KoyoSnapshot>;
	koyos: Array<Koyo>;
	latestPrice?: Maybe<LatestPrice>;
	latestPrices: Array<LatestPrice>;
	pool?: Maybe<Pool>;
	poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
	poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
	poolShare?: Maybe<PoolShare>;
	poolShares: Array<PoolShare>;
	poolSnapshot?: Maybe<PoolSnapshot>;
	poolSnapshots: Array<PoolSnapshot>;
	poolToken?: Maybe<PoolToken>;
	poolTokens: Array<PoolToken>;
	pools: Array<Pool>;
	proofOfIndexing?: Maybe<Scalars['Bytes']>;
	/**
	 * Proofs of indexing for several deployments and blocks that can be shared and
	 * compared in public without revealing the _actual_ proof of indexing that every
	 * indexer has in their database
	 *
	 */
	publicProofsOfIndexing: Array<PublicProofOfIndexingResult>;
	subgraphFeatures: SubgraphFeatures;
	swap?: Maybe<Swap>;
	swaps: Array<Swap>;
	token?: Maybe<Token>;
	tokenPrice?: Maybe<TokenPrice>;
	tokenPrices: Array<TokenPrice>;
	tokenSnapshot?: Maybe<TokenSnapshot>;
	tokenSnapshots: Array<TokenSnapshot>;
	tokens: Array<Token>;
	tradePair?: Maybe<TradePair>;
	tradePairs: Array<TradePair>;
}

export interface Query_MetaArgs {
	block?: InputMaybe<Block_Height>;
}

export interface QueryAccountArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAccountInternalBalanceArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAccountInternalBalancesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<AccountInternalBalance_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<AccountInternalBalance_Filter>;
}

export interface QueryAccountsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Account_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Account_Filter>;
}

export interface QueryAmpUpdateArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAmpUpdatesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<AmpUpdate_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<AmpUpdate_Filter>;
}

export interface QueryBlockArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBlockDataArgs {
	blockHash: Scalars['Bytes'];
	network: Scalars['String'];
}

export interface QueryBlocksArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Block_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Block_Filter>;
}

export interface QueryCachedEthereumCallsArgs {
	blockHash: Scalars['Bytes'];
	network: Scalars['String'];
}

export interface QueryEntityChangesInBlockArgs {
	blockNumber: Scalars['Int'];
	subgraphId: Scalars['String'];
}

export interface QueryGaugeArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeDepositArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeDepositsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeDeposit_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeDeposit_Filter>;
}

export interface QueryGaugeLiquiditiesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeLiquidity_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeLiquidity_Filter>;
}

export interface QueryGaugeLiquidityArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeTotalWeightArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeTotalWeightsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeTotalWeight_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeTotalWeight_Filter>;
}

export interface QueryGaugeTypeArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeTypeWeightArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeTypeWeightsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeTypeWeight_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeTypeWeight_Filter>;
}

export interface QueryGaugeTypesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeType_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeType_Filter>;
}

export interface QueryGaugeWeightArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeWeightVoteArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeWeightVotesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWeightVote_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeWeightVote_Filter>;
}

export interface QueryGaugeWeightsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWeight_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeWeight_Filter>;
}

export interface QueryGaugeWithdrawArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugeWithdrawsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWithdraw_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeWithdraw_Filter>;
}

export interface QueryGaugesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Gauge_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Gauge_Filter>;
}

export interface QueryIndexingStatusForCurrentVersionArgs {
	subgraphName: Scalars['String'];
}

export interface QueryIndexingStatusForPendingVersionArgs {
	subgraphName: Scalars['String'];
}

export interface QueryIndexingStatusesArgs {
	subgraphs?: InputMaybe<Array<Scalars['String']>>;
}

export interface QueryIndexingStatusesForSubgraphNameArgs {
	subgraphName: Scalars['String'];
}

export interface QueryJoinExitArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryJoinExitsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<JoinExit_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<JoinExit_Filter>;
}

export interface QueryKoyoArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryKoyoSnapshotArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryKoyoSnapshotsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<KoyoSnapshot_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<KoyoSnapshot_Filter>;
}

export interface QueryKoyosArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Koyo_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Koyo_Filter>;
}

export interface QueryLatestPriceArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLatestPricesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<LatestPrice_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<LatestPrice_Filter>;
}

export interface QueryPoolArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolHistoricalLiquiditiesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface QueryPoolHistoricalLiquidityArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolShareArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolSharesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolShare_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<PoolShare_Filter>;
}

export interface QueryPoolSnapshotArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolSnapshotsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<PoolSnapshot_Filter>;
}

export interface QueryPoolTokenArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolTokensArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolToken_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<PoolToken_Filter>;
}

export interface QueryPoolsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Pool_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Pool_Filter>;
}

export interface QueryProofOfIndexingArgs {
	blockHash: Scalars['Bytes'];
	blockNumber: Scalars['Int'];
	indexer?: InputMaybe<Scalars['Bytes']>;
	subgraph: Scalars['String'];
}

export interface QueryPublicProofsOfIndexingArgs {
	requests: Array<PublicProofOfIndexingRequest>;
}

export interface QuerySubgraphFeaturesArgs {
	subgraphId: Scalars['String'];
}

export interface QuerySwapArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QuerySwapsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Swap_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Swap_Filter>;
}

export interface QueryTokenArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenPriceArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenPricesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<TokenPrice_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<TokenPrice_Filter>;
}

export interface QueryTokenSnapshotArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenSnapshotsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<TokenSnapshot_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<TokenSnapshot_Filter>;
}

export interface QueryTokensArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Token_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Token_Filter>;
}

export interface QueryTradePairArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTradePairsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<TradePair_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<TradePair_Filter>;
}

export interface SubgraphError {
	__typename: 'SubgraphError';
	block?: Maybe<Block>;
	deterministic: Scalars['Boolean'];
	handler?: Maybe<Scalars['String']>;
	message: Scalars['String'];
}

export interface SubgraphFeatures {
	__typename: 'SubgraphFeatures';
	errors: Array<Scalars['String']>;
	features: Array<Feature>;
	network?: Maybe<Scalars['String']>;
}

export interface SubgraphIndexingStatus {
	__typename: 'SubgraphIndexingStatus';
	chains: Array<ChainIndexingStatus>;
	entityCount: Scalars['BigInt'];
	/** If the subgraph has failed, this is the error caused it */
	fatalError?: Maybe<SubgraphError>;
	health: Health;
	node?: Maybe<Scalars['String']>;
	/** Sorted from first to last, limited to first 1000 */
	nonFatalErrors: Array<SubgraphError>;
	subgraph: Scalars['String'];
	synced: Scalars['Boolean'];
}

export interface Subscription {
	__typename: 'Subscription';
	/** Access to subgraph metadata */
	_meta?: Maybe<_Meta_>;
	account?: Maybe<Account>;
	accountInternalBalance?: Maybe<AccountInternalBalance>;
	accountInternalBalances: Array<AccountInternalBalance>;
	accounts: Array<Account>;
	ampUpdate?: Maybe<AmpUpdate>;
	ampUpdates: Array<AmpUpdate>;
	block?: Maybe<Block>;
	blocks: Array<Block>;
	gauge?: Maybe<Gauge>;
	gaugeDeposit?: Maybe<GaugeDeposit>;
	gaugeDeposits: Array<GaugeDeposit>;
	gaugeLiquidities: Array<GaugeLiquidity>;
	gaugeLiquidity?: Maybe<GaugeLiquidity>;
	gaugeTotalWeight?: Maybe<GaugeTotalWeight>;
	gaugeTotalWeights: Array<GaugeTotalWeight>;
	gaugeType?: Maybe<GaugeType>;
	gaugeTypeWeight?: Maybe<GaugeTypeWeight>;
	gaugeTypeWeights: Array<GaugeTypeWeight>;
	gaugeTypes: Array<GaugeType>;
	gaugeWeight?: Maybe<GaugeWeight>;
	gaugeWeightVote?: Maybe<GaugeWeightVote>;
	gaugeWeightVotes: Array<GaugeWeightVote>;
	gaugeWeights: Array<GaugeWeight>;
	gaugeWithdraw?: Maybe<GaugeWithdraw>;
	gaugeWithdraws: Array<GaugeWithdraw>;
	gauges: Array<Gauge>;
	joinExit?: Maybe<JoinExit>;
	joinExits: Array<JoinExit>;
	koyo?: Maybe<Koyo>;
	koyoSnapshot?: Maybe<KoyoSnapshot>;
	koyoSnapshots: Array<KoyoSnapshot>;
	koyos: Array<Koyo>;
	latestPrice?: Maybe<LatestPrice>;
	latestPrices: Array<LatestPrice>;
	pool?: Maybe<Pool>;
	poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
	poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
	poolShare?: Maybe<PoolShare>;
	poolShares: Array<PoolShare>;
	poolSnapshot?: Maybe<PoolSnapshot>;
	poolSnapshots: Array<PoolSnapshot>;
	poolToken?: Maybe<PoolToken>;
	poolTokens: Array<PoolToken>;
	pools: Array<Pool>;
	swap?: Maybe<Swap>;
	swaps: Array<Swap>;
	token?: Maybe<Token>;
	tokenPrice?: Maybe<TokenPrice>;
	tokenPrices: Array<TokenPrice>;
	tokenSnapshot?: Maybe<TokenSnapshot>;
	tokenSnapshots: Array<TokenSnapshot>;
	tokens: Array<Token>;
	tradePair?: Maybe<TradePair>;
	tradePairs: Array<TradePair>;
}

export interface Subscription_MetaArgs {
	block?: InputMaybe<Block_Height>;
}

export interface SubscriptionAccountArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAccountInternalBalanceArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAccountInternalBalancesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<AccountInternalBalance_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<AccountInternalBalance_Filter>;
}

export interface SubscriptionAccountsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Account_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Account_Filter>;
}

export interface SubscriptionAmpUpdateArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAmpUpdatesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<AmpUpdate_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<AmpUpdate_Filter>;
}

export interface SubscriptionBlockArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBlocksArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Block_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Block_Filter>;
}

export interface SubscriptionGaugeArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeDepositArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeDepositsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeDeposit_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeDeposit_Filter>;
}

export interface SubscriptionGaugeLiquiditiesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeLiquidity_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeLiquidity_Filter>;
}

export interface SubscriptionGaugeLiquidityArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeTotalWeightArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeTotalWeightsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeTotalWeight_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeTotalWeight_Filter>;
}

export interface SubscriptionGaugeTypeArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeTypeWeightArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeTypeWeightsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeTypeWeight_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeTypeWeight_Filter>;
}

export interface SubscriptionGaugeTypesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeType_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeType_Filter>;
}

export interface SubscriptionGaugeWeightArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeWeightVoteArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeWeightVotesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWeightVote_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeWeightVote_Filter>;
}

export interface SubscriptionGaugeWeightsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWeight_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeWeight_Filter>;
}

export interface SubscriptionGaugeWithdrawArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugeWithdrawsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GaugeWithdraw_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GaugeWithdraw_Filter>;
}

export interface SubscriptionGaugesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Gauge_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Gauge_Filter>;
}

export interface SubscriptionJoinExitArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionJoinExitsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<JoinExit_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<JoinExit_Filter>;
}

export interface SubscriptionKoyoArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionKoyoSnapshotArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionKoyoSnapshotsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<KoyoSnapshot_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<KoyoSnapshot_Filter>;
}

export interface SubscriptionKoyosArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Koyo_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Koyo_Filter>;
}

export interface SubscriptionLatestPriceArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLatestPricesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<LatestPrice_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<LatestPrice_Filter>;
}

export interface SubscriptionPoolArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolHistoricalLiquiditiesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface SubscriptionPoolHistoricalLiquidityArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolShareArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolSharesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolShare_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<PoolShare_Filter>;
}

export interface SubscriptionPoolSnapshotArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolSnapshotsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<PoolSnapshot_Filter>;
}

export interface SubscriptionPoolTokenArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolTokensArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<PoolToken_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<PoolToken_Filter>;
}

export interface SubscriptionPoolsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Pool_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Pool_Filter>;
}

export interface SubscriptionSwapArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionSwapsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Swap_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Swap_Filter>;
}

export interface SubscriptionTokenArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenPriceArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenPricesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<TokenPrice_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<TokenPrice_Filter>;
}

export interface SubscriptionTokenSnapshotArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenSnapshotsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<TokenSnapshot_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<TokenSnapshot_Filter>;
}

export interface SubscriptionTokensArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Token_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Token_Filter>;
}

export interface SubscriptionTradePairArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTradePairsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<TradePair_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<TradePair_Filter>;
}

export interface Swap {
	__typename: 'Swap';
	account: Account;
	caller: Scalars['Bytes'];
	id: Scalars['ID'];
	poolId: Pool;
	timestamp: Scalars['Int'];
	tokenAmountIn: Scalars['BigDecimal'];
	tokenAmountOut: Scalars['BigDecimal'];
	tokenIn: Scalars['Bytes'];
	tokenInSym: Scalars['String'];
	tokenOut: Scalars['Bytes'];
	tokenOutSym: Scalars['String'];
	tx: Scalars['Bytes'];
	valueUSD: Scalars['BigDecimal'];
}

export interface Swap_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	account?: InputMaybe<Scalars['String']>;
	account_?: InputMaybe<Account_Filter>;
	account_contains?: InputMaybe<Scalars['String']>;
	account_contains_nocase?: InputMaybe<Scalars['String']>;
	account_ends_with?: InputMaybe<Scalars['String']>;
	account_ends_with_nocase?: InputMaybe<Scalars['String']>;
	account_gt?: InputMaybe<Scalars['String']>;
	account_gte?: InputMaybe<Scalars['String']>;
	account_in?: InputMaybe<Array<Scalars['String']>>;
	account_lt?: InputMaybe<Scalars['String']>;
	account_lte?: InputMaybe<Scalars['String']>;
	account_not?: InputMaybe<Scalars['String']>;
	account_not_contains?: InputMaybe<Scalars['String']>;
	account_not_contains_nocase?: InputMaybe<Scalars['String']>;
	account_not_ends_with?: InputMaybe<Scalars['String']>;
	account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	account_not_in?: InputMaybe<Array<Scalars['String']>>;
	account_not_starts_with?: InputMaybe<Scalars['String']>;
	account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	account_starts_with?: InputMaybe<Scalars['String']>;
	account_starts_with_nocase?: InputMaybe<Scalars['String']>;
	caller?: InputMaybe<Scalars['Bytes']>;
	caller_contains?: InputMaybe<Scalars['Bytes']>;
	caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
	caller_not?: InputMaybe<Scalars['Bytes']>;
	caller_not_contains?: InputMaybe<Scalars['Bytes']>;
	caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	poolId?: InputMaybe<Scalars['String']>;
	poolId_?: InputMaybe<Pool_Filter>;
	poolId_contains?: InputMaybe<Scalars['String']>;
	poolId_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_ends_with?: InputMaybe<Scalars['String']>;
	poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_gt?: InputMaybe<Scalars['String']>;
	poolId_gte?: InputMaybe<Scalars['String']>;
	poolId_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_lt?: InputMaybe<Scalars['String']>;
	poolId_lte?: InputMaybe<Scalars['String']>;
	poolId_not?: InputMaybe<Scalars['String']>;
	poolId_not_contains?: InputMaybe<Scalars['String']>;
	poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_not_starts_with?: InputMaybe<Scalars['String']>;
	poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_starts_with?: InputMaybe<Scalars['String']>;
	poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
	timestamp?: InputMaybe<Scalars['Int']>;
	timestamp_gt?: InputMaybe<Scalars['Int']>;
	timestamp_gte?: InputMaybe<Scalars['Int']>;
	timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
	timestamp_lt?: InputMaybe<Scalars['Int']>;
	timestamp_lte?: InputMaybe<Scalars['Int']>;
	timestamp_not?: InputMaybe<Scalars['Int']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
	tokenAmountIn?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountIn_gt?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountIn_gte?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountIn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	tokenAmountIn_lt?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountIn_lte?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountIn_not?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountIn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	tokenAmountOut?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountOut_gt?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountOut_gte?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountOut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	tokenAmountOut_lt?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountOut_lte?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountOut_not?: InputMaybe<Scalars['BigDecimal']>;
	tokenAmountOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	tokenIn?: InputMaybe<Scalars['Bytes']>;
	tokenInSym?: InputMaybe<Scalars['String']>;
	tokenInSym_contains?: InputMaybe<Scalars['String']>;
	tokenInSym_contains_nocase?: InputMaybe<Scalars['String']>;
	tokenInSym_ends_with?: InputMaybe<Scalars['String']>;
	tokenInSym_ends_with_nocase?: InputMaybe<Scalars['String']>;
	tokenInSym_gt?: InputMaybe<Scalars['String']>;
	tokenInSym_gte?: InputMaybe<Scalars['String']>;
	tokenInSym_in?: InputMaybe<Array<Scalars['String']>>;
	tokenInSym_lt?: InputMaybe<Scalars['String']>;
	tokenInSym_lte?: InputMaybe<Scalars['String']>;
	tokenInSym_not?: InputMaybe<Scalars['String']>;
	tokenInSym_not_contains?: InputMaybe<Scalars['String']>;
	tokenInSym_not_contains_nocase?: InputMaybe<Scalars['String']>;
	tokenInSym_not_ends_with?: InputMaybe<Scalars['String']>;
	tokenInSym_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	tokenInSym_not_in?: InputMaybe<Array<Scalars['String']>>;
	tokenInSym_not_starts_with?: InputMaybe<Scalars['String']>;
	tokenInSym_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	tokenInSym_starts_with?: InputMaybe<Scalars['String']>;
	tokenInSym_starts_with_nocase?: InputMaybe<Scalars['String']>;
	tokenIn_contains?: InputMaybe<Scalars['Bytes']>;
	tokenIn_in?: InputMaybe<Array<Scalars['Bytes']>>;
	tokenIn_not?: InputMaybe<Scalars['Bytes']>;
	tokenIn_not_contains?: InputMaybe<Scalars['Bytes']>;
	tokenIn_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	tokenOut?: InputMaybe<Scalars['Bytes']>;
	tokenOutSym?: InputMaybe<Scalars['String']>;
	tokenOutSym_contains?: InputMaybe<Scalars['String']>;
	tokenOutSym_contains_nocase?: InputMaybe<Scalars['String']>;
	tokenOutSym_ends_with?: InputMaybe<Scalars['String']>;
	tokenOutSym_ends_with_nocase?: InputMaybe<Scalars['String']>;
	tokenOutSym_gt?: InputMaybe<Scalars['String']>;
	tokenOutSym_gte?: InputMaybe<Scalars['String']>;
	tokenOutSym_in?: InputMaybe<Array<Scalars['String']>>;
	tokenOutSym_lt?: InputMaybe<Scalars['String']>;
	tokenOutSym_lte?: InputMaybe<Scalars['String']>;
	tokenOutSym_not?: InputMaybe<Scalars['String']>;
	tokenOutSym_not_contains?: InputMaybe<Scalars['String']>;
	tokenOutSym_not_contains_nocase?: InputMaybe<Scalars['String']>;
	tokenOutSym_not_ends_with?: InputMaybe<Scalars['String']>;
	tokenOutSym_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	tokenOutSym_not_in?: InputMaybe<Array<Scalars['String']>>;
	tokenOutSym_not_starts_with?: InputMaybe<Scalars['String']>;
	tokenOutSym_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	tokenOutSym_starts_with?: InputMaybe<Scalars['String']>;
	tokenOutSym_starts_with_nocase?: InputMaybe<Scalars['String']>;
	tokenOut_contains?: InputMaybe<Scalars['Bytes']>;
	tokenOut_in?: InputMaybe<Array<Scalars['Bytes']>>;
	tokenOut_not?: InputMaybe<Scalars['Bytes']>;
	tokenOut_not_contains?: InputMaybe<Scalars['Bytes']>;
	tokenOut_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	tx?: InputMaybe<Scalars['Bytes']>;
	tx_contains?: InputMaybe<Scalars['Bytes']>;
	tx_in?: InputMaybe<Array<Scalars['Bytes']>>;
	tx_not?: InputMaybe<Scalars['Bytes']>;
	tx_not_contains?: InputMaybe<Scalars['Bytes']>;
	tx_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	valueUSD?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	valueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
	valueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type Swap_OrderBy =
	| 'account'
	| 'caller'
	| 'id'
	| 'poolId'
	| 'timestamp'
	| 'tokenAmountIn'
	| 'tokenAmountOut'
	| 'tokenIn'
	| 'tokenInSym'
	| 'tokenOut'
	| 'tokenOutSym'
	| 'tx'
	| 'valueUSD';

export interface Token {
	__typename: 'Token';
	address: Scalars['String'];
	decimals: Scalars['Int'];
	id: Scalars['ID'];
	latestPrice?: Maybe<LatestPrice>;
	name?: Maybe<Scalars['String']>;
	symbol?: Maybe<Scalars['String']>;
	totalBalanceNotional: Scalars['BigDecimal'];
	totalBalanceUSD: Scalars['BigDecimal'];
	totalSwapCount: Scalars['BigInt'];
	totalVolumeNotional: Scalars['BigDecimal'];
	totalVolumeUSD: Scalars['BigDecimal'];
}

export interface TokenPrice {
	__typename: 'TokenPrice';
	amount: Scalars['BigDecimal'];
	asset: Scalars['Bytes'];
	block: Scalars['BigInt'];
	id: Scalars['ID'];
	poolId: Pool;
	price: Scalars['BigDecimal'];
	priceUSD: Scalars['BigDecimal'];
	/**  Address of stable asset  */
	pricingAsset: Scalars['Bytes'];
	timestamp: Scalars['Int'];
}

export interface TokenPrice_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	amount?: InputMaybe<Scalars['BigDecimal']>;
	amount_gt?: InputMaybe<Scalars['BigDecimal']>;
	amount_gte?: InputMaybe<Scalars['BigDecimal']>;
	amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	amount_lt?: InputMaybe<Scalars['BigDecimal']>;
	amount_lte?: InputMaybe<Scalars['BigDecimal']>;
	amount_not?: InputMaybe<Scalars['BigDecimal']>;
	amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	asset?: InputMaybe<Scalars['Bytes']>;
	asset_contains?: InputMaybe<Scalars['Bytes']>;
	asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
	asset_not?: InputMaybe<Scalars['Bytes']>;
	asset_not_contains?: InputMaybe<Scalars['Bytes']>;
	asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	block?: InputMaybe<Scalars['BigInt']>;
	block_gt?: InputMaybe<Scalars['BigInt']>;
	block_gte?: InputMaybe<Scalars['BigInt']>;
	block_in?: InputMaybe<Array<Scalars['BigInt']>>;
	block_lt?: InputMaybe<Scalars['BigInt']>;
	block_lte?: InputMaybe<Scalars['BigInt']>;
	block_not?: InputMaybe<Scalars['BigInt']>;
	block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	poolId?: InputMaybe<Scalars['String']>;
	poolId_?: InputMaybe<Pool_Filter>;
	poolId_contains?: InputMaybe<Scalars['String']>;
	poolId_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_ends_with?: InputMaybe<Scalars['String']>;
	poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_gt?: InputMaybe<Scalars['String']>;
	poolId_gte?: InputMaybe<Scalars['String']>;
	poolId_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_lt?: InputMaybe<Scalars['String']>;
	poolId_lte?: InputMaybe<Scalars['String']>;
	poolId_not?: InputMaybe<Scalars['String']>;
	poolId_not_contains?: InputMaybe<Scalars['String']>;
	poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with?: InputMaybe<Scalars['String']>;
	poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
	poolId_not_starts_with?: InputMaybe<Scalars['String']>;
	poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	poolId_starts_with?: InputMaybe<Scalars['String']>;
	poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
	price?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
	priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	price_gt?: InputMaybe<Scalars['BigDecimal']>;
	price_gte?: InputMaybe<Scalars['BigDecimal']>;
	price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	price_lt?: InputMaybe<Scalars['BigDecimal']>;
	price_lte?: InputMaybe<Scalars['BigDecimal']>;
	price_not?: InputMaybe<Scalars['BigDecimal']>;
	price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	pricingAsset?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_contains?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']>>;
	pricingAsset_not?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']>;
	pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	timestamp?: InputMaybe<Scalars['Int']>;
	timestamp_gt?: InputMaybe<Scalars['Int']>;
	timestamp_gte?: InputMaybe<Scalars['Int']>;
	timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
	timestamp_lt?: InputMaybe<Scalars['Int']>;
	timestamp_lte?: InputMaybe<Scalars['Int']>;
	timestamp_not?: InputMaybe<Scalars['Int']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
}

export type TokenPrice_OrderBy = 'amount' | 'asset' | 'block' | 'id' | 'poolId' | 'price' | 'priceUSD' | 'pricingAsset' | 'timestamp';

export interface TokenSnapshot {
	__typename: 'TokenSnapshot';
	id: Scalars['ID'];
	timestamp: Scalars['Int'];
	token: Token;
	totalBalanceNotional: Scalars['BigDecimal'];
	totalBalanceUSD: Scalars['BigDecimal'];
	totalSwapCount: Scalars['BigInt'];
	totalVolumeNotional: Scalars['BigDecimal'];
	totalVolumeUSD: Scalars['BigDecimal'];
}

export interface TokenSnapshot_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	timestamp?: InputMaybe<Scalars['Int']>;
	timestamp_gt?: InputMaybe<Scalars['Int']>;
	timestamp_gte?: InputMaybe<Scalars['Int']>;
	timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
	timestamp_lt?: InputMaybe<Scalars['Int']>;
	timestamp_lte?: InputMaybe<Scalars['Int']>;
	timestamp_not?: InputMaybe<Scalars['Int']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
	token?: InputMaybe<Scalars['String']>;
	token_?: InputMaybe<Token_Filter>;
	token_contains?: InputMaybe<Scalars['String']>;
	token_contains_nocase?: InputMaybe<Scalars['String']>;
	token_ends_with?: InputMaybe<Scalars['String']>;
	token_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token_gt?: InputMaybe<Scalars['String']>;
	token_gte?: InputMaybe<Scalars['String']>;
	token_in?: InputMaybe<Array<Scalars['String']>>;
	token_lt?: InputMaybe<Scalars['String']>;
	token_lte?: InputMaybe<Scalars['String']>;
	token_not?: InputMaybe<Scalars['String']>;
	token_not_contains?: InputMaybe<Scalars['String']>;
	token_not_contains_nocase?: InputMaybe<Scalars['String']>;
	token_not_ends_with?: InputMaybe<Scalars['String']>;
	token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token_not_in?: InputMaybe<Array<Scalars['String']>>;
	token_not_starts_with?: InputMaybe<Scalars['String']>;
	token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	token_starts_with?: InputMaybe<Scalars['String']>;
	token_starts_with_nocase?: InputMaybe<Scalars['String']>;
	totalBalanceNotional?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalBalanceNotional_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_not?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapCount?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_gt?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_gte?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalSwapCount_lt?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_lte?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_not?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalVolumeNotional?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalVolumeNotional_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_not?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type TokenSnapshot_OrderBy =
	| 'id'
	| 'timestamp'
	| 'token'
	| 'totalBalanceNotional'
	| 'totalBalanceUSD'
	| 'totalSwapCount'
	| 'totalVolumeNotional'
	| 'totalVolumeUSD';

export interface Token_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	address?: InputMaybe<Scalars['String']>;
	address_contains?: InputMaybe<Scalars['String']>;
	address_contains_nocase?: InputMaybe<Scalars['String']>;
	address_ends_with?: InputMaybe<Scalars['String']>;
	address_ends_with_nocase?: InputMaybe<Scalars['String']>;
	address_gt?: InputMaybe<Scalars['String']>;
	address_gte?: InputMaybe<Scalars['String']>;
	address_in?: InputMaybe<Array<Scalars['String']>>;
	address_lt?: InputMaybe<Scalars['String']>;
	address_lte?: InputMaybe<Scalars['String']>;
	address_not?: InputMaybe<Scalars['String']>;
	address_not_contains?: InputMaybe<Scalars['String']>;
	address_not_contains_nocase?: InputMaybe<Scalars['String']>;
	address_not_ends_with?: InputMaybe<Scalars['String']>;
	address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	address_not_in?: InputMaybe<Array<Scalars['String']>>;
	address_not_starts_with?: InputMaybe<Scalars['String']>;
	address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	address_starts_with?: InputMaybe<Scalars['String']>;
	address_starts_with_nocase?: InputMaybe<Scalars['String']>;
	decimals?: InputMaybe<Scalars['Int']>;
	decimals_gt?: InputMaybe<Scalars['Int']>;
	decimals_gte?: InputMaybe<Scalars['Int']>;
	decimals_in?: InputMaybe<Array<Scalars['Int']>>;
	decimals_lt?: InputMaybe<Scalars['Int']>;
	decimals_lte?: InputMaybe<Scalars['Int']>;
	decimals_not?: InputMaybe<Scalars['Int']>;
	decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	latestPrice?: InputMaybe<Scalars['String']>;
	latestPrice_?: InputMaybe<LatestPrice_Filter>;
	latestPrice_contains?: InputMaybe<Scalars['String']>;
	latestPrice_contains_nocase?: InputMaybe<Scalars['String']>;
	latestPrice_ends_with?: InputMaybe<Scalars['String']>;
	latestPrice_ends_with_nocase?: InputMaybe<Scalars['String']>;
	latestPrice_gt?: InputMaybe<Scalars['String']>;
	latestPrice_gte?: InputMaybe<Scalars['String']>;
	latestPrice_in?: InputMaybe<Array<Scalars['String']>>;
	latestPrice_lt?: InputMaybe<Scalars['String']>;
	latestPrice_lte?: InputMaybe<Scalars['String']>;
	latestPrice_not?: InputMaybe<Scalars['String']>;
	latestPrice_not_contains?: InputMaybe<Scalars['String']>;
	latestPrice_not_contains_nocase?: InputMaybe<Scalars['String']>;
	latestPrice_not_ends_with?: InputMaybe<Scalars['String']>;
	latestPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	latestPrice_not_in?: InputMaybe<Array<Scalars['String']>>;
	latestPrice_not_starts_with?: InputMaybe<Scalars['String']>;
	latestPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	latestPrice_starts_with?: InputMaybe<Scalars['String']>;
	latestPrice_starts_with_nocase?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	name_contains?: InputMaybe<Scalars['String']>;
	name_contains_nocase?: InputMaybe<Scalars['String']>;
	name_ends_with?: InputMaybe<Scalars['String']>;
	name_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_gt?: InputMaybe<Scalars['String']>;
	name_gte?: InputMaybe<Scalars['String']>;
	name_in?: InputMaybe<Array<Scalars['String']>>;
	name_lt?: InputMaybe<Scalars['String']>;
	name_lte?: InputMaybe<Scalars['String']>;
	name_not?: InputMaybe<Scalars['String']>;
	name_not_contains?: InputMaybe<Scalars['String']>;
	name_not_contains_nocase?: InputMaybe<Scalars['String']>;
	name_not_ends_with?: InputMaybe<Scalars['String']>;
	name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_not_in?: InputMaybe<Array<Scalars['String']>>;
	name_not_starts_with?: InputMaybe<Scalars['String']>;
	name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	name_starts_with?: InputMaybe<Scalars['String']>;
	name_starts_with_nocase?: InputMaybe<Scalars['String']>;
	symbol?: InputMaybe<Scalars['String']>;
	symbol_contains?: InputMaybe<Scalars['String']>;
	symbol_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_ends_with?: InputMaybe<Scalars['String']>;
	symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_gt?: InputMaybe<Scalars['String']>;
	symbol_gte?: InputMaybe<Scalars['String']>;
	symbol_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_lt?: InputMaybe<Scalars['String']>;
	symbol_lte?: InputMaybe<Scalars['String']>;
	symbol_not?: InputMaybe<Scalars['String']>;
	symbol_not_contains?: InputMaybe<Scalars['String']>;
	symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_not_starts_with?: InputMaybe<Scalars['String']>;
	symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_starts_with?: InputMaybe<Scalars['String']>;
	symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
	totalBalanceNotional?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalBalanceNotional_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_not?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
	totalBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapCount?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_gt?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_gte?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalSwapCount_lt?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_lte?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_not?: InputMaybe<Scalars['BigInt']>;
	totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	totalVolumeNotional?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalVolumeNotional_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_not?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
	totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type Token_OrderBy =
	| 'address'
	| 'decimals'
	| 'id'
	| 'latestPrice'
	| 'name'
	| 'symbol'
	| 'totalBalanceNotional'
	| 'totalBalanceUSD'
	| 'totalSwapCount'
	| 'totalVolumeNotional'
	| 'totalVolumeUSD';

export interface TradePair {
	__typename: 'TradePair';
	/**  Token Address - Token Address  */
	id: Scalars['ID'];
	token0: Token;
	token1: Token;
	totalSwapFee: Scalars['BigDecimal'];
	totalSwapVolume: Scalars['BigDecimal'];
}

export interface TradePair_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	token0?: InputMaybe<Scalars['String']>;
	token0_?: InputMaybe<Token_Filter>;
	token0_contains?: InputMaybe<Scalars['String']>;
	token0_contains_nocase?: InputMaybe<Scalars['String']>;
	token0_ends_with?: InputMaybe<Scalars['String']>;
	token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token0_gt?: InputMaybe<Scalars['String']>;
	token0_gte?: InputMaybe<Scalars['String']>;
	token0_in?: InputMaybe<Array<Scalars['String']>>;
	token0_lt?: InputMaybe<Scalars['String']>;
	token0_lte?: InputMaybe<Scalars['String']>;
	token0_not?: InputMaybe<Scalars['String']>;
	token0_not_contains?: InputMaybe<Scalars['String']>;
	token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
	token0_not_ends_with?: InputMaybe<Scalars['String']>;
	token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token0_not_in?: InputMaybe<Array<Scalars['String']>>;
	token0_not_starts_with?: InputMaybe<Scalars['String']>;
	token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	token0_starts_with?: InputMaybe<Scalars['String']>;
	token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
	token1?: InputMaybe<Scalars['String']>;
	token1_?: InputMaybe<Token_Filter>;
	token1_contains?: InputMaybe<Scalars['String']>;
	token1_contains_nocase?: InputMaybe<Scalars['String']>;
	token1_ends_with?: InputMaybe<Scalars['String']>;
	token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token1_gt?: InputMaybe<Scalars['String']>;
	token1_gte?: InputMaybe<Scalars['String']>;
	token1_in?: InputMaybe<Array<Scalars['String']>>;
	token1_lt?: InputMaybe<Scalars['String']>;
	token1_lte?: InputMaybe<Scalars['String']>;
	token1_not?: InputMaybe<Scalars['String']>;
	token1_not_contains?: InputMaybe<Scalars['String']>;
	token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
	token1_not_ends_with?: InputMaybe<Scalars['String']>;
	token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token1_not_in?: InputMaybe<Array<Scalars['String']>>;
	token1_not_starts_with?: InputMaybe<Scalars['String']>;
	token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	token1_starts_with?: InputMaybe<Scalars['String']>;
	token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
	totalSwapFee?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']>;
	totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type TradePair_OrderBy = 'id' | 'token0' | 'token1' | 'totalSwapFee' | 'totalSwapVolume';

export interface _Block_ {
	__typename: '_Block_';
	/** The hash of the block */
	hash?: Maybe<Scalars['Bytes']>;
	/** The block number */
	number: Scalars['Int'];
}

/** The type for the top-level _meta field */
export interface _Meta_ {
	__typename: '_Meta_';
	/**
	 * Information about a specific subgraph block. The hash of the block
	 * will be null if the _meta field has a block constraint that asks for
	 * a block number. It will be filled if the _meta field has no block constraint
	 * and therefore asks for the latest  block
	 *
	 */
	block: _Block_;
	/** The deployment ID */
	deployment: Scalars['String'];
	/** If `true`, the subgraph encountered indexing errors at some past block */
	hasIndexingErrors: Scalars['Boolean'];
}

export type _SubgraphErrorPolicy_ =
	/** Data will be returned even if the subgraph has indexing errors */
	| 'allow'
	/** If the subgraph has indexing errors, data will be omitted. The default. */
	| 'deny';

export type GetSubgraphHealthQueryVariables = Exact<{
	name: Scalars['String'];
}>;

export type GetSubgraphHealthQuery = {
	__typename: 'Query';
	indexingStatusForCurrentVersion?: {
		__typename: 'SubgraphIndexingStatus';
		synced: boolean;
		health: Health;
		chains: Array<{
			__typename: 'EthereumIndexingStatus';
			chainHeadBlock?: { __typename: 'Block'; number: string } | null;
			latestBlock?: { __typename: 'Block'; number: string } | null;
		}>;
	} | null;
};

export type IndexingStatusFragment = {
	__typename: 'SubgraphIndexingStatus';
	synced: boolean;
	health: Health;
	chains: Array<{
		__typename: 'EthereumIndexingStatus';
		chainHeadBlock?: { __typename: 'Block'; number: string } | null;
		latestBlock?: { __typename: 'Block'; number: string } | null;
	}>;
};

export type GetLatestBlockQueryVariables = Exact<{ [key: string]: never }>;

export type GetLatestBlockQuery = { __typename: 'Query'; blocks: Array<{ __typename: 'Block'; id: string; number: string; timestamp: string }> };

export type GetTimestampedBlockQueryVariables = Exact<{
	gt: Scalars['BigInt'];
	lt: Scalars['BigInt'];
}>;

export type GetTimestampedBlockQuery = { __typename: 'Query'; blocks: Array<{ __typename: 'Block'; number: string }> };

export type GetProtocolDataQueryVariables = Exact<{
	startTimestamp: Scalars['Int'];
	block24: Block_Height;
	block48: Block_Height;
}>;

export type GetProtocolDataQuery = {
	__typename: 'Query';
	koyos: Array<{
		__typename: 'Koyo';
		totalLiquidity: string;
		totalSwapCount: string;
		totalSwapFee: string;
		totalSwapVolume: string;
		poolCount: number;
	}>;
	koyos24: Array<{
		__typename: 'Koyo';
		totalLiquidity: string;
		totalSwapCount: string;
		totalSwapFee: string;
		totalSwapVolume: string;
		poolCount: number;
	}>;
	koyos48: Array<{
		__typename: 'Koyo';
		totalLiquidity: string;
		totalSwapCount: string;
		totalSwapFee: string;
		totalSwapVolume: string;
		poolCount: number;
	}>;
	koyoSnapshots: Array<{
		__typename: 'KoyoSnapshot';
		id: string;
		timestamp: number;
		poolCount: number;
		totalLiquidity: string;
		totalSwapCount: string;
		totalSwapVolume: string;
		totalSwapFee: string;
	}>;
};

export type GetPoolDataQueryVariables = Exact<{
	block24: Block_Height;
	block48: Block_Height;
	blockWeek: Block_Height;
	totalLiquidity: Scalars['BigDecimal'];
}>;

export type GetPoolDataQuery = {
	__typename: 'Query';
	pools: Array<{
		__typename: 'Pool';
		id: string;
		address: string;
		poolType?: string | null;
		symbol?: string | null;
		name?: string | null;
		swapFee: string;
		totalWeight?: string | null;
		totalSwapVolume: string;
		totalSwapFee: string;
		totalLiquidity: string;
		totalShares: string;
		swapsCount: string;
		holdersCount: string;
		createTime: number;
		strategyType: number;
		swapEnabled: boolean;
		owner?: { __typename: 'Account'; id: string } | null;
		tokens?: Array<{
			__typename: 'PoolToken';
			id: string;
			symbol: string;
			name: string;
			decimals: number;
			address: string;
			balance: string;
			invested: string;
			weight?: string | null;
			priceRate: string;
			poolId: { __typename: 'Pool'; id: string; address: string };
		}> | null;
	}>;
	pools24: Array<{
		__typename: 'Pool';
		id: string;
		address: string;
		poolType?: string | null;
		symbol?: string | null;
		name?: string | null;
		swapFee: string;
		totalWeight?: string | null;
		totalSwapVolume: string;
		totalSwapFee: string;
		totalLiquidity: string;
		totalShares: string;
		swapsCount: string;
		holdersCount: string;
		createTime: number;
		strategyType: number;
		swapEnabled: boolean;
		owner?: { __typename: 'Account'; id: string } | null;
		tokens?: Array<{
			__typename: 'PoolToken';
			id: string;
			symbol: string;
			name: string;
			decimals: number;
			address: string;
			balance: string;
			invested: string;
			weight?: string | null;
			priceRate: string;
			poolId: { __typename: 'Pool'; id: string; address: string };
		}> | null;
	}>;
	pools48: Array<{
		__typename: 'Pool';
		id: string;
		address: string;
		poolType?: string | null;
		symbol?: string | null;
		name?: string | null;
		swapFee: string;
		totalWeight?: string | null;
		totalSwapVolume: string;
		totalSwapFee: string;
		totalLiquidity: string;
		totalShares: string;
		swapsCount: string;
		holdersCount: string;
		createTime: number;
		strategyType: number;
		swapEnabled: boolean;
		owner?: { __typename: 'Account'; id: string } | null;
		tokens?: Array<{
			__typename: 'PoolToken';
			id: string;
			symbol: string;
			name: string;
			decimals: number;
			address: string;
			balance: string;
			invested: string;
			weight?: string | null;
			priceRate: string;
			poolId: { __typename: 'Pool'; id: string; address: string };
		}> | null;
	}>;
	poolsWeek: Array<{
		__typename: 'Pool';
		id: string;
		address: string;
		poolType?: string | null;
		symbol?: string | null;
		name?: string | null;
		swapFee: string;
		totalWeight?: string | null;
		totalSwapVolume: string;
		totalSwapFee: string;
		totalLiquidity: string;
		totalShares: string;
		swapsCount: string;
		holdersCount: string;
		createTime: number;
		strategyType: number;
		swapEnabled: boolean;
		owner?: { __typename: 'Account'; id: string } | null;
		tokens?: Array<{
			__typename: 'PoolToken';
			id: string;
			symbol: string;
			name: string;
			decimals: number;
			address: string;
			balance: string;
			invested: string;
			weight?: string | null;
			priceRate: string;
			poolId: { __typename: 'Pool'; id: string; address: string };
		}> | null;
	}>;
	prices: Array<{
		__typename: 'LatestPrice';
		asset: string;
		pricingAsset: string;
		price: string;
		priceUSD: string;
		poolId: { __typename: 'Pool'; id: string };
	}>;
};

export type GetTokenDataQueryVariables = Exact<{
	block24: Block_Height;
	blockWeek: Block_Height;
}>;

export type GetTokenDataQuery = {
	__typename: 'Query';
	tokens: Array<{
		__typename: 'Token';
		id: string;
		address: string;
		decimals: number;
		name?: string | null;
		symbol?: string | null;
		totalBalanceUSD: string;
		totalBalanceNotional: string;
		totalVolumeUSD: string;
		totalVolumeNotional: string;
		totalSwapCount: string;
		latestPrice?: {
			__typename: 'LatestPrice';
			asset: string;
			pricingAsset: string;
			price: string;
			poolId: { __typename: 'Pool'; id: string };
		} | null;
	}>;
	prices: Array<{
		__typename: 'LatestPrice';
		asset: string;
		pricingAsset: string;
		price: string;
		priceUSD: string;
		poolId: { __typename: 'Pool'; id: string };
	}>;
	tokens24: Array<{
		__typename: 'Token';
		id: string;
		address: string;
		decimals: number;
		name?: string | null;
		symbol?: string | null;
		totalBalanceUSD: string;
		totalBalanceNotional: string;
		totalVolumeUSD: string;
		totalVolumeNotional: string;
		totalSwapCount: string;
		latestPrice?: {
			__typename: 'LatestPrice';
			asset: string;
			pricingAsset: string;
			price: string;
			poolId: { __typename: 'Pool'; id: string };
		} | null;
	}>;
	prices24: Array<{
		__typename: 'LatestPrice';
		asset: string;
		pricingAsset: string;
		price: string;
		priceUSD: string;
		poolId: { __typename: 'Pool'; id: string };
	}>;
	tokensWeek: Array<{
		__typename: 'Token';
		id: string;
		address: string;
		decimals: number;
		name?: string | null;
		symbol?: string | null;
		totalBalanceUSD: string;
		totalBalanceNotional: string;
		totalVolumeUSD: string;
		totalVolumeNotional: string;
		totalSwapCount: string;
		latestPrice?: {
			__typename: 'LatestPrice';
			asset: string;
			pricingAsset: string;
			price: string;
			poolId: { __typename: 'Pool'; id: string };
		} | null;
	}>;
	pricesWeek: Array<{
		__typename: 'LatestPrice';
		asset: string;
		pricingAsset: string;
		price: string;
		priceUSD: string;
		poolId: { __typename: 'Pool'; id: string };
	}>;
};

export type GetTokenPageDataQueryVariables = Exact<{
	address: Scalars['String'];
	startTimestamp: Scalars['Int'];
}>;

export type GetTokenPageDataQuery = {
	__typename: 'Query';
	tokenSnapshots: Array<{
		__typename: 'TokenSnapshot';
		id: string;
		timestamp: number;
		totalBalanceUSD: string;
		totalBalanceNotional: string;
		totalVolumeUSD: string;
		totalVolumeNotional: string;
		totalSwapCount: string;
	}>;
};

export type GetPoolChartDataQueryVariables = Exact<{
	poolId: Scalars['String'];
	startTimestamp: Scalars['Int'];
}>;

export type GetPoolChartDataQuery = {
	__typename: 'Query';
	poolSnapshots: Array<{
		__typename: 'PoolSnapshot';
		id: string;
		amounts: Array<string>;
		totalShares: string;
		swapVolume: string;
		swapFees: string;
		timestamp: number;
		totalSwapVolume: string;
		totalSwapFee: string;
		totalLiquidity: string;
		swapsCount: string;
		holdersCount: string;
		pool: { __typename: 'Pool'; id: string };
	}>;
};

export type KoyoChartTokenPricesQueryVariables = Exact<{
	asset: Scalars['Bytes'];
}>;

export type KoyoChartTokenPricesQuery = {
	__typename: 'Query';
	prices1: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; priceUSD: string; amount: string }>;
	prices2: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; priceUSD: string; amount: string }>;
	prices3: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; priceUSD: string; amount: string }>;
	prices4: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; priceUSD: string; amount: string }>;
	prices5: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; priceUSD: string; amount: string }>;
	prices6: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; priceUSD: string; amount: string }>;
};

export type GetTransactionDataQueryVariables = Exact<{
	addresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
	poolIds: Array<Scalars['String']> | Scalars['String'];
	startTimestamp: Scalars['Int'];
}>;

export type GetTransactionDataQuery = {
	__typename: 'Query';
	swapsIn: Array<{
		__typename: 'Swap';
		id: string;
		caller: string;
		tokenIn: string;
		tokenInSym: string;
		tokenOut: string;
		tokenOutSym: string;
		tokenAmountIn: string;
		tokenAmountOut: string;
		timestamp: number;
		tx: string;
		valueUSD: string;
		poolId: { __typename: 'Pool'; id: string; name?: string | null; address: string; swapFee: string };
		account: { __typename: 'Account'; address: string };
	}>;
	swapsOut: Array<{
		__typename: 'Swap';
		id: string;
		caller: string;
		tokenIn: string;
		tokenInSym: string;
		tokenOut: string;
		tokenOutSym: string;
		tokenAmountIn: string;
		tokenAmountOut: string;
		timestamp: number;
		tx: string;
		valueUSD: string;
		poolId: { __typename: 'Pool'; id: string; name?: string | null; address: string; swapFee: string };
		account: { __typename: 'Account'; address: string };
	}>;
	joinExits: Array<{
		__typename: 'JoinExit';
		amounts: Array<string>;
		id: string;
		sender: string;
		timestamp: number;
		tx: string;
		type: InvestType;
		valueUSD: string;
		account: { __typename: 'Account'; address: string };
		pool: { __typename: 'Pool'; id: string; tokensList: Array<string>; tokens?: Array<{ __typename: 'PoolToken'; symbol: string }> | null };
	}>;
};

export type GetAllTransactionDataQueryVariables = Exact<{
	startTimestamp: Scalars['Int'];
}>;

export type GetAllTransactionDataQuery = {
	__typename: 'Query';
	swaps: Array<{
		__typename: 'Swap';
		id: string;
		caller: string;
		tokenIn: string;
		tokenInSym: string;
		tokenOut: string;
		tokenOutSym: string;
		tokenAmountIn: string;
		tokenAmountOut: string;
		timestamp: number;
		tx: string;
		valueUSD: string;
		poolId: { __typename: 'Pool'; id: string; name?: string | null; address: string; swapFee: string };
		account: { __typename: 'Account'; address: string };
	}>;
	joinExits: Array<{
		__typename: 'JoinExit';
		amounts: Array<string>;
		id: string;
		sender: string;
		timestamp: number;
		tx: string;
		type: InvestType;
		valueUSD: string;
		account: { __typename: 'Account'; address: string };
		pool: { __typename: 'Pool'; id: string; tokensList: Array<string>; tokens?: Array<{ __typename: 'PoolToken'; symbol: string }> | null };
	}>;
};

export type GetUserWalletPoolDataQueryVariables = Exact<{
	accountAddress: Scalars['String'];
	block: Scalars['Int'];
}>;

export type GetUserWalletPoolDataQuery = {
	__typename: 'Query';
	poolShares: Array<{
		__typename: 'PoolShare';
		balance: string;
		poolId: { __typename: 'Pool'; id: string; totalLiquidity: string; totalShares: string };
	}>;
};

export type KoyoSnapshotFragment = {
	__typename: 'KoyoSnapshot';
	id: string;
	timestamp: number;
	poolCount: number;
	totalLiquidity: string;
	totalSwapCount: string;
	totalSwapVolume: string;
	totalSwapFee: string;
};

export type KoyoPoolFragment = {
	__typename: 'Pool';
	id: string;
	address: string;
	poolType?: string | null;
	symbol?: string | null;
	name?: string | null;
	swapFee: string;
	totalWeight?: string | null;
	totalSwapVolume: string;
	totalSwapFee: string;
	totalLiquidity: string;
	totalShares: string;
	swapsCount: string;
	holdersCount: string;
	createTime: number;
	strategyType: number;
	swapEnabled: boolean;
	owner?: { __typename: 'Account'; id: string } | null;
	tokens?: Array<{
		__typename: 'PoolToken';
		id: string;
		symbol: string;
		name: string;
		decimals: number;
		address: string;
		balance: string;
		invested: string;
		weight?: string | null;
		priceRate: string;
		poolId: { __typename: 'Pool'; id: string; address: string };
	}> | null;
};

export type KoyoPoolTokenFragment = {
	__typename: 'PoolToken';
	id: string;
	symbol: string;
	name: string;
	decimals: number;
	address: string;
	balance: string;
	invested: string;
	weight?: string | null;
	priceRate: string;
	poolId: { __typename: 'Pool'; id: string; address: string };
};

export type KoyoTokenFragment = {
	__typename: 'Token';
	id: string;
	address: string;
	decimals: number;
	name?: string | null;
	symbol?: string | null;
	totalBalanceUSD: string;
	totalBalanceNotional: string;
	totalVolumeUSD: string;
	totalVolumeNotional: string;
	totalSwapCount: string;
	latestPrice?: {
		__typename: 'LatestPrice';
		asset: string;
		pricingAsset: string;
		price: string;
		poolId: { __typename: 'Pool'; id: string };
	} | null;
};

export type KoyoChartTokenPriceFragment = {
	__typename: 'TokenPrice';
	id: string;
	timestamp: number;
	price: string;
	priceUSD: string;
	amount: string;
};

export type LatestPriceFragment = {
	__typename: 'LatestPrice';
	asset: string;
	pricingAsset: string;
	price: string;
	priceUSD: string;
	poolId: { __typename: 'Pool'; id: string };
};

export type TokenSnapshotFragment = {
	__typename: 'TokenSnapshot';
	id: string;
	timestamp: number;
	totalBalanceUSD: string;
	totalBalanceNotional: string;
	totalVolumeUSD: string;
	totalVolumeNotional: string;
	totalSwapCount: string;
};

export type KoyoSwapFragment = {
	__typename: 'Swap';
	id: string;
	caller: string;
	tokenIn: string;
	tokenInSym: string;
	tokenOut: string;
	tokenOutSym: string;
	tokenAmountIn: string;
	tokenAmountOut: string;
	timestamp: number;
	tx: string;
	valueUSD: string;
	poolId: { __typename: 'Pool'; id: string; name?: string | null; address: string; swapFee: string };
	account: { __typename: 'Account'; address: string };
};

export type KoyoJoinExitFragment = {
	__typename: 'JoinExit';
	amounts: Array<string>;
	id: string;
	sender: string;
	timestamp: number;
	tx: string;
	type: InvestType;
	valueUSD: string;
	account: { __typename: 'Account'; address: string };
	pool: { __typename: 'Pool'; id: string; tokensList: Array<string>; tokens?: Array<{ __typename: 'PoolToken'; symbol: string }> | null };
};

export type KoyoKyoGaugesQueryVariables = Exact<{
	skip?: InputMaybe<Scalars['Int']>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Gauge_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	where?: InputMaybe<Gauge_Filter>;
	block?: InputMaybe<Block_Height>;
}>;

export type KoyoKyoGaugesQuery = {
	__typename: 'Query';
	gauges: Array<{
		__typename: 'Gauge';
		id: string;
		name: string;
		symbol: string;
		killed: boolean;
		weights?: Array<{ __typename: 'GaugeWeight'; time: string; weight: string }> | null;
	}>;
};

export type KoyoKyoGaugeFragment = {
	__typename: 'Gauge';
	id: string;
	name: string;
	symbol: string;
	killed: boolean;
	weights?: Array<{ __typename: 'GaugeWeight'; time: string; weight: string }> | null;
};

export const IndexingStatusFragmentDoc = `
    fragment IndexingStatus on SubgraphIndexingStatus {
  synced
  health
  chains {
    chainHeadBlock {
      number
    }
    latestBlock {
      number
    }
  }
}
    `;
export const KoyoSnapshotFragmentDoc = `
    fragment KoyoSnapshot on KoyoSnapshot {
  id
  timestamp
  poolCount
  totalLiquidity
  totalSwapCount
  totalSwapVolume
  totalSwapFee
}
    `;
export const KoyoPoolTokenFragmentDoc = `
    fragment KoyoPoolToken on PoolToken {
  id
  symbol
  name
  decimals
  address
  balance
  invested
  weight
  priceRate
  poolId {
    id
    address
  }
}
    `;
export const KoyoPoolFragmentDoc = `
    fragment KoyoPool on Pool {
  id
  address
  poolType
  symbol
  name
  swapFee
  totalWeight
  totalSwapVolume
  totalSwapFee
  totalLiquidity
  totalShares
  swapsCount
  holdersCount
  createTime
  owner {
    id
  }
  strategyType
  swapEnabled
  tokens(first: 1000) {
    ...KoyoPoolToken
  }
}
    ${KoyoPoolTokenFragmentDoc}`;
export const KoyoTokenFragmentDoc = `
    fragment KoyoToken on Token {
  id
  address
  decimals
  name
  symbol
  totalBalanceUSD
  totalBalanceNotional
  totalVolumeUSD
  totalVolumeNotional
  totalSwapCount
  latestPrice {
    asset
    pricingAsset
    price
    poolId {
      id
    }
  }
}
    `;
export const KoyoChartTokenPriceFragmentDoc = `
    fragment KoyoChartTokenPrice on TokenPrice {
  id
  timestamp
  price
  priceUSD
  amount
}
    `;
export const LatestPriceFragmentDoc = `
    fragment LatestPrice on LatestPrice {
  asset
  pricingAsset
  price
  priceUSD
  poolId {
    id
  }
}
    `;
export const TokenSnapshotFragmentDoc = `
    fragment TokenSnapshot on TokenSnapshot {
  id
  timestamp
  totalBalanceUSD
  totalBalanceNotional
  totalVolumeUSD
  totalVolumeNotional
  totalSwapCount
}
    `;
export const KoyoSwapFragmentDoc = `
    fragment KoyoSwap on Swap {
  id
  caller
  tokenIn
  tokenInSym
  tokenOut
  tokenOutSym
  tokenAmountIn
  tokenAmountOut
  poolId {
    id
    name
    address
    swapFee
  }
  account {
    address
  }
  timestamp
  tx
  valueUSD
}
    `;
export const KoyoJoinExitFragmentDoc = `
    fragment KoyoJoinExit on JoinExit {
  amounts
  id
  sender
  timestamp
  tx
  type
  valueUSD
  account {
    address
  }
  pool {
    id
    tokensList
    tokens {
      symbol
    }
  }
}
    `;
export const KoyoKyoGaugeFragmentDoc = `
    fragment KoyoKyoGauge on Gauge {
  id
  name
  symbol
  killed
  weights {
    time
    weight
  }
}
    `;
export const GetSubgraphHealthDocument = `
    query GetSubgraphHealth($name: String!) {
  indexingStatusForCurrentVersion(subgraphName: $name) {
    ...IndexingStatus
  }
}
    ${IndexingStatusFragmentDoc}`;
export const useGetSubgraphHealthQuery = <TData = GetSubgraphHealthQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetSubgraphHealthQueryVariables,
	options?: UseQueryOptions<GetSubgraphHealthQuery, TError, TData>
) =>
	useQuery<GetSubgraphHealthQuery, TError, TData>(
		['GetSubgraphHealth', variables],
		fetcher<GetSubgraphHealthQuery, GetSubgraphHealthQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetSubgraphHealthDocument,
			variables
		),
		options
	);
export const GetLatestBlockDocument = `
    query GetLatestBlock {
  blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
    id
    number
    timestamp
  }
}
    `;
export const useGetLatestBlockQuery = <TData = GetLatestBlockQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables?: GetLatestBlockQueryVariables,
	options?: UseQueryOptions<GetLatestBlockQuery, TError, TData>
) =>
	useQuery<GetLatestBlockQuery, TError, TData>(
		variables === undefined ? ['GetLatestBlock'] : ['GetLatestBlock', variables],
		fetcher<GetLatestBlockQuery, GetLatestBlockQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetLatestBlockDocument,
			variables
		),
		options
	);
export const GetTimestampedBlockDocument = `
    query GetTimestampedBlock($gt: BigInt!, $lt: BigInt!) {
  blocks(
    first: 1
    orderBy: timestamp
    orderDirection: desc
    where: {timestamp_gt: $gt, timestamp_lt: $lt}
  ) {
    number
  }
}
    `;
export const useGetTimestampedBlockQuery = <TData = GetTimestampedBlockQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetTimestampedBlockQueryVariables,
	options?: UseQueryOptions<GetTimestampedBlockQuery, TError, TData>
) =>
	useQuery<GetTimestampedBlockQuery, TError, TData>(
		['GetTimestampedBlock', variables],
		fetcher<GetTimestampedBlockQuery, GetTimestampedBlockQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetTimestampedBlockDocument,
			variables
		),
		options
	);
export const GetProtocolDataDocument = `
    query GetProtocolData($startTimestamp: Int!, $block24: Block_height!, $block48: Block_height!) {
  koyos(first: 1) {
    totalLiquidity
    totalSwapCount
    totalSwapFee
    totalSwapVolume
    poolCount
  }
  koyos24: koyos(first: 1, block: $block24) {
    totalLiquidity
    totalSwapCount
    totalSwapFee
    totalSwapVolume
    poolCount
  }
  koyos48: koyos(first: 1, block: $block48) {
    totalLiquidity
    totalSwapCount
    totalSwapFee
    totalSwapVolume
    poolCount
  }
  koyoSnapshots(
    first: 1000
    orderBy: timestamp
    orderDirection: asc
    where: {timestamp_gte: $startTimestamp}
  ) {
    ...KoyoSnapshot
  }
}
    ${KoyoSnapshotFragmentDoc}`;
export const useGetProtocolDataQuery = <TData = GetProtocolDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetProtocolDataQueryVariables,
	options?: UseQueryOptions<GetProtocolDataQuery, TError, TData>
) =>
	useQuery<GetProtocolDataQuery, TError, TData>(
		['GetProtocolData', variables],
		fetcher<GetProtocolDataQuery, GetProtocolDataQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetProtocolDataDocument,
			variables
		),
		options
	);
export const GetPoolDataDocument = `
    query GetPoolData($block24: Block_height!, $block48: Block_height!, $blockWeek: Block_height!, $totalLiquidity: BigDecimal!) {
  pools(
    first: 1000
    orderBy: totalLiquidity
    orderDirection: desc
    where: {totalLiquidity_gt: $totalLiquidity}
  ) {
    ...KoyoPool
  }
  pools24: pools(
    first: 1000
    orderBy: totalLiquidity
    orderDirection: desc
    where: {totalLiquidity_gt: $totalLiquidity}
    block: $block24
  ) {
    ...KoyoPool
  }
  pools48: pools(
    first: 1000
    orderBy: totalLiquidity
    orderDirection: desc
    where: {totalLiquidity_gt: $totalLiquidity}
    block: $block48
  ) {
    ...KoyoPool
  }
  poolsWeek: pools(
    first: 1000
    orderBy: totalLiquidity
    orderDirection: desc
    where: {totalLiquidity_gt: $totalLiquidity}
    block: $blockWeek
  ) {
    ...KoyoPool
  }
  prices: latestPrices(first: 1000) {
    ...LatestPrice
  }
}
    ${KoyoPoolFragmentDoc}
${LatestPriceFragmentDoc}`;
export const useGetPoolDataQuery = <TData = GetPoolDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetPoolDataQueryVariables,
	options?: UseQueryOptions<GetPoolDataQuery, TError, TData>
) =>
	useQuery<GetPoolDataQuery, TError, TData>(
		['GetPoolData', variables],
		fetcher<GetPoolDataQuery, GetPoolDataQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetPoolDataDocument, variables),
		options
	);
export const GetTokenDataDocument = `
    query GetTokenData($block24: Block_height!, $blockWeek: Block_height!) {
  tokens: tokens(first: 1000, orderBy: totalBalanceUSD, orderDirection: desc) {
    ...KoyoToken
  }
  prices: latestPrices(first: 1000) {
    ...LatestPrice
  }
  tokens24: tokens(
    first: 1000
    orderBy: totalBalanceUSD
    orderDirection: desc
    block: $block24
  ) {
    ...KoyoToken
  }
  prices24: latestPrices(first: 1000, block: $block24) {
    ...LatestPrice
  }
  tokensWeek: tokens(
    first: 1000
    orderBy: totalBalanceUSD
    orderDirection: desc
    block: $blockWeek
  ) {
    ...KoyoToken
  }
  pricesWeek: latestPrices(first: 1000, block: $blockWeek) {
    ...LatestPrice
  }
}
    ${KoyoTokenFragmentDoc}
${LatestPriceFragmentDoc}`;
export const useGetTokenDataQuery = <TData = GetTokenDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetTokenDataQueryVariables,
	options?: UseQueryOptions<GetTokenDataQuery, TError, TData>
) =>
	useQuery<GetTokenDataQuery, TError, TData>(
		['GetTokenData', variables],
		fetcher<GetTokenDataQuery, GetTokenDataQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetTokenDataDocument, variables),
		options
	);
export const GetTokenPageDataDocument = `
    query GetTokenPageData($address: String!, $startTimestamp: Int!) {
  tokenSnapshots(
    first: 1000
    orderBy: timestamp
    orderDirection: asc
    where: {token: $address, timestamp_gte: $startTimestamp}
  ) {
    ...TokenSnapshot
  }
}
    ${TokenSnapshotFragmentDoc}`;
export const useGetTokenPageDataQuery = <TData = GetTokenPageDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetTokenPageDataQueryVariables,
	options?: UseQueryOptions<GetTokenPageDataQuery, TError, TData>
) =>
	useQuery<GetTokenPageDataQuery, TError, TData>(
		['GetTokenPageData', variables],
		fetcher<GetTokenPageDataQuery, GetTokenPageDataQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetTokenPageDataDocument,
			variables
		),
		options
	);
export const GetPoolChartDataDocument = `
    query GetPoolChartData($poolId: String!, $startTimestamp: Int!) {
  poolSnapshots(
    first: 1000
    orderBy: timestamp
    orderDirection: asc
    where: {pool: $poolId, timestamp_gte: $startTimestamp}
  ) {
    id
    amounts
    totalShares
    swapVolume
    swapFees
    timestamp
    totalSwapVolume
    totalSwapFee
    totalLiquidity
    swapsCount
    holdersCount
    pool {
      id
    }
  }
}
    `;
export const useGetPoolChartDataQuery = <TData = GetPoolChartDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetPoolChartDataQueryVariables,
	options?: UseQueryOptions<GetPoolChartDataQuery, TError, TData>
) =>
	useQuery<GetPoolChartDataQuery, TError, TData>(
		['GetPoolChartData', variables],
		fetcher<GetPoolChartDataQuery, GetPoolChartDataQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetPoolChartDataDocument,
			variables
		),
		options
	);
export const KoyoChartTokenPricesDocument = `
    query KoyoChartTokenPrices($asset: Bytes!) {
  prices1: tokenPrices(
    skip: 0
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {asset: $asset}
  ) {
    ...KoyoChartTokenPrice
  }
  prices2: tokenPrices(
    skip: 1000
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {asset: $asset}
  ) {
    ...KoyoChartTokenPrice
  }
  prices3: tokenPrices(
    skip: 2000
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {asset: $asset}
  ) {
    ...KoyoChartTokenPrice
  }
  prices4: tokenPrices(
    skip: 3000
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {asset: $asset}
  ) {
    ...KoyoChartTokenPrice
  }
  prices5: tokenPrices(
    skip: 4000
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {asset: $asset}
  ) {
    ...KoyoChartTokenPrice
  }
  prices6: tokenPrices(
    skip: 5000
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {asset: $asset}
  ) {
    ...KoyoChartTokenPrice
  }
}
    ${KoyoChartTokenPriceFragmentDoc}`;
export const useKoyoChartTokenPricesQuery = <TData = KoyoChartTokenPricesQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: KoyoChartTokenPricesQueryVariables,
	options?: UseQueryOptions<KoyoChartTokenPricesQuery, TError, TData>
) =>
	useQuery<KoyoChartTokenPricesQuery, TError, TData>(
		['KoyoChartTokenPrices', variables],
		fetcher<KoyoChartTokenPricesQuery, KoyoChartTokenPricesQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			KoyoChartTokenPricesDocument,
			variables
		),
		options
	);
export const GetTransactionDataDocument = `
    query GetTransactionData($addresses: [Bytes!]!, $poolIds: [String!]!, $startTimestamp: Int!) {
  swapsIn: swaps(
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {tokenIn_in: $addresses, poolId_in: $poolIds, timestamp_gte: $startTimestamp}
  ) {
    ...KoyoSwap
  }
  swapsOut: swaps(
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {tokenOut_in: $addresses, poolId_in: $poolIds, timestamp_gte: $startTimestamp}
  ) {
    ...KoyoSwap
  }
  joinExits(
    first: 150
    orderBy: timestamp
    orderDirection: desc
    where: {pool_in: $poolIds, timestamp_gte: $startTimestamp}
  ) {
    ...KoyoJoinExit
  }
}
    ${KoyoSwapFragmentDoc}
${KoyoJoinExitFragmentDoc}`;
export const useGetTransactionDataQuery = <TData = GetTransactionDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetTransactionDataQueryVariables,
	options?: UseQueryOptions<GetTransactionDataQuery, TError, TData>
) =>
	useQuery<GetTransactionDataQuery, TError, TData>(
		['GetTransactionData', variables],
		fetcher<GetTransactionDataQuery, GetTransactionDataQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetTransactionDataDocument,
			variables
		),
		options
	);
export const GetAllTransactionDataDocument = `
    query GetAllTransactionData($startTimestamp: Int!) {
  swaps: swaps(
    first: 1000
    orderBy: timestamp
    orderDirection: desc
    where: {timestamp_gte: $startTimestamp}
  ) {
    ...KoyoSwap
  }
  joinExits(
    first: 150
    orderBy: timestamp
    orderDirection: desc
    where: {timestamp_gte: $startTimestamp}
  ) {
    ...KoyoJoinExit
  }
}
    ${KoyoSwapFragmentDoc}
${KoyoJoinExitFragmentDoc}`;
export const useGetAllTransactionDataQuery = <TData = GetAllTransactionDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetAllTransactionDataQueryVariables,
	options?: UseQueryOptions<GetAllTransactionDataQuery, TError, TData>
) =>
	useQuery<GetAllTransactionDataQuery, TError, TData>(
		['GetAllTransactionData', variables],
		fetcher<GetAllTransactionDataQuery, GetAllTransactionDataQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetAllTransactionDataDocument,
			variables
		),
		options
	);
export const GetUserWalletPoolDataDocument = `
    query GetUserWalletPoolData($accountAddress: String!, $block: Int!) {
  poolShares(
    block: {number: $block}
    first: 1000
    where: {account: $accountAddress, balance_gt: 0}
  ) {
    balance
    poolId {
      id
      totalLiquidity
      totalShares
    }
  }
}
    `;
export const useGetUserWalletPoolDataQuery = <TData = GetUserWalletPoolDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables: GetUserWalletPoolDataQueryVariables,
	options?: UseQueryOptions<GetUserWalletPoolDataQuery, TError, TData>
) =>
	useQuery<GetUserWalletPoolDataQuery, TError, TData>(
		['GetUserWalletPoolData', variables],
		fetcher<GetUserWalletPoolDataQuery, GetUserWalletPoolDataQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetUserWalletPoolDataDocument,
			variables
		),
		options
	);
export const KoyoKyoGaugesDocument = `
    query KoyoKyoGauges($skip: Int, $first: Int, $orderBy: Gauge_orderBy, $orderDirection: OrderDirection, $where: Gauge_filter, $block: Block_height) {
  gauges(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    ...KoyoKyoGauge
  }
}
    ${KoyoKyoGaugeFragmentDoc}`;
export const useKoyoKyoGaugesQuery = <TData = KoyoKyoGaugesQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables?: KoyoKyoGaugesQueryVariables,
	options?: UseQueryOptions<KoyoKyoGaugesQuery, TError, TData>
) =>
	useQuery<KoyoKyoGaugesQuery, TError, TData>(
		variables === undefined ? ['KoyoKyoGauges'] : ['KoyoKyoGauges', variables],
		fetcher<KoyoKyoGaugesQuery, KoyoKyoGaugesQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, KoyoKyoGaugesDocument, variables),
		options
	);
export { fetcher };
