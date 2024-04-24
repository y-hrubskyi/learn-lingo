import { useState } from "react";
import toast from "react-hot-toast";

import { useAuth } from "@/hooks/useAuth";

import { ToastMessage } from "@/components/common/ToastMessage/ToastMessage.styled";
import * as SC from "./UserMenu.styled";

export const UserMenu = ({ mobileMenuOpen, onCloseMobileMenu }) => {
  const {
    currentUser: { displayName },
    logOut,
  } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsUserDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      const logoutPromise = logOut();

      await toast.promise(logoutPromise, {
        loading: <ToastMessage>Logging out...</ToastMessage>,
        success: <ToastMessage>Logout successful!</ToastMessage>,
        error: <ToastMessage>Logout failed. Try again.</ToastMessage>,
      });
      onCloseMobileMenu();
    } catch (error) {
      // handled in toast.promise
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SC.UserMenuWrapper data-mobile-menu-open={mobileMenuOpen}>
      {displayName && (
        <SC.User>
          <SC.UserAvatarBtn onClick={toggleDropdown}>
            {displayName[0]}
          </SC.UserAvatarBtn>
        </SC.User>
      )}
      {isUserDropdownOpen && (
        <>
          <SC.Backdrop onClick={toggleDropdown} />
          <SC.DropdownMenu>
            <SC.UserName>{displayName}</SC.UserName>
            <SC.LogoutBtn
              type="button"
              onClick={handleLogout}
              disabled={isLoading}
            >
              Log out
              <SC.LogoutIcon />
            </SC.LogoutBtn>
          </SC.DropdownMenu>
        </>
      )}
    </SC.UserMenuWrapper>
  );
};
