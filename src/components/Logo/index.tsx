import React, { useMemo, useState } from 'react';
import { HelpCircle } from 'react-feather';
import { ImageProps } from 'rebass';
import styled from 'styled-components';

const BAD_SRCS: { [tokenAddress: string]: true } = {};

export interface LogoProps extends Pick<ImageProps, 'style' | 'alt' | 'className'> {
	srcs: string[];
}

/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback triangle alert
 */
const Logo: React.FC<LogoProps> = ({ srcs, alt, ...rest }) => {
	const [refreshV, refresh] = useState<number>(0);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const src: string | undefined = useMemo(() => srcs.find((src) => !BAD_SRCS[src]), [srcs, refreshV, refresh]);

	if (src) {
		return (
			<img
				{...rest}
				alt={alt}
				src={src}
				onError={() => {
					if (src) BAD_SRCS[src] = true;
					refresh((i) => i + 1);
				}}
			/>
		);
	}

	return <HelpCircle {...rest} />;
};

export default Logo;

export const GenericImageWrapper = styled.img<{ size?: string }>`
	width: ${({ size }) => size ?? '20px'};
	height: ${({ size }) => size ?? '20px'};
`;
