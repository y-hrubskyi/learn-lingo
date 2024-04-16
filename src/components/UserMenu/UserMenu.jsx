import { useAuth } from "@/hooks/useAuth";

import * as SC from "./UserMenu.styled";

export const UserMenu = () => {
  const { currentUser } = useAuth();

  return (
    <SC.UserMenuWrapper>
      <SC.User>
        <SC.UserAvatar>{currentUser.displayName[0]}</SC.UserAvatar>
        <SC.UserName>{currentUser.displayName}</SC.UserName>
      </SC.User>
      <SC.LogoutBtn type="button">
        Log out
        <SC.LogoutIcon />
      </SC.LogoutBtn>
    </SC.UserMenuWrapper>
  );
};
