import styled from "styled-components";

import LogoutSVG from "@/assets/icons/logout.svg?react";

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(5)};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const UserAvatar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  font-weight: 600;
  font-size: 16px;
  color: ${(p) => p.theme.colors.primary()};

  background: ${(p) => p.theme.colors.accent};
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.primary()};
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const LogoutBtn = styled.button`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
  padding: 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.primary()};

  background-color: transparent;
  border: none;

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const LogoutIcon = styled(LogoutSVG)`
  width: 20px;
  height: 20px;
  stroke: ${(p) => p.theme.colors.accent};
`;
