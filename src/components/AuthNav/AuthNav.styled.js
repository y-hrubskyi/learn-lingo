import styled from "styled-components";

import LoginSVG from "@/assets/icons/login.svg?react";

export const AuthNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(4)};
`;

export const LoginBtn = styled.button`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
  padding: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.primary()};

  background-color: transparent;
  border: none;
`;

export const LoginIcon = styled(LoginSVG)`
  width: 20px;
  height: 20px;
`;

export const RegisterBtn = styled.button`
  border-radius: ${(p) => p.theme.radii.btn};
  padding: ${(p) => p.theme.spacing(3.5)} ${(p) => p.theme.spacing(10)};

  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.primaryBg};

  background-color: ${(p) => p.theme.colors.primary()};
  border: none;
`;
