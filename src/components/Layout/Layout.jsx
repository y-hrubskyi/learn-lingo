import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { getInitialTheme } from "@/services/localStorage";
import { getTheme } from "@/styles/theme";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Header } from "@/components/Header/Header";
import { ThemeModal } from "@/components/ThemeModal/ThemeModal";

import * as SC from "./Layout.styled";

export const Layout = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isThemePopupOpen, setisThemePopupOpen] = useState(false);
  const location = useLocation();

  const toggleThemePopup = () => {
    setisThemePopupOpen((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <SC.Container>
        <GlobalStyle locationPath={location.pathname} />

        <SC.ThemeWrapper>
          <SC.ThemeBtn type="button" onClick={toggleThemePopup}>
            <SC.PaletteIcon />
          </SC.ThemeBtn>
          {isThemePopupOpen && (
            <ThemeModal onClose={toggleThemePopup} onThemeSelect={setTheme} />
          )}
        </SC.ThemeWrapper>

        <Header />
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </SC.Container>
    </ThemeProvider>
  );
};
