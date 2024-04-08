import * as SC from "./UserMenu.styled";

export const UserMenu = () => {
  return (
    <SC.UserMenuWrapper>
      <SC.User>
        <SC.UserAvatar>U</SC.UserAvatar>
        <SC.UserName>Username</SC.UserName>
      </SC.User>
      <SC.LogoutBtn type="button">
        Log out
        <SC.LogoutIcon />
      </SC.LogoutBtn>
    </SC.UserMenuWrapper>
  );
};
