import styled from 'styled-components';

import LoginSVG from '~/assets/icons/login.svg?react';

export const AuthNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};

  @media screen and (max-width: 767px) {
    position: relative;
    display: ${p => (p['data-mobile-menu-open'] ? 'flex' : 'none')};
    flex-direction: column;
    z-index: 999;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  padding-top: ${p => p.theme.spacing(2.5)};
  padding-bottom: ${p => p.theme.spacing(2.5)};
  padding-right: ${p => p.theme.spacing(3)};
  padding-left: ${p => p.theme.spacing(2)};

  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${p => p.theme.colors.primary()};
  white-space: nowrap;

  background-color: ${p => p.theme.colors.primaryBg};
  border: 1px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.btn};

  transition: ${p => p.theme.transition('color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const LoginIcon = styled(LoginSVG)`
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  stroke: ${p => p.theme.colors.accent};
`;

export const RegisterBtn = styled.button`
  padding: ${p => p.theme.spacing(2.5)} ${p => p.theme.spacing(5)};

  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${p => p.theme.colors.primaryBg};

  background-color: ${p => p.theme.colors.primary()};
  border: none;
  border-radius: ${p => p.theme.radii.btn};

  transition: ${p => p.theme.transition('color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 1440px) {
    padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(10)};
  }
`;
