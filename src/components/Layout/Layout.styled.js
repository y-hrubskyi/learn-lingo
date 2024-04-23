import styled from "styled-components";

import PaletteSVG from "@/assets/icons/palette.svg?react";

export const Container = styled.div`
  margin: 0 auto;
  padding-right: ${(p) => p.theme.spacing(5)};
  padding-left: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: ${(p) => p.theme.spacing(10)};
    padding-left: ${(p) => p.theme.spacing(10)};
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: ${(p) => p.theme.spacing(16)};
    padding-right: ${(p) => p.theme.spacing(16)};
  }
`;

export const ThemeWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
`;

export const ThemeBtn = styled.button`
  width: 48px;
  height: 48px;
  padding: 0;

  background-color: transparent;
  border-radius: 50%;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const PaletteIcon = styled(PaletteSVG)``;
