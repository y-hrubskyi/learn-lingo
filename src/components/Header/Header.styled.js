import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoSVG from '~/assets/icons/logo.svg?react';
import MobileMenuSVG from '~/assets/icons/mobile-menu.svg?react';
import CrossSVG from '~/assets/icons/cross.svg?react';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};

  @media screen and (min-width: 1440px) {
    padding-left: ${p => p.theme.spacing(16)};
    padding-right: ${p => p.theme.spacing(16)};
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 999;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primary()};
  text-decoration: none;

  transition: ${p => p.theme.transition('color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const LogoIcon = styled(LogoSVG)`
  width: 28px;
  height: 28px;
`;

export const MobileMenuBtn = styled.button`
  padding: 0;
  width: 28px;
  height: 28px;

  color: ${p => p.theme.colors.primary()};

  border: none;
  background-color: transparent;

  transition: ${p => p.theme.transition('color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled(MobileMenuSVG)`
  width: 28px;
  height: 28px;

  stroke: currentColor;
`;

export const CrossIcon = styled(CrossSVG)`
  width: 28px;
  height: 28px;

  stroke: currentColor;
`;

export const MobileMenuWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(10)};
  height: 400px;

  z-index: 998;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${p => p.theme.colors.primaryBg};

  z-index: 997;
`;
