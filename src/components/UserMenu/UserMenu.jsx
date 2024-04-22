import { useState } from "react";
import toast from "react-hot-toast";

import { useAuth } from "@/hooks/useAuth";

import { ToastMessage } from "@/components/common/ToastMessage/ToastMessage.styled";
import * as SC from "./UserMenu.styled";

export const UserMenu = () => {
  const {
    currentUser: { displayName },
    logOut,
  } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      const logoutPromise = logOut();

      await toast.promise(logoutPromise, {
        loading: <ToastMessage>Logging out...</ToastMessage>,
        success: <ToastMessage>Logout successful!</ToastMessage>,
        error: <ToastMessage>Logout failed. Try again.</ToastMessage>,
      });
    } catch (error) {
      // handled in toast.promise
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SC.UserMenuWrapper>
      {displayName && (
        <SC.User>
          <SC.UserAvatar>{displayName[0]}</SC.UserAvatar>
          <SC.UserName>{displayName}</SC.UserName>
        </SC.User>
      )}
      <SC.LogoutBtn type="button" onClick={handleLogout} disabled={isLoading}>
        Log out
        <SC.LogoutIcon />
      </SC.LogoutBtn>
    </SC.UserMenuWrapper>
  );
};
