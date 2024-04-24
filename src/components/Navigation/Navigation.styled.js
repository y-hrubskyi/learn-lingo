import styled from "styled-components";
import { Link } from "react-router-dom";

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
  gap: ${(p) => p.theme.spacing(7)};

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: ${(p) => p.theme.spacing(4)};
  }
`;

export const NavLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary()};

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;
