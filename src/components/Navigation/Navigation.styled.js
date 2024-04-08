import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(7)};
`;

export const NavLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary()};
`;
