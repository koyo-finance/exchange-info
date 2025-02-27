import Column from '../Column';
import { KOYO_APP_LINK, KOYO_DISCORD_LINK, KOYO_DOCS_LINK, KOYO_INFO_CODE_LINK } from '../../data/koyo/constants';
import { darken } from 'polished';
import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Code, Info, MessageCircle } from 'react-feather';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { networkPrefix } from '../../utils/networkPrefix';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { ApplicationModal } from '../../state/application/actions';
import { useActiveNetworkVersion, useModalOpen, useToggleModal } from '../../state/application/hooks';
import { ExternalLink } from '../../theme';
import { useDeviceSelectors } from 'react-device-detect';

const StyledMenuIcon = styled(MenuIcon)`
	path {
		stroke: ${({ theme }) => theme.text1};
	}
`;

const StyledMenuButton = styled.button`
	width: 100%;
	height: 100%;
	border: none;
	background-color: transparent;
	margin: 0;
	padding: 0;
	height: 35px;
	background-color: ${({ theme }) => theme.bg3};

	padding: 0.15rem 0.5rem;
	border-radius: 0.5rem;

	:hover,
	:focus {
		cursor: pointer;
		outline: none;
		background-color: ${({ theme }) => theme.bg4};
	}

	svg {
		margin-top: 2px;
	}
`;

const StyledMenu = styled.div`
	margin-left: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	border: none;
	text-align: left;
`;

const MenuFlyout = styled.span`
	min-width: 8.125rem;
	background-color: ${({ theme }) => theme.bg3};
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);
	border-radius: 12px;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	position: absolute;
	top: 2.6rem;
	right: 0rem;
	z-index: 100;
`;

const MenuItem = styled(ExternalLink)`
	flex: 1;
	padding: 0.5rem 0.5rem;
	color: ${({ theme }) => theme.text2};
	:hover {
		color: ${({ theme }) => theme.text1};
		cursor: pointer;
		text-decoration: none;
		opacity: 0.6;
	}
	> svg {
		margin-right: 8px;
	}
`;

const activeClassName = 'ACTIVE';

const StyledNavLink = styled(NavLink).attrs({
	activeClassName
})`
	${({ theme }) => theme.flexRowNoWrap}
	align-items: left;
	border-radius: 3rem;
	outline: none;
	cursor: pointer;
	text-decoration: none;
	color: ${({ theme }) => theme.text3};
	font-size: 1rem;
	width: fit-content;
	margin: 0 6px;
	padding: 8px 12px;
	font-weight: 500;

	&.${activeClassName} {
		border-radius: 12px;
		background-color: ${({ theme }) => theme.bg2};
		color: ${({ theme }) => theme.text1};
	}

	:hover,
	:focus {
		color: ${({ theme }) => darken(0.1, theme.text1)};
	}
`;

const Menu: React.FC = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [selectors] = useDeviceSelectors(window.navigator.userAgent);

	const node = useRef<HTMLDivElement>();
	const open = useModalOpen(ApplicationModal.MENU);
	const toggle = useToggleModal(ApplicationModal.MENU);
	useOnClickOutside(node, open ? toggle : undefined);
	const [activeNewtork] = useActiveNetworkVersion();

	useEffect(() => {
		setIsMobile(selectors?.isMobile || false);
	}, [selectors]);

	return (
		// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
		<StyledMenu ref={node as any}>
			<StyledMenuButton onClick={toggle}>
				<StyledMenuIcon />
			</StyledMenuButton>

			{open && (
				<MenuFlyout>
					{isMobile ? (
						<Column>
							<StyledNavLink id={`pool-nav-link`} to={networkPrefix(activeNewtork)} isActive={(_, { pathname }) => pathname === '/'}>
								Protocol
							</StyledNavLink>
							<StyledNavLink id={`stake-nav-link`} to={`${networkPrefix(activeNewtork)}pools`}>
								Pools
							</StyledNavLink>
							<StyledNavLink id={`stake-nav-link`} to={`${networkPrefix(activeNewtork)}gauges`}>
								Gauges
							</StyledNavLink>
							<StyledNavLink id={`stake-nav-link`} to={`${networkPrefix(activeNewtork)}tokens`}>
								Tokens
							</StyledNavLink>
							<StyledNavLink id={`stake-nav-link`} to={`${networkPrefix(activeNewtork)}fees`}>
								Fees
							</StyledNavLink>
							<StyledNavLink id={`stake-nav-link`} to={`${networkPrefix(activeNewtork)}treasury`}>
								Treasury
							</StyledNavLink>
						</Column>
					) : null}
					<MenuItem id="link" href={KOYO_APP_LINK}>
						<Info size={14} />
						About
					</MenuItem>
					<MenuItem id="link" href={KOYO_DOCS_LINK}>
						<BookOpen size={14} />
						Docs
					</MenuItem>
					<MenuItem id="link" href={KOYO_INFO_CODE_LINK}>
						<Code size={14} />
						Github
					</MenuItem>
					<MenuItem id="link" href={KOYO_DISCORD_LINK}>
						<MessageCircle size={14} />
						Discord
					</MenuItem>
				</MenuFlyout>
			)}
		</StyledMenu>
	);
};

export default Menu;
