import { Navigation } from "@/components/Navigation/Navigation";
import { AuthNav } from "@/components/AuthNav/AuthNav";
import { UserMenu } from "@/components/UserMenu/UserMenu";

import * as SC from "./Header.styled";

export const Header = () => {
  return (
    <SC.Header>
      <SC.Logo to="/">
        <SC.LogoIcon />
        LearnLingo
      </SC.Logo>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </SC.Header>
  );
};
