import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { getTheme } from "@/styles/theme";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { Header } from "@/components/Header/Header";

import * as SC from "./Layout.styled";

export const Layout = () => {
  const [theme, setTheme] = useState("yellow");
  const location = useLocation();

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <SC.Container>
        <GlobalStyle locationPath={location.pathname} />

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
