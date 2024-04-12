import styled from "styled-components";

import CrossSVG from "@/assets/icons/cross.svg?react";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: ${(p) => p.theme.colors.primary(0.5)};
  overflow: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${(p) => p["data-width"]};
  max-height: 90%;
  padding: ${(p) => p.theme.spacing(16)};

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: ${(p) => p.theme.radii.modal};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 14px;
    margin-bottom: 14px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(p) => p.theme.colors.primary(0.2)};
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  width: 32px;
  height: 32px;
  padding: 0;

  color: ${(p) => p.theme.colors.primary()};

  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.hover};
  }
`;

export const CrossIcon = styled(CrossSVG)`
  stroke: currentColor;

  transition: ${(p) => p.theme.transition("color")};
`;

export const BaseModalTitle = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(5)};

  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primary()};
`;

export const BaseModalDescription = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(10)};

  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: ${(p) => p.theme.colors.primary(0.8)};
`;
