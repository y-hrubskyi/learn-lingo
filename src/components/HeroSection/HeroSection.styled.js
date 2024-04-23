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
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(6)};
`;

export const LeftWrapper = styled.div`
  width: 100%;
  padding: ${(p) => p.theme.spacing(10)};

  border-radius: ${(p) => p.theme.radii.modal};
  background-color: ${(p) => p.theme.colors.secondaryBg};

  @media screen and (min-width: 1440px) {
    padding: ${(p) => p.theme.spacing(24.5)} ${(p) => p.theme.spacing(16)};
    width: 720px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: ${(p) => p.theme.spacing(8)};

  font-size: 28px;
  font-weight: 500;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary()};

  @media screen and (min-width: 768px) {
    max-width: 440px;
    font-size: 36px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 548px;
    font-size: 48px;
  }
`;

export const AccentText = styled.span`
  font-style: italic;
  font-weight: 400;

  background-color: ${(p) => p.theme.colors.hover};
`;

export const HeroDescription = styled.p`
  max-width: 471px;
  margin-bottom: ${(p) => p.theme.spacing(8)};

  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary()};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(10)};
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: ${(p) => p.theme.spacing(16)};
  }
`;

export const GetStartedLink = styled(Link)`
  display: inline-block;
  padding: ${(p) => p.theme.spacing(3)} ${(p) => p.theme.spacing(8)};

  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary()};

  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.btn};

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(16)};
  }

  @media screen and (min-width: 1440px) {
    padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(22)};
  }
`;

export const RightWrapper = styled.div`
  height: 262px;
  width: 280px;

  border-radius: ${(p) => p.theme.radii.modal};
  background-color: ${(p) => p.theme.colors.hover};

  background-image: url(${chooseMacImg}), url(${GirlImg});
  background-position: center bottom, center top 16px;
  background-repeat: no-repeat, no-repeat;
  background-size: 80%, 65%;

  @media screen and (min-width: 375px) {
    background-size: 75%, 65%;
    background-position: center bottom, center top 28px;
    height: 315px;
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    background-size: 75%, 65%;
    background-position: center bottom, center top 36px;
    height: 430px;
    width: 459px;
  }

  @media screen and (min-width: 1440px) {
    height: 530px;
    width: 568px;

    background-position: center bottom, center top 40px;
  }
`;
