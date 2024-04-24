import { useAuth } from "@/hooks/useAuth";

import * as SC from "./Navigation.styled";

export const Navigation = ({ mobileMenuOpen, onCloseMobileMenu }) => {
  const { currentUser } = useAuth();

  return (
    <SC.Navigation data-mobile-menu-open={mobileMenuOpen}>
      <SC.NavList data-mobile-menu-open={mobileMenuOpen}>
        <li>
          <SC.NavLink to="/" onClick={onCloseMobileMenu}>
            Home
          </SC.NavLink>
        </li>
        <li>
          <SC.NavLink to="/teachers" onClick={onCloseMobileMenu}>
            Teachers
          </SC.NavLink>
        </li>
        {currentUser && (
          <li>
            <SC.NavLink to="/favorites" onClick={onCloseMobileMenu}>
              Favorites
            </SC.NavLink>
          </li>
        )}
      </SC.NavList>
    </SC.Navigation>
  );
};
