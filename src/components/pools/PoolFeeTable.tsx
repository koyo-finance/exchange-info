import React, { useCallback, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TYPE } from 'theme';
import { DarkGreyCard, GreyBadge } from 'components/Card';
import Loader, { LoadingRows } from 'components/Loader';
import { AutoColumn } from 'components/Column';
import { RowFixed } from 'components/Row';
import { formatDollarAmount } from 'utils/numbers';
import PoolCurrencyLogo from 'components/PoolCurrencyLogo';
import { Label, ClickableText } from 'components/Text';
import { PageButtons, Arrow, Break } from 'components/shared';
import { POOL_HIDE } from '../../constants/index';
import useTheme from 'hooks/useTheme';
import { networkPrefix } from 'utils/networkPrefix';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { PoolData } from '../../data/balancer/balancerTypes';
import { getShortPoolName } from 'utils/getShortPoolName';

const Wrapper = styled(DarkGreyCard)`
    width: 100%;
`;

const ResponsiveGrid = styled.div`
    display: grid;
    grid-gap: 1em;
    align-items: center;

    grid-template-columns: 20px 3.5fr repeat(3, 1fr);

    @media screen and (max-width: 900px) {
        grid-template-columns: 20px 1.5fr repeat(2, 1fr);
        & :nth-child(3) {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 20px 1.5fr repeat(1, 1fr);
        & :nth-child(5) {
            display: none;
        }
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 2.5fr repeat(1, 1fr);
        > *:nth-child(1) {
            display: none;
        }
    }
`;

const LinkWrapper = styled(Link)`
    text-decoration: none;
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

const SORT_FIELD = {
    feeTier: 'feeTier',
    volumeUSD: 'volumeUSD',
    tvlUSD: 'tvlUSD',
    feesEpochUSD: 'feesEpochUSD',
};



const DataRow = ({ poolData, index }: { poolData: PoolData; index: number }) => {
    const [activeNetwork] = useActiveNetworkVersion();

    return (
        <LinkWrapper to={networkPrefix(activeNetwork) + 'pools/' + poolData.id}>
            <ResponsiveGrid>
                <Label fontWeight={400}>{index + 1}</Label>
                <Label fontWeight={400}>
                    <RowFixed>
                        <TYPE.label mr="8px">{getShortPoolName(poolData)}</TYPE.label>
                        <PoolCurrencyLogo tokens={poolData.tokens} />
                        <GreyBadge ml="10px" fontSize="14px">
                            {(poolData.swapFee * 100).toFixed(2)}%
                        </GreyBadge>
                    </RowFixed>
                </Label>
                <Label end={1} fontWeight={400}>
                    {formatDollarAmount(poolData.tvlUSD)}
                </Label>
                <Label end={1} fontWeight={400}>
                    {formatDollarAmount(poolData.volumeUSD)}
                </Label>
                <Label end={1} fontWeight={400}>
                    {formatDollarAmount(poolData.feesEpochUSD)}
                </Label>
            </ResponsiveGrid>
        </LinkWrapper>
    );
};

const MAX_ITEMS = 10;

export default function PoolFeeTable({ poolDatas, maxItems = MAX_ITEMS }: { poolDatas: PoolData[]; maxItems?: number }) {
    // theming
    const theme = useTheme();

    // for sorting
    const [sortField, setSortField] = useState(SORT_FIELD.feesEpochUSD);
    const [sortDirection, setSortDirection] = useState<boolean>(true);

    // pagination
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    useEffect(() => {
        let extraPages = 1;
        if (poolDatas.length % maxItems === 0) {
            extraPages = 0;
        }
        setMaxPage(Math.floor(poolDatas.length / maxItems) + extraPages);
    }, [maxItems, poolDatas]);

    const sortedPools = useMemo(() => {
        return poolDatas
            ? poolDatas
                  .filter((x) => !!x && !POOL_HIDE.includes(x.address) && x.poolType !== 'Element')
                  .sort((a, b) => {
                      if (a && b) {
                          return a[sortField as keyof PoolData] > b[sortField as keyof PoolData]
                              ? (sortDirection ? -1 : 1) * 1
                              : (sortDirection ? -1 : 1) * -1;
                      } else {
                          return -1;
                      }
                  })
                  .slice(maxItems * (page - 1), page * maxItems)
            : [];
    }, [maxItems, page, poolDatas, sortDirection, sortField]);

    const handleSort = useCallback(
        (newField: string) => {
            setSortField(newField);
            setSortDirection(sortField !== newField ? true : !sortDirection);
        },
        [sortDirection, sortField],
    );

    const arrow = useCallback(
        (field: string) => {
            return sortField === field ? (!sortDirection ? '↑' : '↓') : '';
        },
        [sortDirection, sortField],
    );

    if (!poolDatas) {
        return <Loader />;
    }

    return (
        <Wrapper>
            {sortedPools.length > 0 ? (
                <AutoColumn gap="12px">
                    <ResponsiveGrid>
                        <Label color={theme.text2}>#</Label>
                        <ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.feeTier)}>
                            Pool {arrow(SORT_FIELD.feeTier)}
                        </ClickableText>
                        <ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.tvlUSD)}>
                            TVL {arrow(SORT_FIELD.tvlUSD)}
                        </ClickableText>
                        <ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.volumeUSD)}>
                            Volume 24H {arrow(SORT_FIELD.volumeUSD)}
                        </ClickableText>
                        <ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.feesEpochUSD)}>
                            Epoch Fees {arrow(SORT_FIELD.feesEpochUSD)}
                        </ClickableText>
                    </ResponsiveGrid>
                    <Break />
                    {sortedPools.map((poolData, i) => {
                        if (poolData) {
                            return (
                                <React.Fragment key={i}>
                                    <DataRow index={(page - 1) * MAX_ITEMS + i} poolData={poolData} />
                                    <Break />
                                </React.Fragment>
                            );
                        }
                        return null;
                    })}
                    <PageButtons>
                        <div
                            onClick={() => {
                                setPage(page === 1 ? page : page - 1);
                            }}
                        >
                            <Arrow faded={page === 1 ? true : false}>←</Arrow>
                        </div>
                        <TYPE.body>{'Page ' + page + ' of ' + maxPage}</TYPE.body>
                        <div
                            onClick={() => {
                                setPage(page === maxPage ? page : page + 1);
                            }}
                        >
                            <Arrow faded={page === maxPage ? true : false}>→</Arrow>
                        </div>
                    </PageButtons>
                </AutoColumn>
            ) : (
                <LoadingRows>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </LoadingRows>
            )}
        </Wrapper>
    );
}
