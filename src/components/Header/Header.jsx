import { Navigation } from "@/components/Navigation/Navigation";
import { AuthNav } from "@/components/AuthNav/AuthNav";

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
    </SC.Header>
  );
};
