import styled from "styled-components";

import PaletteSVG from "@/assets/icons/palette.svg?react";

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding-right: ${(p) => p.theme.spacing(16)};
  padding-left: ${(p) => p.theme.spacing(16)};
`;

export const ThemeWrapper = styled.div`
  position: fixed;
  top: 5%;
  right: 5%;
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
