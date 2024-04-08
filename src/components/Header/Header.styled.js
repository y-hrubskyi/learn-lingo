import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoSVG from "@/assets/icons/logo.svg?react";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(p) => p.theme.spacing(5)} ${(p) => p.theme.spacing(16)};
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2)};

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary()};
  text-decoration: none;
`;

export const LogoIcon = styled(LogoSVG)`
  width: 28px;
  height: 28px;
`;
