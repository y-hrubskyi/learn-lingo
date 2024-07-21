import styled from 'styled-components';

import LogoutSVG from '@/assets/icons/logout.svg?react';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};

  @media screen and (max-width: 767px) {
    position: relative;
    display: ${p => (p['data-mobile-menu-open'] ? 'block' : 'none')};
    z-index: 999;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const UserAvatarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 0;

  font-weight: 600;
  font-size: 16px;
  color: ${p => p.theme.colors.primary()};

  background: ${p => p.theme.colors.accent};
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.primary()};
`;

export const Backdrop = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 36px;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(4)};

  background-color: ${p => p.theme.colors.primaryBg};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  z-index: 100;

  @media screen and (max-width: 767px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const LogoutBtn = styled.button`
  display: flex;

  gap: ${p => p.theme.spacing(2)};
  padding: 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${p => p.theme.colors.primary()};
  white-space: nowrap;

  background-color: transparent;
  border: none;

  transition: ${p => p.theme.transition('color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const LogoutIcon = styled(LogoutSVG)`
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  stroke: ${p => p.theme.colors.accent};
`;
