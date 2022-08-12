import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

import { QUERIES } from '../../constants';


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Rebajas</NavLink>
          <NavLink href="/new">Nuevas Ofertas</NavLink>
          <NavLink href="/men">Hombres</NavLink>
          <NavLink href="/women">Mujeres</NavLink>
          <NavLink href="/kids">Niños</NavLink>
          <NavLink href="/collections">Colecciones</NavLink>
          <NavLink href="/collections">Primavera</NavLink>
        </Nav>
        <NavIcons>
          <Icon id="shopping-bag" strokeWidth={2} />
          <Icon id="search" strokeWidth={2} />
          <MenuButtonWrapper onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} /> 
          </MenuButtonWrapper>
        </NavIcons>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};


const MainHeader = styled.div`
  overflow: scroll;
  overflow-y: hidden;
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
  }

  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp( 
    1rem,
    3vw - 1rem,
    5rem
  );
  /* margin: 0px 48px; */
  // margin-right: 0;
  white-space: nowrap;

  @media ${QUERIES.tabletAndDown} {
    display: none; 
  }
`;

const NavIcons = styled.nav`
  display: none;
  
  @media ${QUERIES.tabletAndDown} {
    display: unset; 
    display: flex;
    gap: 32px;
    margin-left: auto; 
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const MenuButtonWrapper = styled.button`
  border: none; 
  background-color: transparent;
`

const LogoWrapper = styled.div`
  flex: 1;
  margin-right: 48px;

  @media ${QUERIES.tabletAndDown} {
    flex: 0;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
