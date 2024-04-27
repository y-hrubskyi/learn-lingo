import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Navigation = styled.nav`
  @media screen and (max-width: 767px) {
    position: relative;
    display: ${(p) => (p["data-mobile-menu-open"] ? "block" : "none")};
    z-index: 999;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(2)};

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  width: 100px;
  height: 40px;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary()};

  border: 1px solid ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.btn};

  transition: ${(p) => p.theme.transition("background-color")};

  &.active,
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;
