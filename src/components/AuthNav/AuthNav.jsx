import * as SC from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <SC.AuthNavWrapper>
      <SC.LoginBtn type="button">
        <SC.LoginIcon />
        Log in
      </SC.LoginBtn>
      <SC.RegisterBtn type="button">Registration</SC.RegisterBtn>
    </SC.AuthNavWrapper>
  );
};
