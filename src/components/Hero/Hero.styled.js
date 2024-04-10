import styled from "styled-components";
import { Link } from "react-router-dom";

import GirlImg from "@/assets/img/hero/girl.png";
import YellowMacImg from "@/assets/img/hero/yellow-mac.png";
import GreenMacImg from "@/assets/img/hero/green-mac.png";
import BlueMacImg from "@/assets/img/hero/blue-mac.png";
import CoralMacImg from "@/assets/img/hero/coral-mac.png";
import PeachMacImg from "@/assets/img/hero/peach-mac.png";

const chooseMacImg = ({ theme }) => {
  switch (theme.name) {
    case "yellow":
      return YellowMacImg;
    case "green":
      return GreenMacImg;
    case "blue":
      return BlueMacImg;
    case "coral":
      return CoralMacImg;
    case "peach":
      return PeachMacImg;
  }
};

export const HeroSection = styled.section`
  display: flex;
  gap: ${(p) => p.theme.spacing(6)};
  height: 530px;
`;

export const LeftWrapper = styled.div`
  height: 100%;
  width: 720px;
  padding: ${(p) => p.theme.spacing(16)};

  border-radius: ${(p) => p.theme.radii.modal};
  background-color: ${(p) => p.theme.colors.secondaryBg};
`;

export const HeroTitle = styled.h1`
  max-width: 548px;
  margin-bottom: ${(p) => p.theme.spacing(8)};

  font-weight: 500;
  font-size: 48px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary()};
`;

export const AccentText = styled.span`
  font-style: italic;
  font-weight: 400;

  background-color: ${(p) => p.theme.colors.hover};
`;

export const HeroDescription = styled.p`
  max-width: 471px;
  margin-bottom: ${(p) => p.theme.spacing(16)};

  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary()};
`;

export const GetStartedLink = styled(Link)`
  border-radius: ${(p) => p.theme.radii.btn};
  padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(22)};

  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary()};

  background-color: ${(p) => p.theme.colors.accent};

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;

export const RightWrapper = styled.div`
  height: 100%;
  width: 568px;

  border-radius: ${(p) => p.theme.radii.modal};
  background-color: ${(p) => p.theme.colors.hover};

  background-image: url(${chooseMacImg}), url(${GirlImg});
  background-position: center bottom, center top 80px;
  background-repeat: no-repeat, no-repeat;
`;
