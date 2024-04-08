import { Navigation } from "@/components/Navigation/Navigation";

import * as SC from "./Header.styled";

export const Header = () => {
  return (
    <SC.Header>
      <SC.Logo to="/">
        <SC.LogoIcon />
        LearnLingo
      </SC.Logo>
      <Navigation />
    </SC.Header>
  );
};
