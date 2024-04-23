import { useEffect, useState } from "react";

import { useAuth } from "@/hooks/useAuth";

import { Navigation } from "@/components/Navigation/Navigation";
import { AuthNav } from "@/components/AuthNav/AuthNav";
import { UserMenu } from "@/components/UserMenu/UserMenu";
import * as SC from "./Header.styled";

export const Header = () => {
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <SC.Header>
      <SC.HeaderWrapper>
        <SC.Logo to="/" onClick={closeMobileMenu}>
          <SC.LogoIcon />
          LearnLingo
        </SC.Logo>
        <Navigation />
        {currentUser ? <UserMenu /> : <AuthNav />}

        <SC.MobileMenuBtn type="button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <SC.CrossIcon /> : <SC.MobileMenuIcon />}
        </SC.MobileMenuBtn>
      </SC.HeaderWrapper>

      {isMobileMenuOpen && (
        <SC.MobileMenuWrapper>
          <SC.MobileMenuBackdrop />
          <Navigation
            mobileMenuOpen={isMobileMenuOpen}
            onCloseMobileMenu={closeMobileMenu}
          />
          {currentUser ? (
            <UserMenu
              mobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={closeMobileMenu}
            />
          ) : (
            <AuthNav
              mobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={closeMobileMenu}
            />
          )}
        </SC.MobileMenuWrapper>
      )}
    </SC.Header>
  );
};
