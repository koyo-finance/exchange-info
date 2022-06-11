/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
}

export interface Account {
	__typename: 'Account';
	address: Scalars['Bytes'];
	/**    */
	gaugeWeightVotes?: Maybe<Array<GaugeWeightVote>>;
	/**  Liquidity gauges this account contributed to  */
	gauges?: Maybe<Array<GaugeLiquidity>>;
	id: Scalars['ID'];
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

export interface Account_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	address?: InputMaybe<Scalars['Bytes']>;
	address_contains?: InputMaybe<Scalars['Bytes']>;
	address_in?: InputMaybe<Array<Scalars['Bytes']>>;
	address_not?: InputMaybe<Scalars['Bytes']>;
	address_not_contains?: InputMaybe<Scalars['Bytes']>;
	address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
}

export type Account_OrderBy = 'address' | 'gaugeWeightVotes' | 'gauges' | 'id';

export interface Block {
	__typename: 'Block';
	author?: Maybe<Scalars['String']>;
	difficulty?: Maybe<Scalars['BigInt']>;
	gasLimit?: Maybe<Scalars['BigInt']>;
	gasUsed?: Maybe<Scalars['BigInt']>;
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

export interface Gauge {
	__typename: 'Gauge';
	address: Scalars['Bytes'];
	created: Scalars['BigInt'];
	createdAtBlock: Scalars['BigInt'];
	createdAtTransaction: Scalars['Bytes'];
	id: Scalars['ID'];
	name: Scalars['String'];
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
	type?: InputMaybe<Scalars['String']>;
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
}

export type Gauge_OrderBy =
	| 'address'
	| 'created'
	| 'createdAtBlock'
	| 'createdAtTransaction'
	| 'id'
	| 'name'
	| 'symbol'
	| 'type'
	| 'weightVotes'
	| 'weights';

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';

export interface Query {
	__typename: 'Query';
	/** Access to subgraph metadata */
	_meta?: Maybe<_Meta_>;
	account?: Maybe<Account>;
	accounts: Array<Account>;
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
}

export interface Query_MetaArgs {
	block?: InputMaybe<Block_Height>;
}

export interface QueryAccountArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
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

export interface QueryBlockArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
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

export interface Subscription {
	__typename: 'Subscription';
	/** Access to subgraph metadata */
	_meta?: Maybe<_Meta_>;
	account?: Maybe<Account>;
	accounts: Array<Account>;
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
}

export interface Subscription_MetaArgs {
	block?: InputMaybe<Block_Height>;
}

export interface SubscriptionAccountArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
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

export type GetLatestBlockQueryVariables = Exact<{ [key: string]: never }>;

export type GetLatestBlockQuery = { __typename: 'Query'; blocks: Array<{ __typename: 'Block'; id: string; number: string; timestamp: string }> };

export const GetLatestBlockDocument = gql`
	query GetLatestBlock {
		blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
			id
			number
			timestamp
		}
	}
`;

/**
 * __useGetLatestBlockQuery__
 *
 * To run a query within a React component, call `useGetLatestBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestBlockQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLatestBlockQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestBlockQuery, GetLatestBlockQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetLatestBlockQuery, GetLatestBlockQueryVariables>(GetLatestBlockDocument, options);
}
export function useGetLatestBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestBlockQuery, GetLatestBlockQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetLatestBlockQuery, GetLatestBlockQueryVariables>(GetLatestBlockDocument, options);
}
export type GetLatestBlockQueryHookResult = ReturnType<typeof useGetLatestBlockQuery>;
export type GetLatestBlockLazyQueryHookResult = ReturnType<typeof useGetLatestBlockLazyQuery>;
export type GetLatestBlockQueryResult = Apollo.QueryResult<GetLatestBlockQuery, GetLatestBlockQueryVariables>;
