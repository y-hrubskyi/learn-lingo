import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  overflow: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: 72px;
  right: 5.25%;

  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(1)};
  padding: ${(p) => p.theme.spacing(1)};

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: 8px;
  overflow: auto;
  z-index: 100;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ThemeColor = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;

  background-color: ${(p) => p["data-theme-color"]};
  border: none;
  border-radius: 8px;
`;
