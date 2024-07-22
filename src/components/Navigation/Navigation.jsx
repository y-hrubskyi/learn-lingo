import { useAuth } from '@/hooks/useAuth';

import * as SC from './Navigation.styled';

export const Navigation = ({ mobileMenuOpen, onCloseMobileMenu }) => {
  const { currentUser } = useAuth();

  return (
    <SC.Navigation data-mobile-menu-open={mobileMenuOpen}>
      <SC.NavList data-mobile-menu-open={mobileMenuOpen}>
        <SC.NavItem>
          <SC.NavLink to="/" onClick={onCloseMobileMenu}>
            Home
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/teachers" onClick={onCloseMobileMenu}>
            Teachers
          </SC.NavLink>
        </SC.NavItem>
        {currentUser && (
          <SC.NavItem>
            <SC.NavLink to="/favorites" onClick={onCloseMobileMenu}>
              Favorites
            </SC.NavLink>
          </SC.NavItem>
        )}
      </SC.NavList>
    </SC.Navigation>
  );
};
