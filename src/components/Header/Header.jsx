import { useAuth } from "@/hooks/useAuth";

import { Navigation } from "@/components/Navigation/Navigation";
import { AuthNav } from "@/components/AuthNav/AuthNav";
import { UserMenu } from "@/components/UserMenu/UserMenu";

import * as SC from "./Header.styled";

export const Header = () => {
  const { currentUser } = useAuth();

  return (
    <SC.Header>
      <SC.Logo to="/">
        <SC.LogoIcon />
        LearnLingo
      </SC.Logo>
      <Navigation />
      {currentUser ? <UserMenu /> : <AuthNav />}
    </SC.Header>
  );
};
